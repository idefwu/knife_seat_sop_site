/**
 * 設計風格：安全工房 (Safety Workshop)
 * 刀座切換作業指導網站 — 左右框架 (Frame) 架構
 * 左框架：固定導覽（標誌＋文件編號＋步驟＋區塊），不隨右側捲動
 * 右框架：獨立捲動，承載 Hero／文件抬頭／步驟卡／警示帶／影片／流程圖／照片／頁尾
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { Hero } from "@/components/Hero";
import { DocHeader } from "@/components/DocHeader";
import { SideFrame } from "@/components/SideFrame";
import { StepCard } from "@/components/StepCard";
import { SafetyBanner } from "@/components/SafetyBanner";
import { VideoSection } from "@/components/VideoSection";
import { FlowchartSection } from "@/components/FlowchartSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { SiteFooter } from "@/components/SiteFooter";
import { Lightbox } from "@/components/Lightbox";
import { SectionTitle } from "@/components/SectionTitle";
import { STEPS } from "@/data/steps";

export default function Home() {
  const [active, setActive] = useState("step-1");
  const [lb, setLb] = useState<{ url: string | null; caption: string }>({
    url: null,
    caption: "",
  });
  // 右框架捲動容器
  const scrollRef = useRef<HTMLDivElement>(null);

  // 右框架內平滑捲動定位
  const scrollTo = useCallback((id: string) => {
    const container = scrollRef.current;
    const el = document.getElementById(id);
    if (!container || !el) return;
    const top =
      el.getBoundingClientRect().top -
      container.getBoundingClientRect().top +
      container.scrollTop -
      16;
    container.scrollTo({ top, behavior: "smooth" });
  }, []);

  // 偵測目前位置以高亮左框架（在右框架捲動容器內觀察）
  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;
    const ids = [
      ...STEPS.map((s) => `step-${s.no}`),
      "sec-safety",
      "sec-video",
      "sec-flow",
      "sec-photo",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.target.id) setActive(e.target.id);
        });
      },
      { root, rootMargin: "-25% 0px -60% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const openLightbox = (url: string, caption: string) =>
    setLb({ url, caption });
  const closeLightbox = () => setLb({ url: null, caption: "" });

  return (
    <div className="bg-background text-foreground">
      {/* 左框架 */}
      <SideFrame active={active} scrollTo={scrollTo} />

      {/* 右框架（獨立捲動） */}
      <div
        ref={scrollRef}
        className="h-screen overflow-y-auto pt-[57px] lg:ml-[300px] lg:pt-0"
      >
        <div id="sec-top" />
        <Hero scrollTo={scrollTo} />

        <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
          <DocHeader />

          {/* 步驟區 */}
          <section className="mt-12">
            <SectionTitle
              no="01"
              en="OPERATION STEPS"
              zh="作業步驟"
              desc="共 8 步驟・退出 → 切換 → 連線"
            />
            <div className="flex flex-col gap-6">
              {STEPS.map((s) => (
                <StepCard key={s.no} step={s} onOpenCard={openLightbox} />
              ))}
            </div>
          </section>

          <div id="sec-safety">
            <SafetyBanner />
          </div>

          <div id="sec-video">
            <VideoSection />
          </div>

          <div id="sec-flow">
            <FlowchartSection onOpen={openLightbox} />
          </div>

          <div id="sec-photo">
            <PhotoGallery onOpen={openLightbox} />
          </div>
        </main>

        <SiteFooter />
      </div>

      <Lightbox
        open={!!lb.url}
        url={lb.url}
        caption={lb.caption}
        onClose={closeLightbox}
      />
    </div>
  );
}

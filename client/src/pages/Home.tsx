/**
 * 設計風格：安全工房 (Safety Workshop)
 * 刀座切換作業指導網站 — 主頁面
 * 結構：Hero → 文件抬頭列 → 步驟導航+步驟卡 → 安全警示帶 → 教學影片 → 流程圖 → 現場照片 → 頁尾
 */
import { useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { DocHeader } from "@/components/DocHeader";
import { StepNav } from "@/components/StepNav";
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
  const [active, setActive] = useState(1);
  const [lb, setLb] = useState<{ url: string | null; caption: string }>({
    url: null,
    caption: "",
  });

  // 滾動定位：偵測目前步驟
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const no = Number((e.target as HTMLElement).dataset.no);
            if (no) setActive(no);
          }
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );
    STEPS.forEach((s) => {
      const el = document.getElementById(`step-${s.no}`);
      if (el) {
        el.dataset.no = String(s.no);
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, []);

  const openLightbox = (url: string, caption: string) =>
    setLb({ url, caption });
  const closeLightbox = () => setLb({ url: null, caption: "" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />

      <main id="doc-body" className="container py-10">
        <DocHeader />

        {/* 步驟區：左導航 + 右步驟卡 */}
        <section className="mt-12">
          <SectionTitle
            no="01"
            en="OPERATION STEPS"
            zh="作業步驟"
            desc="共 8 步驟・退出 → 切換 → 連線"
          />
          <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
            <aside className="hidden lg:block">
              <StepNav active={active} />
            </aside>
            <div className="flex flex-col gap-6">
              {STEPS.map((s) => (
                <StepCard key={s.no} step={s} onOpenCard={openLightbox} />
              ))}
            </div>
          </div>
        </section>

        <SafetyBanner />

        <div id="video">
          <VideoSection />
        </div>

        <FlowchartSection onOpen={openLightbox} />

        <PhotoGallery onOpen={openLightbox} />
      </main>

      <SiteFooter />

      <Lightbox
        open={!!lb.url}
        url={lb.url}
        caption={lb.caption}
        onClose={closeLightbox}
      />
    </div>
  );
}

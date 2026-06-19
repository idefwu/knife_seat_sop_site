/** 安全工房：完整動態教學影片區（YouTube 嵌入，含點封面播放） */
import { useState } from "react";
import { PlayCircle } from "lucide-react";
import { HERO_URL, YOUTUBE_ID } from "@/data/steps";
import { SectionTitle } from "./SectionTitle";

export function VideoSection() {
  const [started, setStarted] = useState(false);

  return (
    <section className="py-12">
      <SectionTitle
        no="V"
        en="TEACHING VIDEO"
        zh="完整動態教學影片"
        desc="約 4 分 56 秒・含語音旁白逐步示範"
      />
      <div className="overflow-hidden border border-border bg-black">
        <div className="relative aspect-video w-full">
          {!started ? (
            <button
              onClick={() => setStarted(true)}
              className="group relative block h-full w-full"
            >
              <img
                src={HERO_URL}
                alt="教學影片封面"
                className="h-full w-full object-cover opacity-60 transition-opacity group-hover:opacity-45"
              />
              <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white">
                <PlayCircle
                  className="h-16 w-16 transition-transform duration-200 group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <span className="text-base font-bold tracking-wide">
                  播放完整教學影片
                </span>
                <span className="text-xs text-white/70">
                  涵蓋刀座退出 → 切換 → 連線全流程
                </span>
              </span>
            </button>
          ) : (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
              title="刀座切換作業完整教學影片"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}

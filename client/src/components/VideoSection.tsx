/** 安全工房：完整動態教學影片區（含 loading 狀態） */
import { useState } from "react";
import { Loader2, PlayCircle } from "lucide-react";
import { FULL_VIDEO_URL, HERO_URL } from "@/data/steps";
import { SectionTitle } from "./SectionTitle";

export function VideoSection() {
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);

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
              onClick={() => {
                setStarted(true);
                setLoading(true);
              }}
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
            <>
              {loading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-black text-white">
                  <Loader2 className="h-8 w-8 animate-spin" />
                  <span className="text-sm text-white/70">影片載入中…</span>
                </div>
              )}
              <video
                src={FULL_VIDEO_URL}
                controls
                autoPlay
                playsInline
                onCanPlay={() => setLoading(false)}
                className="h-full w-full"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

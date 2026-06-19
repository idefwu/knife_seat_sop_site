/**
 * 安全工房：步驟工卡
 * 圖號、操作要點、關鍵點色票、關鍵點理由、設備、作業圖卡（可開燈箱）
 */
import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck, Wrench, Maximize2 } from "lucide-react";
import {
  KEYPOINT_LABEL,
  PHOTO_URLS,
  type KeyPointType,
  type Step,
} from "@/data/steps";

const typeMeta: Record<
  KeyPointType,
  { color: string; Icon: typeof AlertTriangle; word: string }
> = {
  safety: { color: "var(--safety)", Icon: AlertTriangle, word: "安全警示" },
  quality: { color: "var(--quality)", Icon: ShieldCheck, word: "品質要求" },
  skill: { color: "var(--skill)", Icon: Wrench, word: "操作技巧" },
};

export function StepCard({
  step,
  onOpenCard,
}: {
  step: Step;
  onOpenCard: (url: string, caption: string) => void;
}) {
  const meta = typeMeta[step.keyPointType];
  const { Icon } = meta;

  return (
    <motion.article
      id={`step-${step.no}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
      className="scroll-mt-6 overflow-hidden border border-border bg-card"
    >
      {/* 階段標籤 */}
      {step.phase && (
        <div className="hazard-stripe-thin relative flex items-center px-4 py-1.5">
          <span className="bg-[#1a1a1a] px-2 py-0.5 text-sm font-black tracking-widest text-accent">
            {step.phase}
          </span>
        </div>
      )}

      <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
        {/* 左：文字資訊 */}
        <div className="flex flex-col gap-4 p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <span
              className="font-mono text-5xl font-bold leading-none text-stroke"
              style={{ color: "var(--muted-foreground)" }}
            >
              {String(step.no).padStart(2, "0")}
            </span>
            <h3 className="pt-1 text-xl font-black leading-snug sm:text-2xl">
              {step.title}
            </h3>
          </div>

          {/* 關鍵點 */}
          <div
            className="flex gap-3 border-l-4 bg-black/20 p-3"
            style={{ borderColor: meta.color }}
          >
            <Icon
              className="mt-0.5 h-5 w-5 shrink-0"
              style={{ color: meta.color }}
            />
            <div>
              <div
                className="mb-0.5 text-xs font-bold tracking-wider"
                style={{ color: meta.color }}
              >
                {meta.word}・{KEYPOINT_LABEL[step.keyPointType]}關鍵點
              </div>
              <p className="text-sm font-medium leading-relaxed text-foreground">
                {step.keyPoint}
              </p>
            </div>
          </div>

          {/* 設備 + 照片標號 */}
          <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">使用設備</span>
              <span className="font-medium">{step.equipment}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">對照照片</span>
              <span className="flex gap-1.5">
                {step.photoRefs.map((p) => (
                  <button
                    key={p}
                    onClick={() => onOpenCard(PHOTO_URLS[p], `現場照片 ${p}`)}
                    className="rounded-sm border border-border px-1.5 py-0.5 font-mono text-xs font-bold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {p}
                  </button>
                ))}
              </span>
            </div>
          </div>
        </div>

        {/* 右：作業圖卡 */}
        <div className="relative border-t border-border bg-black/30 lg:border-l lg:border-t-0">
          <button
            onClick={() =>
              onOpenCard(step.cards[0], `步驟 ${step.no}・${step.title}`)
            }
            className="group relative block h-full w-full"
          >
            <img
              src={step.cards[0]}
              alt={`步驟 ${step.no} 作業圖卡`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-sm bg-black/70 px-2 py-1 text-xs font-medium text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
              <Maximize2 className="h-3.5 w-3.5" /> 放大圖卡
            </span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}

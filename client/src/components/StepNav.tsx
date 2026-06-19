/**
 * 安全工房：左側固定步驟導航（豎向時間軸 01–08）
 * 點擊平滑滾動定位；目前步驟以安全紅高亮
 */
import { STEPS, KEYPOINT_LABEL, type KeyPointType } from "@/data/steps";

const typeColor: Record<KeyPointType, string> = {
  safety: "var(--safety)",
  quality: "var(--quality)",
  skill: "var(--skill)",
};

export function StepNav({ active }: { active: number }) {
  const go = (no: number) => {
    const el = document.getElementById(`step-${no}`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 24;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-4">
      <div className="mb-3 flex items-center gap-2 border-b border-border pb-2">
        <span className="font-mono text-xs tracking-widest text-accent">
          STEPS
        </span>
        <span className="text-xs text-muted-foreground">作業流程 8 步驟</span>
      </div>
      <ol className="relative">
        {/* 時間軸主線 */}
        <span
          className="absolute left-[18px] top-2 bottom-2 w-px bg-border"
          aria-hidden
        />
        {STEPS.map((s) => {
          const isActive = active === s.no;
          return (
            <li key={s.no} className="relative">
              {s.phase && (
                <div className="mb-1 mt-3 pl-11 text-[11px] font-bold tracking-wider text-accent first:mt-0">
                  ▸ {s.phase}
                </div>
              )}
              <button
                onClick={() => go(s.no)}
                className="group flex w-full items-center gap-3 py-1.5 text-left transition-transform duration-150 active:scale-[0.98]"
              >
                <span
                  className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border font-mono text-sm font-bold transition-colors duration-150"
                  style={{
                    borderColor: isActive
                      ? "var(--safety)"
                      : "var(--border)",
                    background: isActive ? "var(--safety)" : "var(--card)",
                    color: isActive
                      ? "var(--primary-foreground)"
                      : "var(--muted-foreground)",
                  }}
                >
                  {String(s.no).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={`block truncate text-sm transition-colors ${
                      isActive
                        ? "font-bold text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {s.title}
                  </span>
                  <span
                    className="mt-0.5 inline-block rounded-sm px-1.5 py-px text-[10px] font-bold text-white"
                    style={{ background: typeColor[s.keyPointType] }}
                  >
                    {KEYPOINT_LABEL[s.keyPointType]}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

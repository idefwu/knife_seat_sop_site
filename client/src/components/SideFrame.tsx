/**
 * 安全工房：左側固定導覽框架（Frame）
 * 標誌 + 文件編號 + 全站導覽（步驟 01–08 + 各區塊），固定不隨右框架捲動
 * 手機版收合為頂部漢堡選單
 */
import { useState } from "react";
import {
  AlertTriangle,
  ShieldCheck,
  Wrench,
  PlayCircle,
  GitBranch,
  Images,
  Menu,
  X,
} from "lucide-react";
import {
  STEPS,
  KEYPOINT_LABEL,
  DOC_META,
  LOGO_URL,
  type KeyPointType,
} from "@/data/steps";

const typeColor: Record<KeyPointType, string> = {
  safety: "var(--safety)",
  quality: "var(--quality)",
  skill: "var(--skill)",
};
const typeIcon: Record<KeyPointType, typeof AlertTriangle> = {
  safety: AlertTriangle,
  quality: ShieldCheck,
  skill: Wrench,
};

const sections = [
  { id: "sec-safety", label: "安全紅線", Icon: AlertTriangle },
  { id: "sec-video", label: "教學影片", Icon: PlayCircle },
  { id: "sec-flow", label: "作業流程圖", Icon: GitBranch },
  { id: "sec-photo", label: "現場照片", Icon: Images },
];

export function SideFrame({
  active,
  scrollTo,
}: {
  active: string;
  scrollTo: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const handle = (id: string) => {
    scrollTo(id);
    setOpen(false);
  };

  const NavBody = (
    <div className="flex h-full flex-col">
      {/* 品牌區 */}
      <div className="border-b border-sidebar-border p-5">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="標誌" className="h-11 w-11 shrink-0" />
          <div className="leading-tight">
            <div className="font-mono text-[10px] tracking-widest text-accent">
              STANDARD OPERATION
            </div>
            <div className="text-base font-black">作業指導書</div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 border-t border-sidebar-border pt-3 text-[11px]">
          <div>
            <div className="text-muted-foreground">文件編號</div>
            <div className="font-mono font-bold text-foreground">
              {DOC_META.docNo}
            </div>
          </div>
          <div>
            <div className="text-muted-foreground">版次</div>
            <div className="font-mono font-bold text-foreground">
              {DOC_META.rev}
            </div>
          </div>
        </div>
      </div>

      {/* 捲動導覽 */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <button
          onClick={() => handle("sec-top")}
          className="mb-3 w-full text-left text-sm font-bold text-foreground transition-colors hover:text-accent"
        >
          ▸ 文件首頁
        </button>

        <div className="mb-2 mt-3 px-1 font-mono text-[10px] tracking-widest text-accent">
          OPERATION STEPS
        </div>
        <ol className="relative">
          <span
            className="absolute left-[17px] top-2 bottom-2 w-px bg-sidebar-border"
            aria-hidden
          />
          {STEPS.map((s) => {
            const id = `step-${s.no}`;
            const isActive = active === id;
            const Icon = typeIcon[s.keyPointType];
            return (
              <li key={s.no} className="relative">
                {s.phase && (
                  <div className="mb-0.5 mt-2.5 pl-10 text-[10px] font-bold tracking-wider text-accent first:mt-0">
                    {s.phase}
                  </div>
                )}
                <button
                  onClick={() => handle(id)}
                  className="group flex w-full items-center gap-2.5 py-1 text-left transition-transform duration-150 active:scale-[0.98]"
                >
                  <span
                    className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border font-mono text-xs font-bold transition-colors"
                    style={{
                      borderColor: isActive ? "var(--safety)" : "var(--sidebar-border)",
                      background: isActive ? "var(--safety)" : "var(--sidebar)",
                      color: isActive
                        ? "var(--primary-foreground)"
                        : "var(--muted-foreground)",
                    }}
                  >
                    {String(s.no).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block truncate text-[13px] transition-colors ${
                        isActive
                          ? "font-bold text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {s.title}
                    </span>
                  </span>
                  <Icon
                    className="h-3.5 w-3.5 shrink-0"
                    style={{ color: typeColor[s.keyPointType] }}
                  />
                </button>
              </li>
            );
          })}
        </ol>

        <div className="mb-2 mt-5 px-1 font-mono text-[10px] tracking-widest text-accent">
          SECTIONS
        </div>
        <ul className="flex flex-col gap-0.5">
          {sections.map(({ id, label, Icon }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <button
                  onClick={() => handle(id)}
                  className={`flex w-full items-center gap-2.5 rounded-sm px-2 py-2 text-left text-[13px] transition-colors ${
                    isActive
                      ? "bg-sidebar-accent font-bold text-foreground"
                      : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0 text-accent" />
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="hazard-stripe-thin h-2.5" aria-hidden />
    </div>
  );

  return (
    <>
      {/* 桌機：固定左框架 */}
      <aside className="hidden lg:flex lg:fixed lg:inset-y-0 lg:left-0 lg:w-[300px] lg:flex-col lg:border-r lg:border-sidebar-border lg:bg-sidebar lg:z-30">
        {NavBody}
      </aside>

      {/* 手機：頂部列 + 漢堡 */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-sidebar-border bg-sidebar px-4 py-3 lg:hidden">
        <div className="flex items-center gap-2.5">
          <img src={LOGO_URL} alt="標誌" className="h-8 w-8" />
          <div className="leading-tight">
            <div className="text-sm font-black">作業指導書</div>
            <div className="font-mono text-[10px] text-muted-foreground">
              {DOC_META.docNo}
            </div>
          </div>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-sidebar-border"
          aria-label="開啟選單"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* 手機：抽屜 */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[84%] max-w-[320px] bg-sidebar shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-sm border border-sidebar-border"
              aria-label="關閉選單"
            >
              <X className="h-5 w-5" />
            </button>
            {NavBody}
          </div>
        </div>
      )}
    </>
  );
}

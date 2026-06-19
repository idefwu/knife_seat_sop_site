/** 安全工房：流程圖展示區 */
import { Maximize2 } from "lucide-react";
import { FLOWCHART_URL } from "@/data/steps";
import { SectionTitle } from "./SectionTitle";

export function FlowchartSection({
  onOpen,
}: {
  onOpen: (url: string, caption: string) => void;
}) {
  return (
    <section className="py-12">
      <SectionTitle
        no="F"
        en="PROCESS FLOW"
        zh="作業流程圖"
        desc="退出 → 切換 → 連線 三階段流程"
      />
      <button
        onClick={() => onOpen(FLOWCHART_URL, "刀座切換作業流程圖")}
        className="group relative block w-full overflow-hidden border border-border bg-white p-4 sm:p-6"
      >
        <img
          src={FLOWCHART_URL}
          alt="刀座切換作業流程圖"
          className="mx-auto max-h-[70vh] w-auto object-contain"
        />
        <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-sm bg-black/70 px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
          <Maximize2 className="h-3.5 w-3.5" /> 放大流程圖
        </span>
      </button>
    </section>
  );
}

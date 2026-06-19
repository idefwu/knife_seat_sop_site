/** 安全工房：頁尾（文件版次、更改記錄） */
import { DOC_META } from "@/data/steps";
import { HazardStripe } from "./HazardStripe";

export function SiteFooter() {
  return (
    <footer className="mt-8">
      <HazardStripe height={12} />
      <div className="bg-sidebar">
        <div className="container py-10">
          <div className="mb-6">
            <div className="font-mono text-[11px] tracking-widest text-accent">
              REVISION RECORD
            </div>
            <h3 className="text-lg font-black">更改記錄</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="px-3 py-2 font-medium">版次</th>
                  <th className="px-3 py-2 font-medium">日期</th>
                  <th className="px-3 py-2 font-medium">更改內容</th>
                  <th className="px-3 py-2 font-medium">制定</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-3 py-2 font-mono font-bold">A</td>
                  <td className="px-3 py-2 font-mono">{DOC_META.effectiveDate}</td>
                  <td className="px-3 py-2">初版發行・多模態互動化指導書</td>
                  <td className="px-3 py-2">製程工程</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex flex-col justify-between gap-3 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row">
            <span>
              {DOC_META.docNo}・{DOC_META.title}・REV {DOC_META.rev}
            </span>
            <span>本指導書由多模態 SOP 互轉流程自動生成・僅供作業教育訓練使用</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * 安全工房：文件抬頭列
 * 仿真實作業指導書表頭 — 文件編號、版次、機型、工位等
 */
import { DOC_META, LOGO_URL } from "@/data/steps";

const fields = [
  { label: "文件編號", value: DOC_META.docNo, mono: true },
  { label: "版　　次", value: DOC_META.rev, mono: true },
  { label: "適用機型", value: DOC_META.machine },
  { label: "作業工位", value: DOC_META.station },
  { label: "生效日期", value: DOC_META.effectiveDate, mono: true },
  { label: "頁　　次", value: DOC_META.page, mono: true },
];

export function DocHeader() {
  return (
    <section className="border border-border bg-card">
      {/* 抬頭頂列 */}
      <div className="flex items-stretch border-b border-border">
        <div className="flex items-center gap-3 border-r border-border px-4 py-3 sm:px-6">
          <img src={LOGO_URL} alt="標誌" className="h-11 w-11 shrink-0" />
          <div className="leading-tight">
            <div className="font-mono text-[11px] tracking-widest text-accent">
              STANDARD OPERATION
            </div>
            <div className="text-base font-black sm:text-lg">作業指導書</div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center px-4 text-center">
          <h1 className="text-lg font-black tracking-wide sm:text-2xl">
            {DOC_META.title}
          </h1>
        </div>
      </div>

      {/* 欄位表格 */}
      <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {fields.map((f, i) => (
          <div
            key={f.label}
            className={`flex flex-col gap-0.5 px-4 py-2.5 ${
              i % 2 === 0 ? "border-r border-border" : ""
            } ${i < fields.length - (fields.length % 6 || 6) ? "" : ""} border-b border-border sm:border-b-0 sm:border-r`}
          >
            <dt className="text-[11px] font-medium tracking-wider text-muted-foreground">
              {f.label}
            </dt>
            <dd
              className={`text-sm font-bold ${f.mono ? "font-mono tracking-wide" : ""}`}
            >
              {f.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

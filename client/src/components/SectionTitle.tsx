/** 安全工房：區塊標題 */
export function SectionTitle({
  no,
  en,
  zh,
  desc,
}: {
  no: string;
  en: string;
  zh: string;
  desc?: string;
}) {
  return (
    <div className="mb-6 flex items-end gap-4 border-b border-border pb-3">
      <span className="font-mono text-3xl font-bold leading-none text-stroke text-muted-foreground sm:text-4xl">
        {no}
      </span>
      <div>
        <div className="font-mono text-[11px] tracking-widest text-accent">
          {en}
        </div>
        <h2 className="text-xl font-black sm:text-2xl">{zh}</h2>
      </div>
      {desc && (
        <p className="ml-auto hidden max-w-xs text-right text-sm text-muted-foreground md:block">
          {desc}
        </p>
      )}
    </div>
  );
}

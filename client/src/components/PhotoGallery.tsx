/** 安全工房：六張現場照片圖庫（圖A~圖F） */
import { PHOTO_URLS } from "@/data/steps";
import { SectionTitle } from "./SectionTitle";

const photoLabels: Record<string, string> = {
  圖A: "控制面板",
  圖B: "渡橋舉起",
  圖C: "刀座台車",
  圖D: "電源接頭",
  圖E: "軌道切換",
  圖F: "離合器結合",
};

export function PhotoGallery({
  onOpen,
}: {
  onOpen: (url: string, caption: string) => void;
}) {
  return (
    <section className="py-12">
      <SectionTitle
        no="P"
        en="SITE PHOTOS"
        zh="現場實作照片"
        desc="圖 A–F・各步驟對照現場實況"
      />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {Object.entries(PHOTO_URLS).map(([label, url]) => (
          <button
            key={label}
            onClick={() => onOpen(url, `${label}・${photoLabels[label]}`)}
            className="group relative aspect-[4/3] overflow-hidden border border-border bg-black/30"
          >
            <img
              src={url}
              alt={`${label} ${photoLabels[label]}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/85 to-transparent px-3 pb-2 pt-6 text-left">
              <span className="font-mono text-sm font-bold text-accent">
                {label}
              </span>
              <span className="text-xs font-medium text-white">
                {photoLabels[label]}
              </span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

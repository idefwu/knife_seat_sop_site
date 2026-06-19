/** 安全工房：頂部 Hero（機台主視覺 + 文件標題） */
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { DOC_META, HERO_URL, LOGO_URL } from "@/data/steps";
import { HazardStripe } from "./HazardStripe";

export function Hero() {
  const scrollDown = () => {
    document
      .getElementById("doc-body")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="relative">
      <div className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
        <img
          src={HERO_URL}
          alt="二米雙刀座分條機"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />

        <div className="container relative flex h-full flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-5 flex items-center gap-3">
              <img src={LOGO_URL} alt="標誌" className="h-12 w-12" />
              <div className="font-mono text-sm tracking-widest text-accent">
                {DOC_META.docNo} ・ REV {DOC_META.rev}
              </div>
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              {DOC_META.title}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {DOC_META.machine}・{DOC_META.station}。整合作業圖卡、現場照片、流程圖與動態教學影片的互動式標準作業指導書，色彩即語意，安全第一。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={scrollDown}
                className="flex items-center gap-2 bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform duration-150 active:scale-[0.97]"
              >
                開始閱讀作業步驟
                <ChevronDown className="h-4 w-4" />
              </button>
              <a
                href="#video"
                className="border border-border bg-card/60 px-5 py-2.5 text-sm font-bold backdrop-blur-sm transition-colors hover:bg-card"
              >
                觀看教學影片
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <HazardStripe height={14} />
    </header>
  );
}

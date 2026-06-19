/** 安全工房：黃黑斜紋警示帶 + 三條安全紅線 */
import { AlertTriangle } from "lucide-react";
import { SAFETY_LINES } from "@/data/steps";
import { HazardStripe } from "./HazardStripe";

export function SafetyBanner() {
  return (
    <section className="py-12">
      <div className="overflow-hidden border-2 border-accent">
        <HazardStripe height={16} />
        <div className="bg-card p-6 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-primary text-primary-foreground">
              <AlertTriangle className="h-6 w-6" />
            </span>
            <div>
              <div className="font-mono text-[11px] tracking-widest text-accent">
                SAFETY FIRST
              </div>
              <h2 className="text-xl font-black sm:text-2xl">三條作業安全紅線</h2>
            </div>
          </div>
          <ul className="grid gap-3 md:grid-cols-3">
            {SAFETY_LINES.map((line, i) => (
              <li
                key={i}
                className="flex items-start gap-3 border-l-4 border-primary bg-primary/10 p-4"
              >
                <span className="font-mono text-2xl font-bold leading-none text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-bold leading-relaxed">{line}</p>
              </li>
            ))}
          </ul>
        </div>
        <HazardStripe height={16} />
      </div>
    </section>
  );
}

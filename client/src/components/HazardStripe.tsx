/** 安全工房：黃黑斜紋警示帶 */
export function HazardStripe({
  className = "",
  height = 14,
  thin = false,
}: {
  className?: string;
  height?: number;
  thin?: boolean;
}) {
  return (
    <div
      className={`${thin ? "hazard-stripe-thin" : "hazard-stripe"} w-full ${className}`}
      style={{ height }}
      aria-hidden
    />
  );
}

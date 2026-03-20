import type { TrustLevel } from "./TrustBadge";

const config: Record<string, { bg: string; border: string; text: string; borderStyle?: string }> = {
  decisive:  { bg: "bg-trust-decisive/7",  border: "border-trust-decisive/22", text: "text-trust-decisive" },
  informed:  { bg: "bg-trust-informed/7",  border: "border-trust-informed/22", text: "text-trust-informed", borderStyle: "border-dashed" },
  derived:   { bg: "bg-trust-derived/7",   border: "border-trust-derived/22",  text: "text-trust-derived" },
  obsol:     { bg: "bg-trust-obsol/7",     border: "border-trust-obsol/22",    text: "text-trust-obsol" },
  trueyield: { bg: "bg-vt-orange/8",       border: "border-vt-orange/30",      text: "text-vt-orange" },
};

export default function TrustPill({ level, label }: { level: TrustLevel; label: string }) {
  const c = config[level] ?? config.decisive;
  return (
    <span
      className={`font-mono text-[9px] tracking-[0.5px] px-2.5 py-[3px] rounded-[3px] whitespace-nowrap border ${c.borderStyle ?? ""} ${c.bg} ${c.border} ${c.text}`}
    >
      {label}
    </span>
  );
}

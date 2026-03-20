import type { TrustLevel } from "./TrustBadge";

const cardConfig: Record<string, { bg: string; border: string; tag: string; icon: string; borderStyle?: string }> = {
  decisive:  { bg: "bg-trust-decisive/7",  border: "border-trust-decisive/22", tag: "text-trust-decisive", icon: "bg-trust-decisive" },
  informed:  { bg: "bg-trust-informed/7",  border: "border-trust-informed/22", tag: "text-trust-informed", icon: "bg-trust-informed", borderStyle: "border-dashed" },
  derived:   { bg: "bg-trust-derived/7",   border: "border-trust-derived/22",  tag: "text-trust-derived",  icon: "bg-trust-derived" },
  obsol:     { bg: "bg-trust-obsol/7",     border: "border-trust-obsol/22",    tag: "text-trust-obsol",    icon: "bg-trust-obsol" },
  trueyield: { bg: "bg-vt-orange/8",       border: "border-vt-orange/30",      tag: "text-vt-orange",      icon: "bg-vt-maroon border border-vt-orange" },
};

interface TrustCardProps {
  level: TrustLevel;
  tagLabel: string;
  name: string;
  definition: string;
}

export default function TrustCard({ level, tagLabel, name, definition }: TrustCardProps) {
  const c = cardConfig[level] ?? cardConfig.decisive;
  return (
    <div
      className={`rounded-lg p-5 relative overflow-hidden transition-transform duration-150 hover:-translate-y-[3px] border ${c.borderStyle ?? ""} ${c.bg} ${c.border}`}
    >
      <div className={`w-7 h-7 rounded-full mb-3 ${c.icon}`} />
      <div className={`font-mono text-[9px] tracking-[1px] uppercase mb-2 font-semibold ${c.tag}`}>
        {tagLabel}
      </div>
      <div className="font-headline font-bold text-[15px] text-text-bright mb-2 leading-tight">
        {name}
      </div>
      <div className="text-xs text-text-dim leading-[1.5]">
        {definition}
      </div>
    </div>
  );
}

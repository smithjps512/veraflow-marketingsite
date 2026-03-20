type TrustLevel = "decisive" | "informed" | "derived" | "obsol" | "trueyield" | "conditional";

const config: Record<TrustLevel, { bg: string; border: string; text: string; borderStyle?: string }> = {
  decisive:    { bg: "bg-trust-decisive/7",  border: "border-trust-decisive/22", text: "text-trust-decisive" },
  informed:    { bg: "bg-trust-informed/7",  border: "border-trust-informed/22", text: "text-trust-informed", borderStyle: "border-dashed" },
  derived:     { bg: "bg-trust-derived/7",   border: "border-trust-derived/22",  text: "text-trust-derived" },
  obsol:       { bg: "bg-trust-obsol/7",     border: "border-trust-obsol/22",    text: "text-trust-obsol" },
  trueyield:   { bg: "bg-vt-orange/8",       border: "border-vt-orange/30",      text: "text-vt-orange" },
  conditional: { bg: "bg-trust-derived/7",   border: "border-trust-derived/22",  text: "text-trust-derived" },
};

const labels: Record<TrustLevel, string> = {
  decisive: "Decisive",
  informed: "Informed",
  derived: "Derived",
  obsol: "Program Risk",
  trueyield: "True Yield",
  conditional: "Conditional",
};

export default function TrustBadge({ level }: { level: TrustLevel }) {
  const c = config[level];
  return (
    <span
      className={`font-mono text-[8px] px-1.5 py-0.5 rounded-[3px] inline-block ${c.bg} border ${c.borderStyle ?? ""} ${c.border} ${c.text}`}
    >
      {labels[level]}
    </span>
  );
}

export type { TrustLevel };

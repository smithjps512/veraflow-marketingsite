import TrustBadge from "@/components/trust/TrustBadge";
import type { TrustLevel } from "@/components/trust/TrustBadge";

interface Stage {
  code: string;
  icon: string;
  name: string;
  level: TrustLevel;
  description: string;
}

const row1: Stage[] = [
  {
    code: "S-00",
    icon: "\u{1F4CB}",
    name: "Supplier Delivery Estimate",
    level: "informed",
    description:
      "Planning data only. Feeds supplier scorecard when actual arrives.",
  },
  {
    code: "S-OB",
    icon: "\u26A0",
    name: "Obsolescence Event",
    level: "obsol",
    description:
      "Fires anytime in lifecycle. Alert-only until contract path fails.",
  },
  {
    code: "S-01",
    icon: "\u{1F4E6}",
    name: "Material to Supplier",
    level: "decisive",
    description:
      "Moog-controlled outbound. Ship date decisive on dispatch.",
  },
  {
    code: "S-02",
    icon: "\u{1F529}",
    name: "Material Received",
    level: "decisive",
    description:
      "Dock scan + physical count. Delta vs. estimate auto-scores supplier.",
  },
  {
    code: "S-03",
    icon: "\u{1F52C}",
    name: "Incoming Inspection",
    level: "decisive",
    description:
      "Pass/fail logged. Gates kitting quantity. NCRs issued.",
  },
];

const row2: Stage[] = [
  {
    code: "S-04",
    icon: "\u{1F9F0}",
    name: "Kit Tracking",
    level: "decisive",
    description:
      "Partial kit is trusted data. Missing components drive procurement.",
  },
  {
    code: "S-05",
    icon: "\u2699\uFE0F",
    name: "Manufacturing Stations",
    level: "decisive",
    description:
      '\u201C4 of 7 stations.\u201D Per-station yield. Real-time OTD impact.',
  },
  {
    code: "S-06 / S-07",
    icon: "\u2705",
    name: "Complete + Final Insp.",
    level: "conditional",
    description:
      "Final inspection required per part/contract. CoA/CoC gates shipment.",
  },
  {
    code: "S-08",
    icon: "\u{1F69A}",
    name: "Shipped to Customer",
    level: "decisive",
    description:
      "Carrier-confirmed delivery \u2014 not customer acceptance.",
  },
  {
    code: "S-09",
    icon: "\u21A9\uFE0F",
    name: "Customer Returns",
    level: "trueyield",
    description:
      "Attribution-coded returns close the loop on real field quality.",
  },
];

function borderClass(level: TrustLevel): string {
  if (level === "informed") return "border-dashed border-trust-informed/22";
  if (level === "obsol") return "border-trust-obsol/22";
  return "border-border";
}

function StageCard({ stage }: { stage: Stage }) {
  return (
    <div
      className={`bg-surface-2 border ${borderClass(stage.level)} rounded-lg p-4 relative z-[1] hover:border-border-emphasis transition-colors`}
    >
      <p className="font-mono text-[9px] text-text-dim mb-2">{stage.code}</p>
      <p className="text-lg mb-2">{stage.icon}</p>
      <h3 className="font-headline font-semibold text-[13px] text-text-bright leading-tight mb-1.5">
        {stage.name}
      </h3>
      <TrustBadge level={stage.level} />
      <p className="text-[11px] text-text-dim leading-[1.45] mt-1.5">
        {stage.description}
      </p>
    </div>
  );
}

export default function Pipeline() {
  return (
    <section
      id="pipeline"
      className="py-[100px] bg-surface border-t border-b border-border"
    >
      {/* ── Header ── */}
      <div className="reveal text-center">
        <p className="font-mono text-[10px] tracking-[2px] uppercase text-text-dim mb-3">
          The Veraflow Pipeline
        </p>
        <h2 className="font-headline font-bold text-[clamp(32px,4vw,52px)] leading-[1.05] text-text-bright tracking-[-0.5px]">
          From supplier estimate to customer delivery.
        </h2>
        <p className="text-[15px] text-text-dim text-center mt-2.5">
          Nine stages. Every handoff tracked. Trust classification visible at
          every step.
        </p>
      </div>

      {/* ── Row 1 with connecting line ── */}
      <div className="reveal relative mt-12">
        {/* Connecting gradient line */}
        <div className="absolute top-7 left-10 right-10 h-px bg-gradient-to-r from-trust-decisive/22 to-vt-orange/30 z-0" />

        <div className="grid grid-cols-3 lg:grid-cols-5 gap-0.5">
          {row1.map((stage) => (
            <StageCard key={stage.code} stage={stage} />
          ))}
        </div>
      </div>

      {/* ── Row 2 ── */}
      <div className="reveal grid grid-cols-3 lg:grid-cols-5 gap-0.5 mt-0.5">
        {row2.map((stage) => (
          <StageCard key={stage.code} stage={stage} />
        ))}
      </div>
    </section>
  );
}

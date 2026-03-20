import Button from "@/components/ui/Button";
import TrustPill from "@/components/trust/TrustPill";

/* ------------------------------------------------------------------ */
/*  Dashboard mock data                                                */
/* ------------------------------------------------------------------ */

const kpis = [
  { label: "OTD Rate", value: "94.2%", color: "text-rag-green" },
  { label: "True Yield", value: "89.6%", color: "text-vt-orange" },
  { label: "Active POs", value: "127", color: "text-trust-derived" },
] as const;

const customers = [
  { name: "Northrop Grumman", meta: "14 active POs", rag: "bg-rag-green", ragGlow: "shadow-[0_0_6px_rgba(34,212,122,0.6)]", status: "On Track", statusColor: "text-rag-green" },
  { name: "L3Harris", meta: "9 active POs", rag: "bg-rag-amber", ragGlow: "shadow-[0_0_6px_rgba(240,160,48,0.6)]", status: "At Risk", statusColor: "text-rag-amber" },
  { name: "Curtiss-Wright", meta: "6 active POs", rag: "bg-rag-red", ragGlow: "shadow-[0_0_6px_rgba(232,64,64,0.6)]", status: "Blocked", statusColor: "text-rag-red" },
  { name: "Raytheon", meta: "11 active POs", rag: "bg-rag-green", ragGlow: "shadow-[0_0_6px_rgba(34,212,122,0.6)]", status: "On Track", statusColor: "text-rag-green" },
] as const;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Hero() {
  return (
    <section id="hero" className="pt-[160px] pb-[100px] overflow-hidden bg-surface-bg">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
          {/* ---- Left column: copy ---- */}
          <div>
            {/* Eyebrow */}
            <div className="fade-up inline-flex items-center bg-vt-orange/[0.08] border border-vt-orange/30 rounded px-3 py-1.5 font-mono text-[10px] uppercase tracking-[1px] text-vt-orange mb-6">
              &#x25C8; Supply Chain Intelligence Platform
            </div>

            {/* Title */}
            <h1 className="fade-up delay-1 font-headline font-extrabold text-[clamp(44px,5vw,72px)] leading-[0.95] tracking-[-1px] text-text-bright mb-6">
              Supply chain data
              <br />
              you can <em className="not-italic text-vt-orange">trust.</em>
            </h1>

            {/* Body */}
            <p className="fade-up delay-2 text-[18px] text-text-dim leading-[1.65] max-w-[480px] mb-8">
              Veraflow is the first supply chain platform built around a single
              organizing principle: every field is classified as decisive,
              informed, or derived — and the difference is always visible. No
              more guessing which numbers you can act on.
            </p>

            {/* Actions */}
            <div className="fade-up delay-3 flex flex-wrap gap-4 mb-10">
              <Button variant="primary" href="#demo">
                Request a Demo &rarr;
              </Button>
              <Button variant="ghost" href="#trust">
                See the Data Model
              </Button>
            </div>

            {/* Trust strip */}
            <div className="fade-up delay-4 flex flex-wrap gap-2">
              <TrustPill level="decisive" label="DECISIVE \u00B7 verified events" />
              <TrustPill level="informed" label="INFORMED \u00B7 supplier estimates" />
              <TrustPill level="derived" label="DERIVED \u00B7 calculated" />
              <TrustPill level="obsol" label="OBSOL \u00B7 program risk" />
              <TrustPill level="trueyield" label="TRUE YIELD \u00B7 field reality" />
            </div>
          </div>

          {/* ---- Right column: dashboard preview ---- */}
          <div className="fade-up delay-2 hidden md:block bg-surface border border-border-emphasis rounded-[10px] shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center gap-2 bg-surface-2 border-b border-border px-4 py-3">
              <span className="w-[10px] h-[10px] rounded-full bg-rag-green" />
              <span className="w-[10px] h-[10px] rounded-full bg-rag-amber" />
              <span className="w-[10px] h-[10px] rounded-full bg-rag-red" />
              <span className="ml-2 font-mono text-[10px] text-text-dim tracking-wide">
                Health Overview — All Customers
              </span>
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-3 gap-3 p-4">
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="bg-surface-3 border border-border rounded-md px-4 py-3"
                >
                  <span className="block font-mono text-[10px] uppercase tracking-wide text-text-dim mb-1">
                    {kpi.label}
                  </span>
                  <span className={`block font-headline font-bold text-[22px] ${kpi.color}`}>
                    {kpi.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Customer rows */}
            <div className="flex flex-col gap-2 px-4 pb-4">
              {customers.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-3 bg-surface-3 border border-border rounded-md px-4 py-2.5"
                >
                  {/* RAG dot */}
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${c.rag} ${c.ragGlow}`}
                  />
                  {/* Customer info */}
                  <div className="flex-1 min-w-0">
                    <span className="block text-[13px] text-text-bright font-medium truncate">
                      {c.name}
                    </span>
                    <span className="block font-mono text-[10px] text-text-dim">
                      {c.meta}
                    </span>
                  </div>
                  {/* Status badge */}
                  <span className={`font-mono text-[10px] uppercase tracking-wide ${c.statusColor}`}>
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

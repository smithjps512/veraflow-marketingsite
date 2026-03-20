import TrustCard from "@/components/trust/TrustCard";

export default function Trust() {
  return (
    <section id="trust" className="py-[100px]">
      {/* ── Intro grid ── */}
      <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-[80px] items-start">
        {/* Left column */}
        <div>
          <p className="font-mono text-[10px] tracking-[2px] uppercase text-text-dim mb-3">
            The Veraflow Data Model
          </p>
          <h2 className="font-headline font-bold text-[clamp(32px,4vw,52px)] leading-[1.05] text-text-bright tracking-[-0.5px]">
            Five types of data. Only one you can act on.
          </h2>
        </div>

        {/* Right column */}
        <div>
          <p className="text-[17px] text-text-dim max-w-[580px] leading-[1.6] mt-3">
            Every supply chain platform mixes verified events with supplier
            estimates and manual guesses into the same data layer. When a
            delivery slips, nobody knows which number caused it. Veraflow
            classifies every field so you always know what you&rsquo;re looking
            at.
          </p>

          <div className="bg-surface border border-border border-l-[3px] border-l-vt-orange rounded-md p-5 mt-6 text-sm text-text-dim leading-[1.7]">
            <strong className="text-vt-orange font-mono text-xs uppercase">
              The rule
            </strong>
            <br />
            Scheduling, shipping, and quality decisions are only made from{" "}
            <strong className="text-vt-orange font-mono text-xs uppercase">
              Decisive
            </strong>{" "}
            data.{" "}
            <strong className="text-vt-orange font-mono text-xs uppercase">
              Informed
            </strong>{" "}
            data is always labeled as an estimate.{" "}
            <strong className="text-vt-orange font-mono text-xs uppercase">
              Derived
            </strong>{" "}
            data shows its sources. The difference is never hidden.
          </div>
        </div>
      </div>

      {/* ── Trust cards ── */}
      <div className="reveal grid grid-cols-3 lg:grid-cols-5 gap-2 mt-16">
        <TrustCard
          level="decisive"
          tagLabel="Decisive"
          name="Physically Verified Events"
          definition="Timestamped, system-recorded. Dock scans, confirmed counts, signed completions. The only data that drives decisions."
        />
        <TrustCard
          level="informed"
          tagLabel="Informed"
          name="Supplier Estimates"
          definition="Supplier-provided dates and quantities. Useful for planning. Always labeled. Never treated as fact."
        />
        <TrustCard
          level="derived"
          tagLabel="Derived"
          name="Calculated Values"
          definition="Computed from decisive inputs. Yield percentages, kit completion, projected shortfalls. Always recalculated from source."
        />
        <TrustCard
          level="obsol"
          tagLabel="Obsol"
          name="Program Risk Flags"
          definition="Obsolescence and change events. Contract-governed. Alerts when unresolved. Hard blocks when no approved path exists."
        />
        <TrustCard
          level="trueyield"
          tagLabel="True Yield"
          name="Field Reality"
          definition="Net quality after customer returns with attribution. The number that tells you what actually worked — not what QC approved."
        />
      </div>
    </section>
  );
}

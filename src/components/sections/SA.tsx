const capabilities = [
  {
    num: "01",
    title: "Natural Language PO & Yield Queries",
    query:
      '"Show me all POs with true yield below 90% in the last 6 months"',
    body: "Ask across any combination of customer, PO, part number, time period, or yield stage. Results cite the decisive fields behind every answer.",
  },
  {
    num: "02",
    title: "Delivery Risk Narrative",
    query: '"Why is PO-4821 at risk of missing delivery?"',
    body: "SA reads the full pipeline state — station progress, scrap events, kit status, obsolescence flags — and generates a plain-English risk summary with the data that supports it.",
  },
  {
    num: "03",
    title: "Supplier Scorecard Insights",
    query:
      '"How has Supplier X\u2019s performance trended this year?"',
    body: "SA synthesizes scorecard events, yield trends, and return attribution into a narrative — so you can have an evidence-based conversation with your supplier.",
  },
];

function ChatMockup() {
  return (
    <div className="bg-surface border border-border-emphasis rounded-[10px] overflow-hidden">
      {/* Chat bar */}
      <div className="bg-surface-2 border-b border-border p-2.5 px-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-vt-orange shadow-[0_0_6px_var(--color-vt-orange)]" />
        <span className="font-mono text-[10px] text-vt-orange tracking-[1px] uppercase">
          Veraflow SA
        </span>
        <span className="ml-auto font-mono text-[9px] text-text-dim">
          Connected to Veratrace &middot; Queries decisive data only
        </span>
      </div>

      {/* Chat body */}
      <div className="p-4 flex flex-col gap-3">
        {/* User msg 1 */}
        <div className="max-w-[85%] text-[13px] leading-[1.5] p-2.5 px-3.5 rounded-lg bg-vt-orange/8 border border-vt-orange/30 text-text-bright self-end font-mono text-xs">
          Why is PO-4821 at risk of missing delivery?
        </div>

        {/* AI msg 1 */}
        <div className="max-w-[85%] text-[13px] leading-[1.5] p-2.5 px-3.5 rounded-lg bg-surface-2 border border-border text-text-dim self-start">
          <span className="text-vt-orange font-mono text-[11px] font-bold">
            Risk level: AMBER.
          </span>{" "}
          <span className="text-[11px]">
            PO-4821 (C62840-004, Curtiss-Wright) has two converging issues:
          </span>

          <span className="block mt-1.5 p-1.5 bg-surface-3 rounded border-l-2 border-vt-orange text-[11px] text-text-dim">
            ① Station 5 of 7 is active. Current station yield:{" "}
            <span className="text-trust-decisive font-mono">94.1%</span>{" "}
            (decisive green). At this rate, projected shortfall of{" "}
            <span className="text-trust-informed font-mono">3 units</span>{" "}
            (informed amber) against PO qty of 50. Station end timestamp will
            miss buffer by ~1.8 days.
          </span>

          <span className="block mt-1.5 p-1.5 bg-surface-3 rounded border-l-2 border-vt-orange text-[11px] text-text-dim">
            ② Supplier estimate (S-00) for the next batch showed est_arrival{" "}
            <span className="text-trust-informed font-mono">Mar 22</span>{" "}
            (informed amber), but historical date accuracy for this supplier is{" "}
            <span className="text-trust-informed font-mono">62%</span>{" "}
            (informed amber) — treat this estimate with low confidence.
          </span>

          <span className="block mt-1.5 text-[11px]">
            Recommend escalating Station 5 to floor supervisor today. If
            shortfall confirms at Station 6, initiate priority re-order.
          </span>
        </div>

        {/* User msg 2 */}
        <div className="max-w-[85%] text-[13px] leading-[1.5] p-2.5 px-3.5 rounded-lg bg-vt-orange/8 border border-vt-orange/30 text-text-bright self-end font-mono text-xs">
          What&rsquo;s the true yield on this PO so far?
        </div>

        {/* AI msg 2 */}
        <div className="max-w-[85%] text-[13px] leading-[1.5] p-2.5 px-3.5 rounded-lg bg-surface-2 border border-border text-text-dim self-start">
          <span className="text-[11px]">
            <span className="text-trust-decisive font-mono font-bold">
              True yield to date: 89.6%
            </span>{" "}
            (decisive green) (27 units shipped, 3 returns). Attribution: 2
            returns MATERIAL_DEFECT → Acme Precision Parts. 1 return
            MANUFACTURING_ERROR → internal. Zero CUSTOMER_ERROR returns on this
            PO. Supplier composite score updated to{" "}
            <span className="text-trust-decisive font-mono">74</span> (decisive
            green).
          </span>
        </div>
      </div>

      {/* Chat input */}
      <div className="flex gap-2 p-3 px-4 border-t border-border bg-surface-2">
        <div className="flex-1 bg-surface-3 border border-border-emphasis rounded px-3 py-[7px] font-mono text-[11px] text-text-dim">
          Ask about any PO, supplier, or yield metric&hellip;
        </div>
        <button className="bg-vt-orange text-white border-none rounded px-3.5 py-[7px] font-mono text-[10px] font-semibold tracking-[0.5px]">
          Send
        </button>
      </div>
    </div>
  );
}

export default function SA() {
  return (
    <section id="sa" className="py-[100px]">
      <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-[80px] items-start">
        {/* Left — Copy + Capabilities */}
        <div>
          <p className="font-mono text-[10px] tracking-[2px] uppercase text-text-dim mb-3">
            Veraflow SA
          </p>

          <h2 className="font-headline font-bold text-[clamp(32px,4vw,52px)] leading-[1.05] text-text-bright tracking-[-0.5px]">
            Ask your supply chain anything.
          </h2>

          <p className="text-[17px] text-text-dim max-w-[580px] leading-[1.6] mt-3">
            Veraflow SA queries verified decisive data to answer the questions
            program managers ask every day&nbsp;&mdash; in plain English, with
            specific data references.
          </p>

          {/* Capabilities */}
          <div className="flex flex-col gap-4 mt-8">
            {capabilities.map((c) => (
              <div
                key={c.num}
                className="flex gap-3.5 items-start p-4 bg-surface border border-border rounded-lg transition-colors hover:border-border-emphasis"
              >
                <span className="font-mono text-[10px] text-vt-orange bg-vt-orange/8 border border-vt-orange/30 rounded-[3px] px-[7px] py-0.5 shrink-0 mt-0.5">
                  {c.num}
                </span>
                <div>
                  <p className="font-headline font-semibold text-[15px] text-text-bright mb-1">
                    {c.title}
                  </p>
                  <span className="font-mono text-[11px] text-text-dim italic bg-surface-2 rounded-[3px] px-2 py-1 block mb-1">
                    {c.query}
                  </span>
                  <p className="text-xs text-text-dim leading-[1.5]">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Chat mockup */}
        <div>
          <ChatMockup />

          {/* Footer note */}
          <p className="mt-3 font-mono text-[9px] text-text-dim p-2 bg-surface border border-border rounded-[5px] leading-[1.7]">
            SA only references DECISIVE and DERIVED data in its answers.
            INFORMED values (supplier estimates) are labeled as estimates and
            never presented as facts. Every claim is traceable to a named field.
          </p>
        </div>
      </div>
    </section>
  );
}

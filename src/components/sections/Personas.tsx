const mfgFeatures = [
  "Health overview: all customers, RAG status at a glance",
  "Drill from customer \u2192 PO \u2192 part \u2192 station in 3 clicks",
  "Supplier scorecard with per-customer weight configuration",
  "Obsolescence alerts before they become ship blocks",
  "Real-time OTD impact when scrap happens at any station",
  "Line of Balance view built in \u2014 no separate tool needed",
  "Veraflow SA for natural language queries on any data",
];

const custFeatures = [
  "Your PO status, delivery dates, and at-risk flags",
  "Shipment tracking and carrier-confirmed delivery",
  "CoA and CoC certificate references per shipment",
  "True yield trend for your parts over time",
  "Return status and disposition for any parts sent back",
  "Zero visibility into other customers\u2019 data \u2014 ever",
];

export default function Personas() {
  return (
    <section
      id="personas"
      className="relative z-1 py-[100px] bg-surface border-t border-b border-border"
    >
      <div className="max-w-[1200px] mx-auto px-12 max-md:px-6">
        {/* ── Header ── */}
        <div className="reveal text-center">
          <p className="font-mono text-[10px] tracking-[2px] uppercase text-text-dim mb-3">
            Who It&rsquo;s For
          </p>
          <h2 className="font-headline font-bold text-[clamp(32px,4vw,52px)] leading-[1.05] text-text-bright tracking-[-0.5px]">
            Built for the manufacturer. Transparent to the customer.
          </h2>
        </div>

        {/* ── Two-column grid ── */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-0.5 mt-12">
          {/* Card 1 — Manufacturers */}
          <div className="bg-surface-2 p-10 border border-border rounded-lg md:rounded-l-lg md:rounded-r-none md:border-r-0">
            <span className="font-mono text-[9px] tracking-[1.5px] uppercase px-2.5 py-[3px] rounded-[3px] inline-block mb-4 bg-trust-decisive/7 border border-trust-decisive/22 text-trust-decisive">
              For Manufacturers
            </span>
            <h3 className="font-headline font-bold text-[28px] text-text-bright mb-2 leading-tight">
              Run your programs on data you can defend.
            </h3>
            <p className="text-sm text-text-dim mb-6 leading-[1.6]">
              Program managers, operations leads, and executives get a single
              source of truth &mdash; organized by customer, not by table. Every
              number traceable to a physical event.
            </p>
            <div className="flex flex-col gap-2.5">
              {mfgFeatures.map((f) => (
                <div
                  key={f}
                  className="flex gap-2.5 items-start text-[13px] text-text-dim leading-[1.5]"
                >
                  <span className="shrink-0 mt-0.5 text-trust-decisive">
                    &#10003;
                  </span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 — Customers */}
          <div className="bg-surface-2 p-10 border border-border rounded-lg md:rounded-r-lg md:rounded-l-none">
            <span className="font-mono text-[9px] tracking-[1.5px] uppercase px-2.5 py-[3px] rounded-[3px] inline-block mb-4 bg-vt-orange/8 border border-vt-orange/30 text-vt-orange">
              For Customers
            </span>
            <h3 className="font-headline font-bold text-[28px] text-text-bright mb-2 leading-tight">
              See your programs. Not anyone else&rsquo;s.
            </h3>
            <p className="text-sm text-text-dim mb-6 leading-[1.6]">
              Customer portal users see exactly their POs, their shipments,
              their certificates, and their true yield &mdash; and nothing about
              any other customer. Data isolation is enforced at the database
              layer, not the application layer.
            </p>
            <div className="flex flex-col gap-2.5">
              {custFeatures.map((f) => (
                <div
                  key={f}
                  className="flex gap-2.5 items-start text-[13px] text-text-dim leading-[1.5]"
                >
                  <span className="shrink-0 mt-0.5 text-vt-orange">
                    &#10003;
                  </span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

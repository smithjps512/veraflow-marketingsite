const features = [
  {
    title: "Per-customer score weights",
    body: "Different customers have different priorities. A high-volume customer may weight date accuracy at 40%. A defense prime may weight true yield at 45%. Configure once, runs automatically.",
  },
  {
    title: "Rolling historical accuracy",
    body: "Every estimate a supplier makes is scored against the decisive receipt event. Over time the score self-calibrates — so you know exactly how much to trust the next estimate before you act on it.",
  },
  {
    title: "Field returns feed back in",
    body: "Material defects returned by customers are attributed to the supplier who shipped the material. True yield is the most consequential score component because it measures downstream impact, not just on-time delivery.",
  },
];

const scoreRows = [
  { label: "Date accuracy", width: "62%", color: "bg-trust-informed", value: 62, valueColor: "text-trust-informed", weight: "25%", weightColor: "text-text-dim", labelColor: "text-text-dim" },
  { label: "Qty accuracy", width: "84%", color: "bg-trust-decisive", value: 84, valueColor: "text-trust-decisive", weight: "15%", weightColor: "text-text-dim", labelColor: "text-text-dim" },
  { label: "Incoming yield", width: "91%", color: "bg-trust-decisive", value: 91, valueColor: "text-trust-decisive", weight: "35%", weightColor: "text-text-dim", labelColor: "text-text-dim" },
  { label: "True yield (field)", width: "58%", color: "bg-vt-orange", value: 58, valueColor: "text-vt-orange", weight: "25%", weightColor: "text-vt-orange", labelColor: "text-vt-orange" },
];

function ScorecardCard() {
  return (
    <div className="bg-surface-2 border border-border-emphasis rounded-[10px] p-6">
      {/* Header */}
      <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-border">
        <div>
          <p className="font-mono text-[9px] text-text-dim uppercase tracking-[1px] mb-[3px]">
            Supplier
          </p>
          <p className="font-headline font-bold text-lg text-text-bright">
            Acme Precision Parts
          </p>
        </div>
        <div className="ml-auto text-right">
          <p className="font-headline font-extrabold text-4xl leading-none text-trust-decisive">
            74
          </p>
          <p className="font-mono text-[8px] text-text-dim uppercase">
            Composite Score
          </p>
        </div>
      </div>

      {/* Components section */}
      <div>
        <div className="font-mono text-[9px] text-text-dim uppercase tracking-[1px] mb-1 flex justify-between">
          <span>Component</span>
          <span>Score &middot; Weight</span>
        </div>

        <div className="flex flex-col gap-2.5">
          {scoreRows.map((row) => (
            <div key={row.label} className="flex items-center gap-2.5">
              <span className={`font-mono text-[10px] ${row.labelColor} w-40 shrink-0`}>
                {row.label}
              </span>
              <div className="flex-1 h-1.5 bg-surface-3 rounded-sm overflow-hidden">
                <div
                  className={`h-full rounded-sm ${row.color}`}
                  style={{ width: row.width }}
                />
              </div>
              <span className={`font-mono text-[10px] ${row.valueColor} w-9 text-right shrink-0`}>
                {row.value}
              </span>
              <span className={`font-mono text-[9px] ${row.weightColor} w-[30px] text-right shrink-0`}>
                {row.weight}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Config note */}
      <div className="mt-4 font-mono text-[9px] text-text-dim bg-surface-3 border border-border rounded p-2 leading-[1.6]">
        Weights configured for{" "}
        <span className="text-vt-orange">Northrop Grumman</span> account.
        <br />
        Rolling 90-day window &middot; 14 scored events &middot; Last updated 2h ago
      </div>
    </div>
  );
}

export default function Scorecard() {
  return (
    <section
      id="scorecard"
      className="py-[100px] bg-surface border-t border-b border-border"
    >
      <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
        {/* Left — Copy */}
        <div>
          <p className="font-mono text-[10px] tracking-[2px] uppercase text-text-dim mb-3">
            Supplier Scorecard
          </p>

          <h2 className="font-headline font-bold text-[clamp(32px,4vw,52px)] leading-[1.05] text-text-bright tracking-[-0.5px]">
            You told us 30&nbsp;days. It&rsquo;s been&nbsp;47.
          </h2>

          <p className="text-[17px] text-text-dim max-w-[580px] leading-[1.6] mt-3">
            Every supplier estimate is compared to the actual receipt. Date
            accuracy, quantity accuracy, incoming yield, and true yield combine
            into a composite score&nbsp;&mdash; calibrated per customer, not
            one-size-fits-all.
          </p>

          {/* Feature items */}
          <div className="flex flex-col gap-3.5 mt-7">
            {features.map((f) => (
              <div key={f.title} className="flex gap-3 items-start">
                <span className="text-vt-orange text-lg shrink-0 mt-0.5">
                  ◈
                </span>
                <div>
                  <p className="font-headline font-semibold text-[15px] text-text-bright mb-[3px]">
                    {f.title}
                  </p>
                  <p className="text-[13px] text-text-dim leading-[1.5]">
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Scorecard card */}
        <div>
          <ScorecardCard />
        </div>
      </div>
    </section>
  );
}

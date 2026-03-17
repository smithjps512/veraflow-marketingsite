export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Atmosphere glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-maroon/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-orange/8 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left — copy */}
        <div className="reveal">
          <p className="text-orange font-mono text-sm tracking-widest uppercase mb-4">
            Physical Truth Layer for Precision Manufacturing
          </p>
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            Every scan event<br />is a verified fact.
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
            Veraflow replaces manual data entry with hardware scan events at
            every physical handoff — from Tier&nbsp;2 supplier through customer
            delivery. Real-time accuracy, full traceability, predictive
            scheduling.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#cta"
              className="bg-maroon hover:bg-maroon/80 text-white font-semibold px-8 py-3.5 rounded text-sm transition-colors"
            >
              Request 90-Day Pilot
            </a>
            <a
              href="#platform"
              className="border border-border hover:border-border-hover text-gray-300 hover:text-white font-semibold px-8 py-3.5 rounded text-sm transition-colors"
            >
              See the Platform
            </a>
          </div>
        </div>

        {/* Right — PM Dashboard mockup */}
        <div className="reveal delay-2">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  const orders = [
    { wo: "WO-4821", part: "SR15130-1", status: "In Assembly", gate: 5, color: "bg-ok" },
    { wo: "WO-4819", part: "C62840-004", status: "QA Hold", gate: 7, color: "bg-risk" },
    { wo: "WO-4835", part: "SR15760", status: "Receiving", gate: 2, color: "bg-ok" },
    { wo: "WO-4802", part: "62030", status: "Pack / Ship", gate: 9, color: "bg-ok" },
    { wo: "WO-4840", part: "SR12920", status: "Test / Cal", gate: 6, color: "bg-exception" },
  ];

  return (
    <div className="bg-surface border border-border rounded-lg overflow-hidden shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface-raised">
        <span className="font-headline text-sm font-semibold text-white tracking-wide">
          PM DASHBOARD — ACTIVE WORK ORDERS
        </span>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-exception" />
          <span className="w-2.5 h-2.5 rounded-full bg-risk" />
          <span className="w-2.5 h-2.5 rounded-full bg-ok" />
        </div>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-4 gap-4 px-4 py-2 text-xs text-gray-500 font-mono border-b border-border">
        <span>WORK ORDER</span>
        <span>PART</span>
        <span>STATUS</span>
        <span>GATE</span>
      </div>

      {/* Rows */}
      {orders.map((o, i) => (
        <div
          key={o.wo}
          className="grid grid-cols-4 gap-4 px-4 py-3 text-sm border-b border-border last:border-0 hover:bg-surface-raised/50 transition-colors"
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          <span className="font-mono text-white">{o.wo}</span>
          <span className="font-mono text-gray-400">{o.part}</span>
          <span className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${o.color}`} />
            <span className="text-gray-300">{o.status}</span>
          </span>
          <span className="font-mono text-orange">{o.gate}/9</span>
        </div>
      ))}

      {/* Footer metrics */}
      <div className="grid grid-cols-3 gap-4 px-4 py-3 bg-surface-raised border-t border-border">
        <Metric label="On-Time Rate" value="94.2%" />
        <Metric label="Active WOs" value="127" />
        <Metric label="Avg Cycle" value="14.3d" />
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-gray-500 font-mono">{label}</p>
      <p className="text-lg font-headline font-bold text-white">{value}</p>
    </div>
  );
}

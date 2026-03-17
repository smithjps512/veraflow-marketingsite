const scanGates = [
  { gate: 0, name: "Moog Outbound → Tier 2", method: "DataMatrix + RFID at Moog shipping dock" },
  { gate: 1, name: "Supplier Pack-out", method: "Supplier mobile PWA (any smartphone)" },
  { gate: 2, name: "Receiving Dock", method: "Fixed 2D reader + RFID portal" },
  { gate: 3, name: "Stores / Kitting", method: "Barcode at kit station" },
  { gate: 4, name: "Sub-Assembly", method: "Operator scan at work cell" },
  { gate: 5, name: "Final Assembly", method: "Operator scan at work cell" },
  { gate: 6, name: "Test / Calibration", method: "Auto — test stand writes directly via API" },
  { gate: 7, name: "QA / Inspection", method: "Inspector barcode + digital sign-off" },
  { gate: 8, name: "Serialize", method: "Veratrace — print + verify DataMatrix (MIL-STD-130)" },
  { gate: 9, name: "Pack / Ship", method: "Scan at pack-out, ASN auto-sent to customer" },
];

const features = [
  {
    title: "Accuracy",
    desc: "Every data record originates from a hardware scan event, never manual entry. Zero keystroke errors.",
    icon: "◎",
  },
  {
    title: "Visibility",
    desc: "Real-time physical status of every work order from supplier dock to customer shipment.",
    icon: "◉",
  },
  {
    title: "Predictability",
    desc: "AI-powered delivery forecasting and yield modeling built on verified scan data — not ERP estimates.",
    icon: "◈",
  },
  {
    title: "Compliance",
    desc: "AS9100D, MIL-STD-130 IUID, DCSA, and CMMC traceability produced as a byproduct of operations.",
    icon: "◆",
  },
];

export default function Platform() {
  return (
    <section id="platform" className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-7xl">
        <div className="reveal text-center mb-16">
          <p className="text-orange font-mono text-sm tracking-widest uppercase mb-3">
            Platform
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white">
            10 scan gates. Zero manual entry.
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Every physical handoff is a verified scan event. From outbound
            material to customer shipment, Veraflow captures the physical truth.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — scan gate timeline */}
          <div className="lg:col-span-3 reveal">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

              <div className="space-y-1">
                {scanGates.map((g, i) => (
                  <div key={g.gate} className="relative flex items-start gap-4 py-3 group">
                    {/* Gate node */}
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border-2 border-maroon bg-base flex items-center justify-center group-hover:border-orange transition-colors">
                      <span className="font-mono text-xs text-white font-bold">
                        {g.gate}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-headline text-sm font-semibold text-white group-hover:text-orange transition-colors">
                        {g.name}
                      </p>
                      <p className="text-xs text-gray-500 font-mono mt-0.5 truncate">
                        {g.method}
                      </p>
                    </div>

                    {/* Active indicator for a couple gates */}
                    {(i === 4 || i === 7) && (
                      <span className="flex-shrink-0 text-xs font-mono text-ok bg-ok/10 border border-ok/20 rounded px-2 py-0.5">
                        ACTIVE
                      </span>
                    )}
                    {i === 6 && (
                      <span className="flex-shrink-0 text-xs font-mono text-risk bg-risk/10 border border-risk/20 rounded px-2 py-0.5">
                        IN TEST
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — feature cards */}
          <div className="lg:col-span-2 space-y-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`reveal delay-${i + 1} bg-base border border-border rounded-lg p-5 hover:border-border-hover transition-colors`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-maroon text-xl">{f.icon}</span>
                  <h3 className="font-headline text-lg font-bold text-white">
                    {f.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

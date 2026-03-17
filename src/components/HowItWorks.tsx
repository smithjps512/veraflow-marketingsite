const steps = [
  {
    num: "01",
    title: "Discovery & Mapping",
    duration: "Week 1–2",
    desc: "We map your current production flow, identify scan gate locations, and configure Veraflow to your BOM structure and work order routing. No code changes to your ERP.",
  },
  {
    num: "02",
    title: "Hardware + Integration",
    duration: "Week 3–6",
    desc: "Deploy scan hardware at each gate — fixed 2D readers, RFID portals, mobile PWA for suppliers. Connect test stand APIs. Veratrace begins capturing genealogy data.",
  },
  {
    num: "03",
    title: "Go-Live & Validation",
    duration: "Week 7–12",
    desc: "Full production operation across all 10 scan gates. PM Dashboard live. Veraflow SA trained on your data. Compliance reports validated against AS9100D and MIL-STD-130.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-7xl">
        <div className="reveal text-center mb-16">
          <p className="text-orange font-mono text-sm tracking-widest uppercase mb-3">
            How It Works
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white">
            90-day pilot. Full production.
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Veraflow deploys alongside your existing ERP and MES — no rip and
            replace. First scan gate is live within 14 days.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`reveal delay-${i + 1} relative bg-base border border-border rounded-lg p-6 hover:border-border-hover transition-colors`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-3xl font-bold text-maroon">
                  {s.num}
                </span>
                <div>
                  <h3 className="font-headline text-lg font-bold text-white">
                    {s.title}
                  </h3>
                  <span className="font-mono text-xs text-orange">
                    {s.duration}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>

              {/* Connector arrow */}
              {i < 2 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-border text-2xl z-10">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

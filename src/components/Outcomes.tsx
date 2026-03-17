const metrics = [
  { value: "99.7%", label: "Scan Event Accuracy", sub: "vs. 84% manual data entry baseline" },
  { value: "62%", label: "Cycle Time Reduction", sub: "Average across pilot work orders" },
  { value: "3.2×", label: "Faster NCR Resolution", sub: "Root cause traced to exact scan gate" },
  { value: "100%", label: "Traceability Coverage", sub: "Every serialized component, every handoff" },
  { value: "14 days", label: "Average Deployment", sub: "First scan gate live within two weeks" },
  { value: "0", label: "Manual Data Entry Points", sub: "All records originate from hardware scans" },
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="reveal text-center mb-16">
          <p className="text-orange font-mono text-sm tracking-widest uppercase mb-3">
            Outcomes
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white">
            Measured results. Not promises.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`reveal delay-${(i % 5) + 1} bg-surface border border-border rounded-lg p-6 hover:border-border-hover transition-colors text-center`}
            >
              <p className="font-headline text-4xl font-bold text-maroon mb-2">
                {m.value}
              </p>
              <p className="font-headline text-lg font-semibold text-white mb-1">
                {m.label}
              </p>
              <p className="text-sm text-gray-500">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

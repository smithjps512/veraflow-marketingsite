const industries = [
  {
    name: "Aerospace",
    desc: "Commercial and military aircraft, flight control, actuation systems.",
    tags: ["AS9100D", "NADCAP", "FAA PMA"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 2L2 8l10 6 10-6-10-6zM2 16l10 6 10-6M2 12l10 6 10-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Space",
    desc: "Satellite buses, launch vehicles, propulsion, space mechanisms.",
    tags: ["NASA-STD-8739", "ITAR", "AS9100D"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 2v6m0 8v6m-6-10H2m20 0h-4M7.05 7.05L4.93 4.93m14.14 14.14l-2.12-2.12M7.05 16.95l-2.12 2.12m14.14-14.14l-2.12 2.12" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Defense",
    desc: "Ground combat vehicles, naval systems, armament equipment.",
    tags: ["MIL-STD-130", "CMMC 2.0", "DCSA"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 2l8 4v6c0 5.25-3.5 10-8 11-4.5-1-8-5.75-8-11V6l8-4z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Automotive",
    desc: "Motorsport, EV systems, precision motion control.",
    tags: ["IATF 16949", "ISO 9001", "PPAP"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v4m0 12v4M2 12h4m12 0h4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="reveal text-center mb-16">
          <p className="text-orange font-mono text-sm tracking-widest uppercase mb-3">
            Industries Served
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white">
            Built for regulated manufacturing
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className={`reveal delay-${i + 1} group bg-surface border border-border rounded-lg p-6 hover:border-border-hover transition-all hover:-translate-y-1`}
            >
              <div className="text-maroon mb-4 group-hover:text-orange transition-colors">
                {ind.icon}
              </div>
              <h3 className="font-headline text-xl font-bold text-white mb-2">
                {ind.name}
              </h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                {ind.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {ind.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-gray-500 border border-border rounded px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

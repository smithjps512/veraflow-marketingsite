export default function Veratrace() {
  return (
    <section id="veratrace" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="reveal text-center mb-16">
          <p className="text-orange font-mono text-sm tracking-widest uppercase mb-3">
            Veratrace
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white">
            Component-level genealogy.<br />Audit-ready by default.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — benefit blocks */}
          <div className="space-y-6">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`reveal delay-${i + 1} flex gap-4`}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded bg-maroon/20 flex items-center justify-center text-maroon">
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-headline text-lg font-bold text-white mb-1">
                    {b.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — genealogy trace visual */}
          <div className="reveal delay-2">
            <GenealogyTrace />

            {/* SA Predictive Panel */}
            <div className="mt-6 bg-surface border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                <span className="font-mono text-xs text-orange">
                  VERAFLOW SA — PREDICTIVE ALERT
                </span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Component{" "}
                <span className="font-mono text-white">SR15760-SN-0447</span>{" "}
                has been at Gate 7 (QA) for{" "}
                <span className="text-risk font-semibold">3.2 days</span> — 1.8×
                the historical average. Recommend escalation to avoid downstream
                delay on{" "}
                <span className="font-mono text-white">WO-4821</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    title: "What It Is",
    desc: "Every serialized component tracked by part number, serial number, lot, revision, and BOM position. Full identity from receipt through shipment.",
    icon: <span className="text-sm font-bold">ID</span>,
  },
  {
    title: "Where It Is",
    desc: "Real-time physical location at scan gate resolution. No more walking the floor to find a part stuck between stations.",
    icon: <span className="text-sm font-bold">⌖</span>,
  },
  {
    title: "When It Moved",
    desc: "Timestamped scan events create an unbroken chain of custody. Every handoff recorded to the second.",
    icon: <span className="text-sm font-bold">⏱</span>,
  },
  {
    title: "Compliance Output",
    desc: "AS9100D, MIL-STD-130 IUID, DCSA, and CMMC traceability reports generated automatically from normal scan operations.",
    icon: <span className="text-sm font-bold">✓</span>,
  },
];

function GenealogyTrace() {
  const tree = {
    part: "SR15760",
    serial: "SN-0447",
    name: "Safe & Arm Device",
    status: "ok" as const,
    children: [
      {
        part: "SR15130-1",
        serial: "SN-1182",
        name: "Linear Solenoid, Push 7 lbf",
        status: "ok" as const,
        gate: 5,
      },
      {
        part: "C62840-004",
        serial: "SN-0839",
        name: "Linear Solenoid, Push 15 lbf",
        status: "risk" as const,
        gate: 7,
      },
      {
        part: "4440",
        serial: "SN-2201",
        name: "Rotary Solenoid, ±60°",
        status: "ok" as const,
        gate: 4,
      },
    ],
  };

  const statusColor = {
    ok: "border-ok text-ok",
    risk: "border-risk text-risk",
    exception: "border-exception text-exception",
  };

  const statusDot = {
    ok: "bg-ok",
    risk: "bg-risk",
    exception: "bg-exception",
  };

  return (
    <div className="bg-surface border border-border rounded-lg p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="font-headline text-sm font-semibold text-white tracking-wide">
          COMPONENT GENEALOGY — VERATRACE
        </span>
        <span className="font-mono text-xs text-gray-500">LIVE</span>
      </div>

      {/* Root node */}
      <div className="border border-maroon rounded-lg p-3 mb-2 bg-maroon/5">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-mono text-sm text-white">{tree.part}</span>
            <span className="text-gray-500 mx-2">·</span>
            <span className="font-mono text-xs text-gray-400">{tree.serial}</span>
          </div>
          <span className={`w-2 h-2 rounded-full ${statusDot[tree.status]}`} />
        </div>
        <p className="text-xs text-gray-500 mt-1">{tree.name}</p>
      </div>

      {/* Connector line */}
      <div className="ml-6 h-4 border-l border-border" />

      {/* Children */}
      <div className="ml-6 space-y-2">
        {tree.children.map((child, i) => (
          <div key={child.serial}>
            {i > 0 && <div className="ml-0 h-2 border-l border-border" />}
            <div
              className={`border ${statusColor[child.status].split(" ")[0]} rounded-lg p-3 bg-base`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-sm text-white">
                    {child.part}
                  </span>
                  <span className="text-gray-500 mx-2">·</span>
                  <span className="font-mono text-xs text-gray-400">
                    {child.serial}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-gray-500">
                    Gate {child.gate}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${statusDot[child.status]}`}
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">{child.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

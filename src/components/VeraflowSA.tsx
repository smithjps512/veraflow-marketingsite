export default function VeraflowSA() {
  return (
    <section id="sa" className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-7xl">
        <div className="reveal text-center mb-16">
          <p className="text-orange font-mono text-sm tracking-widest uppercase mb-3">
            Veraflow SA — Smart Analysis
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white">
            Ask your production data<br />in plain English.
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Veraflow SA queries verified Veratrace scan data to deliver program
            status, supplier intelligence, yield root cause, and predictive
            scheduling. &ldquo;SA&rdquo; = Smart Analysis for tech buyers.
            Situational Awareness for defense buyers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — capabilities */}
          <div className="space-y-5 reveal">
            {capabilities.map((c, i) => (
              <div
                key={c.title}
                className={`flex gap-4 delay-${i + 1}`}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded bg-orange/10 flex items-center justify-center text-orange text-sm font-bold font-mono">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-headline text-lg font-bold text-white mb-1">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — chat mockup */}
          <div className="reveal delay-2">
            <ChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

const capabilities = [
  {
    title: "Program Status",
    desc: "\"What work orders are at risk of missing their delivery date this week?\" — answered in seconds from verified gate data.",
  },
  {
    title: "Supplier Intelligence",
    desc: "\"Which Tier 2 suppliers have the longest lead time variance this quarter?\" — built from receiving dock scan timestamps.",
  },
  {
    title: "Yield Root Cause",
    desc: "\"What are the top 3 NCR causes for SR15130-1 in the last 90 days?\" — traced to specific scan gate and operator.",
  },
  {
    title: "Predictive Scheduling",
    desc: "\"When will WO-4821 reach Pack/Ship based on current gate velocity?\" — ML model on historical scan event cadence.",
  },
  {
    title: "Compliance Queries",
    desc: "\"Show me the full chain of custody for serial SN-0447.\" — instant genealogy from Veratrace scan records.",
  },
];

function ChatMockup() {
  const messages: { role: "user" | "sa"; text: string }[] = [
    {
      role: "user",
      text: "Which work orders are at risk of missing delivery this week?",
    },
    {
      role: "sa",
      text: `Analyzing 127 active work orders against scan gate velocity data...

3 work orders flagged at risk:`,
    },
  ];

  const flaggedOrders = [
    {
      wo: "WO-4819",
      part: "C62840-004",
      reason: "QA hold at Gate 7 — 2.1 days over SLA",
      risk: "high",
    },
    {
      wo: "WO-4840",
      part: "SR12920",
      reason: "Test/Cal exception — retest pending",
      risk: "high",
    },
    {
      wo: "WO-4852",
      part: "LG-ABD-M60",
      reason: "Supplier late — Gate 2 ETA +1.5 days",
      risk: "medium",
    },
  ];

  return (
    <div className="bg-base border border-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-surface-raised">
        <span className="w-2.5 h-2.5 rounded-full bg-ok animate-pulse" />
        <span className="font-headline text-sm font-semibold text-white tracking-wide">
          VERAFLOW SA
        </span>
        <span className="font-mono text-xs text-gray-500 ml-auto">
          CONNECTED TO VERATRACE
        </span>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-4 max-h-[480px]">
        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-maroon/20 border border-maroon/30 rounded-lg px-4 py-2.5 max-w-[85%]">
            <p className="text-sm text-white">{messages[0].text}</p>
          </div>
        </div>

        {/* SA response */}
        <div className="flex justify-start">
          <div className="bg-surface border border-border rounded-lg px-4 py-3 max-w-[90%]">
            <p className="text-sm text-gray-300 mb-3 whitespace-pre-line">
              {messages[1].text}
            </p>

            {/* Flagged orders table */}
            <div className="space-y-2">
              {flaggedOrders.map((o) => (
                <div
                  key={o.wo}
                  className="bg-base border border-border rounded p-2.5"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        o.risk === "high" ? "bg-exception" : "bg-risk"
                      }`}
                    />
                    <span className="font-mono text-xs text-white">
                      {o.wo}
                    </span>
                    <span className="font-mono text-xs text-gray-500">
                      {o.part}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">{o.reason}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-300 mt-3">
              Recommend prioritizing{" "}
              <span className="font-mono text-white">WO-4819</span> — customer
              delivery date is Friday. Escalation to QA lead suggested.
            </p>
          </div>
        </div>

        {/* Typing indicator */}
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-orange/60 animate-pulse" />
          <span className="cursor-blink font-mono text-xs">
            SA analyzing follow-up
          </span>
        </div>
      </div>

      {/* Input bar */}
      <div className="border-t border-border px-4 py-3 flex items-center gap-3">
        <input
          type="text"
          placeholder="Ask Veraflow SA..."
          className="flex-1 bg-surface border border-border rounded px-3 py-2 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-orange"
          readOnly
        />
        <button className="bg-maroon hover:bg-maroon/80 text-white text-sm px-4 py-2 rounded transition-colors">
          Send
        </button>
      </div>
    </div>
  );
}

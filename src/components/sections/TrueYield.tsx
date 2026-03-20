const features = [
  {
    icon: "\u{1F3AF}",
    title: "Attribution, not just counts",
    body: "Every return is attributed: supplier defect, manufacturing error, design nonconformance, or customer error. Customer errors are excluded from true yield. The rest are assigned to the right party.",
  },
  {
    icon: "\u{1F4CA}",
    title: "Per-customer, per-PO, per-part",
    body: "True yield rolls up to every level \u2014 a single part number, a full PO, a customer relationship, or your entire operation over any time period.",
  },
  {
    icon: "\u{1F517}",
    title: "Supplier contribution visible",
    body: "Material defects trace back to the supplier who shipped them. Over time you see exactly which suppliers are contributing to field failures \u2014 before it damages a customer relationship.",
  },
];

const stages = [
  { value: "96.4%", label: "Incoming", color: "text-trust-decisive" },
  { value: "94.1%", label: "Mfg Flow", color: "text-trust-derived" },
  { value: "98.7%", label: "Final Insp", color: "text-trust-informed" },
];

const attributionRows = [
  {
    label: "MATERIAL_DEFECT",
    labelColor: "text-trust-obsol",
    width: "60%",
    barColor: "bg-trust-obsol",
    attribution: "\u2192 Supplier",
  },
  {
    label: "MFG_ERROR",
    labelColor: "text-rag-red",
    width: "30%",
    barColor: "bg-rag-red",
    attribution: "\u2192 Internal",
  },
  {
    label: "CUSTOMER_ERROR",
    labelColor: "text-trust-decisive",
    width: "0%",
    barColor: "bg-trust-decisive",
    attribution: "Excluded \u2713",
    attributionColor: "text-trust-decisive",
  },
];

export default function TrueYield() {
  return (
    <section id="trueyield" className="py-[100px]">
      <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
        {/* ── Left: Copy + Features ── */}
        <div>
          <p className="font-mono text-[10px] tracking-[2px] uppercase text-text-dim mb-3">
            True Yield
          </p>
          <h2 className="font-headline font-bold text-[clamp(32px,4vw,52px)] leading-[1.05] text-text-bright tracking-[-0.5px]">
            The number your QC report doesn&rsquo;t show you.
          </h2>
          <p className="text-[17px] text-text-dim max-w-[580px] leading-[1.6] mt-3">
            Manufacturing yield tells you what left the floor. Final inspection
            yield tells you what cleared QC. True yield tells you what the
            customer kept&nbsp;&mdash; and used.
          </p>

          <div className="flex flex-col gap-5 mt-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-md bg-vt-orange/8 border border-vt-orange/30 flex items-center justify-center text-base shrink-0 mt-0.5">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-headline font-semibold text-base text-text-bright mb-1">
                    {f.title}
                  </h3>
                  <p className="text-[13px] text-text-dim leading-[1.55]">
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Yield Chain + Attribution ── */}
        <div>
          {/* Yield Chain Card */}
          <div className="bg-surface border border-border rounded-[10px] p-7">
            <p className="font-mono text-[10px] tracking-[1.5px] uppercase text-text-dim mb-5">
              ◈ Yield Chain — Example PO · PN-SR15130
            </p>

            {/* Stages row */}
            <div className="flex gap-1 items-stretch mb-5">
              {stages.map((s, i) => (
                <div key={s.label} className="contents">
                  {i > 0 && (
                    <div className="flex items-center text-border-emphasis text-xs px-0.5">
                      →
                    </div>
                  )}
                  <div className="flex-1 bg-surface-2 border border-border rounded-md p-3.5 text-center">
                    <p
                      className={`font-headline font-extrabold text-[28px] leading-none mb-1 ${s.color}`}
                    >
                      {s.value}
                    </p>
                    <p className="font-mono text-[8px] uppercase text-text-dim tracking-[0.5px]">
                      {s.label}
                    </p>
                  </div>
                </div>
              ))}

              {/* Arrow before True Yield */}
              <div className="flex items-center text-border-emphasis text-xs px-0.5">
                →
              </div>

              {/* True Yield — special styling */}
              <div className="flex-1 bg-vt-orange/8 border border-vt-orange/30 rounded-md p-3.5 text-center">
                <p className="font-headline font-extrabold text-[28px] leading-none mb-1 text-vt-orange">
                  89.6% ✦
                </p>
                <p className="font-mono text-[8px] uppercase text-text-dim tracking-[0.5px]">
                  True Yield
                </p>
              </div>
            </div>

            {/* Gap note */}
            <div className="bg-rag-red/7 border border-rag-red/20 rounded-md p-3 text-xs text-text-dim leading-[1.55]">
              <strong className="text-rag-red font-mono text-[11px]">
                9.1 point gap
              </strong>{" "}
              between final inspection yield and true yield. Three returns
              attributed to MATERIAL_DEFECT (supplier). Two attributed to
              MANUFACTURING_ERROR. Zero attributed to CUSTOMER_ERROR. This gap
              was invisible before Veraflow.
            </div>
          </div>

          {/* Attribution Breakdown */}
          <div className="mt-4 bg-surface border border-border rounded-lg p-4.5">
            <p className="font-mono text-[10px] text-text-dim tracking-[1px] uppercase mb-3">
              Return Attribution Breakdown
            </p>

            <div className="flex flex-col gap-2">
              {attributionRows.map((r) => (
                <div
                  key={r.label}
                  className="flex items-center gap-2.5 text-xs"
                >
                  <span
                    className={`w-[130px] font-mono text-[10px] ${r.labelColor}`}
                  >
                    {r.label}
                  </span>
                  <div className="flex-1 h-1.5 bg-surface-3 rounded-sm">
                    <div
                      className={`h-full ${r.barColor} rounded-sm`}
                      style={{ width: r.width }}
                    />
                  </div>
                  <span
                    className={`font-mono text-[10px] ${r.attributionColor ?? "text-text-dim"}`}
                  >
                    {r.attribution}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

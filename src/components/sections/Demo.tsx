const points = [
  { num: "01", text: <><strong>30-minute live walkthrough</strong> — health overview through Veraflow SA, tailored to your production environment.</> },
  { num: "02", text: <><strong>Your questions answered</strong> — data model, multi-tenancy, customer portal, integration paths, pricing.</> },
  { num: "03", text: <><strong>No long-term commitment</strong> — start with one product line. Expand when you&apos;re ready.</> },
  { num: "04", text: <><strong>First product line live in 14 days</strong> — we handle onboarding, configuration, and customer portal setup.</> },
];

export default function Demo() {
  return (
    <section id="demo" className="relative z-1 py-[100px] bg-surface border-t border-border">
      <div className="max-w-[1200px] mx-auto px-12 max-md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Left — copy */}
          <div>
            <div className="font-mono text-[10px] tracking-[2px] uppercase text-text-dim mb-3">
              Request a Demo
            </div>
            <h2 className="font-headline font-bold text-[clamp(32px,4vw,52px)] leading-[1.05] text-text-bright tracking-[-0.5px]">
              See Veraflow on your data in 30 minutes.
            </h2>
            <p className="text-[17px] text-text-dim max-w-[580px] leading-[1.6] mt-3">
              We&apos;ll walk through the full pipeline with your part numbers, your customers, and your supply chain reality — not a generic demo.
            </p>
            <div className="flex flex-col gap-4 mt-8">
              {points.map((p) => (
                <div key={p.num} className="flex gap-3.5 items-start">
                  <span className="font-mono text-[11px] text-vt-orange bg-vt-orange/8 border border-vt-orange/30 rounded-[3px] px-2 py-0.5 shrink-0 mt-[1px]">
                    {p.num}
                  </span>
                  <div className="text-sm text-text-dim leading-[1.55] [&>strong]:text-text-bright">
                    {p.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-surface-2 border border-border-emphasis rounded-[10px] p-8">
            <div className="font-headline font-bold text-[22px] text-text-bright mb-1.5">
              Schedule Your Demo
            </div>
            <div className="text-[13px] text-text-dim mb-6">
              We&apos;ll reach out within one business day to confirm a time.
            </div>
            <form
              action="mailto:demo@veraflow.io"
              method="POST"
              encType="text/plain"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] tracking-[0.5px] uppercase text-text-dim">First Name</label>
                  <input name="firstName" className="bg-surface-3 border border-border-emphasis rounded-[5px] px-3.5 py-2.5 font-body text-sm text-text-bright outline-none transition-colors focus:border-vt-orange/30 w-full" type="text" placeholder="James" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] tracking-[0.5px] uppercase text-text-dim">Last Name</label>
                  <input name="lastName" className="bg-surface-3 border border-border-emphasis rounded-[5px] px-3.5 py-2.5 font-body text-sm text-text-bright outline-none transition-colors focus:border-vt-orange/30 w-full" type="text" placeholder="Smith" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5 mb-3">
                <label className="font-mono text-[10px] tracking-[0.5px] uppercase text-text-dim">Work Email</label>
                <input name="email" className="bg-surface-3 border border-border-emphasis rounded-[5px] px-3.5 py-2.5 font-body text-sm text-text-bright outline-none transition-colors focus:border-vt-orange/30 w-full" type="email" placeholder="james@yourcompany.com" />
              </div>
              <div className="flex flex-col gap-1.5 mb-3">
                <label className="font-mono text-[10px] tracking-[0.5px] uppercase text-text-dim">Company</label>
                <input name="company" className="bg-surface-3 border border-border-emphasis rounded-[5px] px-3.5 py-2.5 font-body text-sm text-text-bright outline-none transition-colors focus:border-vt-orange/30 w-full" type="text" placeholder="Acme Manufacturing Inc." />
              </div>
              <div className="flex flex-col gap-1.5 mb-3">
                <label className="font-mono text-[10px] tracking-[0.5px] uppercase text-text-dim">Industry</label>
                <select name="industry" defaultValue="" className="bg-surface-3 border border-border-emphasis rounded-[5px] px-3.5 py-2.5 font-body text-sm text-text-bright outline-none transition-colors focus:border-vt-orange/30 w-full [&>option]:bg-surface-3 [&>option]:text-text">
                  <option value="" disabled>Select your industry</option>
                  <option>Aerospace &amp; Defense</option>
                  <option>Space</option>
                  <option>Automotive / Motorsport</option>
                  <option>Industrial / Precision Manufacturing</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5 mb-3">
                <label className="font-mono text-[10px] tracking-[0.5px] uppercase text-text-dim">What would you like to see? (optional)</label>
                <textarea name="message" className="bg-surface-3 border border-border-emphasis rounded-[5px] px-3.5 py-2.5 font-body text-sm text-text-bright outline-none transition-colors focus:border-vt-orange/30 w-full resize-y min-h-20" placeholder="e.g. Supplier scorecard for 3 specific suppliers, True yield on a specific part, Customer portal demo..." />
              </div>
              <button
                type="submit"
                className="w-full bg-vt-orange text-white font-headline font-bold text-[15px] tracking-[1.5px] uppercase py-3.5 border-none rounded-[5px] cursor-pointer mt-2 hover:bg-vt-orange-light transition-colors"
              >
                Request Demo →
              </button>
              <div className="text-center mt-2.5 font-mono text-[9px] text-text-dim tracking-[0.3px]">
                No spam · No sales pressure · Respond within 1 business day
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

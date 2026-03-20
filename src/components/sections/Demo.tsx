const demoPoints = [
  {
    num: "01",
    text: (
      <>
        <strong className="text-text-bright">30-minute live walkthrough</strong>{" "}
        — health overview through Veraflow SA, tailored to your production
        environment.
      </>
    ),
  },
  {
    num: "02",
    text: (
      <>
        <strong className="text-text-bright">Your questions answered</strong> —
        data model, multi-tenancy, customer portal, integration paths, pricing.
      </>
    ),
  },
  {
    num: "03",
    text: (
      <>
        <strong className="text-text-bright">No long-term commitment</strong> —
        start with one product line. Expand when you&rsquo;re ready.
      </>
    ),
  },
  {
    num: "04",
    text: (
      <>
        <strong className="text-text-bright">
          First product line live in 14 days
        </strong>{" "}
        — we handle onboarding, configuration, and customer portal setup.
      </>
    ),
  },
];

const industryOptions = [
  "Aerospace & Defense",
  "Space",
  "Automotive / Motorsport",
  "Industrial / Precision Manufacturing",
  "Other",
];

const inputClasses =
  "bg-surface-3 border border-border-emphasis rounded-[5px] px-3.5 py-2.5 font-body text-sm text-text-bright outline-none focus:border-vt-orange/30 w-full";

export default function Demo() {
  return (
    <section
      id="demo"
      className="relative z-1 py-[100px] bg-surface border-t border-border"
    >
      <div className="max-w-[1200px] mx-auto px-12 max-md:px-6">
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-[80px] items-start">
          {/* ── Left column ── */}
          <div>
            <p className="font-mono text-[10px] tracking-[2px] uppercase text-text-dim mb-3">
              Request a Demo
            </p>
            <h2 className="font-headline font-bold text-[clamp(32px,4vw,52px)] leading-[1.05] text-text-bright tracking-[-0.5px]">
              See Veraflow on your data in 30&nbsp;minutes.
            </h2>
            <p className="text-[17px] text-text-dim max-w-[580px] leading-[1.6] mt-3">
              We&rsquo;ll walk through the full pipeline with your part numbers,
              your customers, and your supply chain reality &mdash; not a
              generic demo.
            </p>

            <div className="flex flex-col gap-4 mt-8">
              {demoPoints.map((pt) => (
                <div key={pt.num} className="flex gap-3.5 items-start">
                  <span className="font-mono text-[11px] text-vt-orange bg-vt-orange/8 border border-vt-orange/30 rounded-[3px] px-2 py-0.5 shrink-0 mt-[1px]">
                    {pt.num}
                  </span>
                  <p className="text-sm text-text-dim leading-[1.55]">
                    {pt.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column — form ── */}
          <div className="bg-surface-2 border border-border-emphasis rounded-[10px] p-8">
            <h3 className="font-headline font-bold text-[22px] text-text-bright mb-1.5">
              Schedule Your Demo
            </h3>
            <p className="text-[13px] text-text-dim mb-6">
              We&rsquo;ll reach out within one business day to confirm a time.
            </p>

            <form
              action="mailto:demo@veraflow.io"
              method="POST"
              encType="text/plain"
            >
              {/* First + Last name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] tracking-[0.5px] uppercase text-text-dim">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className={inputClasses}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] tracking-[0.5px] uppercase text-text-dim">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Work Email */}
              <div className="flex flex-col gap-1.5 mb-3">
                <label className="font-mono text-[10px] tracking-[0.5px] uppercase text-text-dim">
                  Work Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className={inputClasses}
                />
              </div>

              {/* Company */}
              <div className="flex flex-col gap-1.5 mb-3">
                <label className="font-mono text-[10px] tracking-[0.5px] uppercase text-text-dim">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  className={inputClasses}
                />
              </div>

              {/* Industry */}
              <div className="flex flex-col gap-1.5 mb-3">
                <label className="font-mono text-[10px] tracking-[0.5px] uppercase text-text-dim">
                  Industry
                </label>
                <select name="industry" required className={inputClasses}>
                  <option value="" disabled selected hidden />
                  {industryOptions.map((opt) => (
                    <option
                      key={opt}
                      value={opt}
                      className="bg-surface-3 text-text"
                    >
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5 mb-3">
                <label className="font-mono text-[10px] tracking-[0.5px] uppercase text-text-dim">
                  What would you like to see?
                </label>
                <textarea
                  name="message"
                  className={`${inputClasses} min-h-20 resize-y`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-vt-orange text-white font-headline font-bold text-[15px] tracking-[1.5px] uppercase py-3.5 border-none rounded-[5px] cursor-pointer mt-2 hover:bg-vt-orange-light transition-colors"
              >
                Request Demo &rarr;
              </button>
            </form>

            <p className="text-center mt-2.5 font-mono text-[9px] text-text-dim">
              No spam &middot; No sales pressure &middot; Respond within 1
              business day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

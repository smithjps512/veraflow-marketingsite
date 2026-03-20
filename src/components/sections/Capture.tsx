import Button from "@/components/ui/Button";

const features = [
  {
    icon: "\u{1F4F1}",
    title: "Progressive Web App \u2014 any smartphone",
    body: "Works on iOS and Android. No app store approval, no MDM enrollment, no corporate IT requirement. Open the link, scan, done. Suppliers can be onboarded in minutes.",
  },
  {
    icon: "\u{1F532}",
    title: "QR, barcode, DataMatrix \u2014 native camera",
    body: "Modern phone cameras read all major label formats without a dedicated scanner. Each scan creates a timestamped, GPS-tagged DECISIVE event directly in the Veraflow pipeline.",
  },
  {
    icon: "\u26A1",
    title: "Exception handling built in",
    body: "Quantity mismatch? Damaged label? Wrong part? Capture logs the exception with photo evidence and routes it for resolution \u2014 without blocking the physical flow.",
  },
  {
    icon: "\u{1F3ED}",
    title: "Supplier mandate or voluntary adoption",
    body: "Manufacturers with supplier leverage can require scan compliance as a contract condition. For others, adoption is incentivized \u2014 suppliers with higher scan compliance receive better scorecard ratings.",
  },
];

function PhoneMockup() {
  return (
    <div className="flex justify-center">
      <div className="w-[260px] relative">
        {/* Floating badge */}
        <div className="absolute top-[-12px] right-[-20px] bg-surface border border-trust-decisive/22 rounded-lg p-2 px-3 shadow z-10">
          <p className="font-mono text-[9px] text-trust-decisive">
            No app install required
          </p>
          <p className="font-headline text-[13px] font-semibold text-text-bright">
            Open in any browser
          </p>
        </div>

        {/* Phone shell */}
        <div className="bg-surface-2 border-2 border-border-emphasis rounded-[36px] p-4 px-3 shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
          {/* Notch */}
          <div className="w-20 h-2.5 bg-surface-3 rounded-[5px] mx-auto mb-3" />

          {/* Screen */}
          <div className="bg-surface-bg rounded-[20px] overflow-hidden border border-border">
            {/* App bar */}
            <div className="bg-vt-maroon p-3 px-3.5 flex items-center gap-2">
              <div className="w-5 h-5 bg-vt-orange rounded-[4px] flex items-center justify-center font-mono text-[9px] text-white font-bold">
                V
              </div>
              <span className="font-headline font-bold text-sm tracking-[1px] text-white">
                VERAFLOW CAPTURE
              </span>
            </div>

            {/* Scan frame */}
            <div className="bg-[#0a0a0a] h-40 flex items-center justify-center relative overflow-hidden">
              {/* Scan reticle */}
              <div className="w-[120px] h-[120px] border-2 border-vt-orange rounded-lg relative">
                {/* Corner brackets */}
                <div className="absolute top-[-1px] left-[-1px] w-[20px] h-[20px] border-t-[3px] border-l-[3px] border-vt-orange rounded-tl" />
                <div className="absolute top-[-1px] right-[-1px] w-[20px] h-[20px] border-t-[3px] border-r-[3px] border-vt-orange rounded-tr" />
                <div className="absolute bottom-[-1px] left-[-1px] w-[20px] h-[20px] border-b-[3px] border-l-[3px] border-vt-orange rounded-bl" />
                <div className="absolute bottom-[-1px] right-[-1px] w-[20px] h-[20px] border-b-[3px] border-r-[3px] border-vt-orange rounded-br" />

                {/* Animated scan line */}
                <div className="scanline-anim absolute left-1 right-1 h-px bg-gradient-to-r from-transparent via-vt-orange to-transparent" />
              </div>

              {/* Bottom text */}
              <p className="absolute bottom-2 left-0 right-0 text-center font-mono text-[9px] text-vt-orange/70">
                ALIGN BARCODE &middot; QR &middot; DATAMATRIX
              </p>
            </div>

            {/* Event card area */}
            <div className="p-3">
              {/* Confirmed card */}
              <div className="bg-trust-decisive/7 border border-trust-decisive/22 rounded-lg p-2.5 mb-2">
                <div className="flex items-center gap-1.5 mb-1">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full bg-trust-decisive"
                    style={{ boxShadow: "0 0 6px var(--color-trust-decisive, #22c55e)" }}
                  />
                  <span className="font-mono text-[9px] text-trust-decisive uppercase">
                    Event Captured &middot; Decisive
                  </span>
                </div>
                <p className="font-headline font-semibold text-[13px] text-text-bright">
                  S-02 &middot; Supplier Pack-Out
                </p>
                <div className="font-mono text-[9px] text-text-dim leading-[1.6] mt-1">
                  <p>PO-4821 &middot; SR15130-1</p>
                  <p>Qty: 50 &middot; Lot: L240318-A</p>
                  <p className="text-trust-decisive">&checkmark; GPS + timestamp locked</p>
                </div>
              </div>

              {/* Button grid */}
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-vt-orange text-white font-headline font-bold text-[11px] tracking-[0.5px] uppercase py-2 rounded-md">
                  Confirm
                </button>
                <button className="bg-surface-3 border border-border text-text-dim font-headline font-bold text-[11px] tracking-[0.5px] uppercase py-2 rounded-md">
                  Exception
                </button>
              </div>
            </div>
          </div>

          {/* Home indicator */}
          <div className="w-[60px] h-1 bg-border-emphasis rounded-sm mx-auto mt-3" />
        </div>
      </div>
    </div>
  );
}

export default function Capture() {
  return (
    <section id="capture" className="py-[100px]">
      <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
        {/* Left — Phone mockup */}
        <div className="order-first md:order-none">
          <PhoneMockup />
        </div>

        {/* Right — Copy */}
        <div>
          <p className="font-mono text-[10px] tracking-[2px] uppercase text-text-dim mb-3">
            Veraflow Capture
          </p>

          <h2 className="font-headline font-bold text-[clamp(32px,4vw,52px)] leading-[1.05] text-text-bright">
            DECISIVE data has to start somewhere.
          </h2>

          <p className="text-[17px] text-text-dim max-w-[580px] leading-[1.6] mt-3">
            The intelligence layer is only as good as the events that feed it.
            Veraflow Capture is a mobile-first companion app &mdash; open any
            smartphone browser, scan the part, confirm the event. No install, no
            hardware procurement, no IT project.
          </p>

          {/* Feature items */}
          <div className="flex flex-col gap-5 mt-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-vt-orange/8 border border-vt-orange/30 flex items-center justify-center text-lg shrink-0">
                  {f.icon}
                </div>
                <div>
                  <p className="font-headline font-semibold text-base text-text-bright mb-1">
                    {f.title}
                  </p>
                  <p className="text-[13px] text-text-dim leading-[1.55]">
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Enterprise badge */}
          <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 p-3.5 bg-surface border border-border-emphasis rounded-lg border-l-[3px] border-l-vt-orange">
            <div>
              <p className="font-headline font-bold text-[15px] text-text-bright mb-0.5">
                Available at Enterprise tier
              </p>
              <p className="font-mono text-[10px] text-text-dim">
                Included in Enterprise plans &middot; Ask about early access
                during your demo
              </p>
            </div>
            <Button
              variant="primary"
              href="#demo"
              className="shrink-0 whitespace-nowrap"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

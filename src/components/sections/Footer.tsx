const certs = ["AS9100D", "MIL-STD-130", "CMMC 2.0", "ITAR", "Azure Government Available"];

export default function Footer() {
  return (
    <footer className="relative z-1 bg-surface-bg border-t border-border px-12 py-10 flex items-center gap-5 flex-wrap max-md:px-6">
      <a href="#" className="font-headline font-extrabold text-lg tracking-[2px] text-text-bright flex items-center gap-2 no-underline">
        <div className="w-7 h-7 bg-vt-maroon border border-vt-orange rounded flex items-center justify-center font-mono font-semibold text-[13px] text-vt-orange">
          V
        </div>
        VERAFLOW
      </a>
      <div className="text-xs text-text-dim">
        Supply Chain Data You Can Trust · A product of Garden Prayer Publishing LLC
      </div>
      <ul className="ml-auto flex gap-5 list-none">
        {[
          ["#trust", "Data Model"],
          ["#pricing", "Pricing"],
          ["#demo", "Contact"],
          ["mailto:demo@veraflow.io", "demo@veraflow.io"],
        ].map(([href, label]) => (
          <li key={href}>
            <a href={href} className="font-mono text-[10px] text-text-dim no-underline tracking-[0.5px] transition-colors hover:text-text">
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="w-full pt-3 border-t border-border mt-2 flex justify-between items-center flex-wrap gap-3">
        <span className="font-mono text-[9px] text-text-dim tracking-[0.5px]">
          © 2026 Garden Prayer Publishing LLC. All rights reserved.
        </span>
        <div className="flex gap-2 flex-wrap">
          {certs.map((c) => (
            <span key={c} className="font-mono text-[8px] text-text-dim bg-surface border border-border rounded-[3px] px-[7px] py-0.5">
              {c}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

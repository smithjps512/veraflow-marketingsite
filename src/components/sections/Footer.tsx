const navLinks = [
  { label: "Data Model", href: "#trust" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#demo" },
  { label: "demo@veraflow.io", href: "mailto:demo@veraflow.io" },
];

const certBadges = [
  "AS9100D",
  "MIL-STD-130",
  "CMMC 2.0",
  "ITAR",
  "Azure Government Available",
];

export default function Footer() {
  return (
    <footer className="bg-surface-bg border-t border-border px-12 max-md:px-6 py-10 flex items-center gap-5 flex-wrap relative z-1">
      {/* Logo */}
      <a
        href="#"
        className="font-headline font-extrabold text-lg tracking-[2px] text-text-bright flex items-center gap-2 no-underline"
      >
        <span className="w-7 h-7 bg-vt-maroon border border-vt-orange rounded flex items-center justify-center font-mono font-semibold text-[13px] text-vt-orange">
          V
        </span>
        VERAFLOW
      </a>

      {/* Tagline */}
      <span className="text-xs text-text-dim">
        Supply Chain Data You Can Trust &middot; A product of Garden Prayer
        Publishing LLC
      </span>

      {/* Links */}
      <nav className="ml-auto flex gap-5 list-none">
        {navLinks.map((link) => (
          <a
            key={link.href + link.label}
            href={link.href}
            className="font-mono text-[10px] text-text-dim no-underline tracking-[0.5px] hover:text-text transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Bottom row */}
      <div className="w-full pt-3 border-t border-border mt-2 flex justify-between items-center flex-wrap gap-3">
        <p className="font-mono text-[9px] text-text-dim">
          &copy; 2026 Garden Prayer Publishing LLC. All rights reserved.
        </p>
        <div className="flex gap-2 flex-wrap">
          {certBadges.map((badge) => (
            <span
              key={badge}
              className="font-mono text-[8px] text-text-dim bg-surface border border-border rounded-[3px] px-[7px] py-0.5"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

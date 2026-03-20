export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-100 bg-[rgba(11,13,18,0.92)] backdrop-blur-[12px] border-b border-border px-12 h-[60px] flex items-center">
      <a href="#" className="font-headline font-extrabold text-[22px] tracking-[2px] text-text-bright no-underline flex items-center gap-2.5">
        <div className="w-7 h-7 bg-vt-maroon border border-vt-orange rounded-[4px] flex items-center justify-center font-mono font-semibold text-[13px] text-vt-orange shrink-0">
          V
        </div>
        VERAFLOW
      </a>
      <ul className="hidden md:flex gap-7 ml-10 list-none">
        {[
          ["#trust", "Data Model"],
          ["#pipeline", "Pipeline"],
          ["#capture", "Capture"],
          ["#trueyield", "True Yield"],
          ["#scorecard", "Scorecard"],
          ["#sa", "Veraflow SA"],
          ["#pricing", "Pricing"],
        ].map(([href, label]) => (
          <li key={href}>
            <a
              href={href}
              className="font-headline text-[13px] tracking-[1px] uppercase text-text-dim no-underline transition-colors duration-150 hover:text-text-bright"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#demo"
        className="ml-auto bg-vt-orange text-white font-headline font-bold text-[13px] tracking-[1px] uppercase px-5 py-2 rounded-[4px] no-underline transition-colors duration-150 hover:bg-vt-orange-light"
      >
        Request Demo
      </a>
    </nav>
  );
}

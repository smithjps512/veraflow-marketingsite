import Image from "next/image";

const navLinks = [
  { label: "Industries", href: "#industries" },
  { label: "Platform", href: "#platform" },
  { label: "Veratrace", href: "#veratrace" },
  { label: "Veraflow SA", href: "#sa" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "How It Works", href: "#how" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image src="/logo.svg" alt="Veraflow" width={28} height={28} />
              <span className="font-headline text-lg font-bold tracking-wide text-white">
                VERAFLOW
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Physical Truth Layer for Precision Manufacturing.
              <br />A product of Garden Prayer Publishing LLC.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Infrastructure */}
          <div className="text-right md:text-right">
            <p className="font-mono text-xs text-gray-500 mb-1">
              INFRASTRUCTURE
            </p>
            <p className="text-sm text-gray-400">Azure Government</p>
            <p className="text-xs text-gray-500">
              FedRAMP Authorized · ITAR-Compliant
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-wrap justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Garden Prayer Publishing LLC. All
            rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="font-mono text-xs text-gray-600">
              AS9100D · MIL-STD-130 · CMMC 2.0 · ITAR
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

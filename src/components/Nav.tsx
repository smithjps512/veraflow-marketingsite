"use client";

import Image from "next/image";

const links = [
  { label: "Industries", href: "#industries" },
  { label: "Platform", href: "#platform" },
  { label: "Veratrace", href: "#veratrace" },
  { label: "Veraflow SA", href: "#sa" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "How It Works", href: "#how" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-xl bg-base/80">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 h-16">
        <a href="#" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Veraflow" width={36} height={36} />
          <span className="font-headline text-xl font-bold tracking-wide text-white">
            VERAFLOW
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#cta"
          className="bg-maroon hover:bg-maroon/80 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
        >
          Request Pilot
        </a>
      </div>
    </nav>
  );
}

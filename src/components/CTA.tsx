export default function CTA() {
  return (
    <section id="cta" className="py-24 px-6">
      <div className="mx-auto max-w-3xl text-center reveal">
        <p className="text-orange font-mono text-sm tracking-widest uppercase mb-3">
          Get Started
        </p>
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-6">
          Request a 90-day pilot.
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
          Deploy Veraflow on one product line. See verified scan data flowing in
          14 days. Full 10-gate production in 90 days. No long-term commitment
          required.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:pilot@veraflow.io"
            className="bg-maroon hover:bg-maroon/80 text-white font-semibold px-8 py-3.5 rounded text-sm transition-colors"
          >
            Request Pilot
          </a>
          <a
            href="mailto:info@veraflow.io"
            className="border border-border hover:border-border-hover text-gray-300 hover:text-white font-semibold px-8 py-3.5 rounded text-sm transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

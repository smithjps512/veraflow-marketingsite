import Button from "@/components/ui/Button";

interface Feature {
  text: string;
  included: boolean;
}

interface PlanProps {
  tier: string;
  tierColor: string;
  price: string;
  priceSize?: string;
  period: string;
  desc: string;
  features: Feature[];
  checkColor: string;
  buttonVariant: "primary" | "ghost";
  buttonLabel: string;
  featured?: boolean;
  className?: string;
}

function PlanCard({
  tier,
  tierColor,
  price,
  priceSize = "text-[44px]",
  period,
  desc,
  features,
  checkColor,
  buttonVariant,
  buttonLabel,
  featured,
  className = "",
}: PlanProps) {
  return (
    <div
      className={`bg-surface border rounded-[10px] p-8 flex flex-col transition-colors hover:border-border-emphasis relative ${
        featured
          ? "border-vt-orange/30 bg-[rgba(99,0,49,0.08)]"
          : "border-border"
      } ${className}`}
    >
      {featured && (
        <span className="absolute top-[-1px] left-1/2 -translate-x-1/2 bg-vt-orange text-white font-mono text-[9px] font-semibold tracking-[1px] uppercase px-3.5 py-[3px] rounded-b-md">
          Most Popular
        </span>
      )}

      <p
        className={`font-headline font-bold text-sm tracking-[2px] uppercase mb-2 ${tierColor}`}
      >
        {tier}
      </p>

      <p
        className={`font-headline font-extrabold ${priceSize} leading-none text-text-bright mb-0.5`}
      >
        {price.startsWith("$") ? (
          <>
            <sup className="text-[22px] align-top mr-0.5">$</sup>
            {price.slice(1)}
          </>
        ) : (
          price
        )}
      </p>

      <p className="font-mono text-[11px] text-text-dim mb-5">{period}</p>

      <p className="text-[13px] text-text-dim leading-[1.55] mb-6 pb-6 border-b border-border">
        {desc}
      </p>

      <div className="flex flex-col gap-2.5 mb-7 flex-1">
        {features.map((f) => (
          <div
            key={f.text}
            className={`flex gap-2.5 items-start text-[13px] leading-[1.5] ${
              f.included ? "text-text-dim" : "text-text-dim opacity-40"
            }`}
          >
            <span
              className={`shrink-0 mt-0.5 ${
                f.included ? checkColor : ""
              }`}
            >
              {f.included ? "\u2713" : "\u2014"}
            </span>
            <span>{f.text}</span>
          </div>
        ))}
      </div>

      <Button
        variant={buttonVariant}
        href="#demo"
        className="w-full justify-center text-center"
      >
        {buttonLabel}
      </Button>
    </div>
  );
}

const foundationFeatures: Feature[] = [
  { text: "Up to 5 active customers", included: true },
  { text: "Full S-00 through S-09 pipeline", included: true },
  { text: "Trust classification on all fields", included: true },
  { text: "Kit tracking + station drill-down", included: true },
  { text: "Incoming + final inspection", included: true },
  { text: "Customer portal access", included: true },
  { text: "Supplier scorecard", included: false },
  { text: "True yield analytics", included: false },
  { text: "Veraflow SA", included: false },
];

const professionalFeatures: Feature[] = [
  { text: "Unlimited customers", included: true },
  { text: "Full S-00 through S-09 pipeline", included: true },
  { text: "Trust classification on all fields", included: true },
  { text: "Kit tracking + station drill-down", included: true },
  { text: "Supplier scorecard + scoring history", included: true },
  { text: "True yield analytics + attribution", included: true },
  { text: "Veraflow SA \u2014 all 3 capabilities", included: true },
  { text: "Per-customer scorecard weight config", included: true },
  { text: "Customer portal access", included: true },
];

const enterpriseFeatures: Feature[] = [
  { text: "Everything in Professional", included: true },
  { text: "Multiple product lines", included: true },
  { text: "REST API access", included: true },
  { text: "SSO / SAML", included: true },
  { text: "ERP / MES data integration", included: true },
  { text: "Custom scorecard weight rules", included: true },
  { text: "Dedicated customer success", included: true },
  { text: "SLA + priority support", included: true },
  { text: "Azure Government / ITAR available", included: true },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-1 py-[100px]">
      <div className="max-w-[1200px] mx-auto px-12 max-md:px-6">
        {/* ── Header ── */}
        <div className="reveal text-center">
          <p className="font-mono text-[10px] tracking-[2px] uppercase text-text-dim mb-3">
            Pricing
          </p>
          <h2 className="font-headline font-bold text-[clamp(32px,4vw,52px)] leading-[1.05] text-text-bright tracking-[-0.5px]">
            Start with one product line.
          </h2>
          <p className="text-[15px] text-text-dim mt-2.5 max-w-[520px] mx-auto">
            No rip-and-replace. Veraflow runs alongside your existing ERP.
            First product line live in under two weeks.
          </p>
        </div>

        {/* ── Pricing grid ── */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-md:max-w-[400px] max-md:mx-auto">
          <PlanCard
            tier="FOUNDATION"
            tierColor="text-text-dim"
            price="$499"
            period="per month"
            desc="One product line, up to 5 active customers. Full trusted data model and pipeline tracking."
            features={foundationFeatures}
            checkColor="text-trust-decisive"
            buttonVariant="ghost"
            buttonLabel="Get Started"
          />

          <PlanCard
            tier="PROFESSIONAL"
            tierColor="text-vt-orange"
            price="$1,499"
            period="per month"
            desc="Unlimited customers, full supplier scorecard, true yield analytics, and Veraflow SA included."
            features={professionalFeatures}
            checkColor="text-vt-orange"
            buttonVariant="primary"
            buttonLabel="Get Started"
            featured
          />

          <PlanCard
            tier="ENTERPRISE"
            tierColor="text-text-dim"
            price="Custom"
            priceSize="text-[32px] pt-1.5"
            period="contact us"
            desc="Multi-product line, API access, SSO, custom integrations, and dedicated customer success."
            features={enterpriseFeatures}
            checkColor="text-trust-decisive"
            buttonVariant="ghost"
            buttonLabel="Contact Sales"
          />
        </div>

        {/* ── Price note ── */}
        <p className="reveal text-center mt-5 font-mono text-[10px] text-text-dim">
          All plans include 14-day onboarding support &middot; No long-term
          commitment required &middot; Pricing in USD
        </p>
      </div>
    </section>
  );
}

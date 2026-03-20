import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-vt-orange text-white hover:bg-vt-orange-light",
  ghost:
    "bg-transparent text-text border border-border-emphasis hover:border-text-dim hover:text-text-bright",
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
}

export default function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center gap-2 font-headline font-semibold text-sm tracking-[1px] uppercase px-6 py-3 rounded-[5px] no-underline cursor-pointer transition-all duration-150 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

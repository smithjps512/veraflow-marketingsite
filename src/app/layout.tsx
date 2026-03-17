import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veraflow — Physical Truth Layer for Precision Manufacturing",
  description:
    "Replace manual data entry with hardware scan events at every physical handoff. Real-time visibility from Tier 2 supplier through customer delivery.",
  openGraph: {
    title: "Veraflow — Physical Truth Layer for Precision Manufacturing",
    description:
      "Replace manual data entry with hardware scan events at every physical handoff.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

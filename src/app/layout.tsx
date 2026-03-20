import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veraflow — Supply Chain Data You Can Trust",
  description:
    "Every field is classified as decisive, informed, or derived — and the difference is always visible. No more guessing which numbers you can act on.",
  openGraph: {
    title: "Veraflow — Supply Chain Data You Can Trust",
    description:
      "Every field is classified as decisive, informed, or derived — and the difference is always visible.",
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
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&family=Barlow+Condensed:wght@300;400;500;600;700;800&family=Barlow:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WorkZone Intelligence | AI Infrastructure Governance",
    template: "%s | WorkZone Intelligence",
  },
  description:
    "Unified workforce, fleet, and compliance intelligence for high-risk infrastructure operations. Enterprise-grade governance for highways, rail, utilities, and government.",
  keywords: [
    "infrastructure governance",
    "workforce compliance",
    "fleet management",
    "risk management",
    "CDM 2015",
    "ISO 27001",
    "construction compliance",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://workzoneintellegence.com",
    siteName: "WorkZone Intelligence",
    title: "WorkZone Intelligence | AI Infrastructure Governance",
    description:
      "Unified workforce, fleet, and compliance intelligence for high-risk infrastructure operations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0f] text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

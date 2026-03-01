import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { industries } from "@/lib/constants";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "WorkZone Intelligence serves highways, rail, utilities, government, and aviation sectors with purpose-built infrastructure governance.",
};

const crossSector = [
  {
    title: "Workforce Governance",
    description:
      "Competency-verified deployment, right-to-work validation, and continuous qualification monitoring across all sectors.",
  },
  {
    title: "Fleet & Asset Compliance",
    description:
      "Vehicle and plant lifecycle management with service scheduling, defect governance, and operator assignment controls.",
  },
  {
    title: "Regulatory Alignment",
    description:
      "Pre-mapped compliance frameworks for CDM 2015, ISO 45001, ISO 9001, and sector-specific standards.",
  },
  {
    title: "Executive Risk Dashboards",
    description:
      "Real-time operational visibility with AI-staged risk escalation and cross-module correlation intelligence.",
  },
];

const iconMap: Record<string, ReactNode> = {
  highway: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  rail: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m-8 4h8m-4-8v16m-4 0h8" />
    </svg>
  ),
  utilities: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  government: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-16 0H3m2-9h14M5 7h14" />
    </svg>
  ),
  aviation: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
};

export default function IndustriesPage() {
  return (
    <>
      <HeroSection
        badge="Sectors"
        title="Built for Regulated"
        titleAccent="Infrastructure"
        subtitle="WZI operates where failure is not administrative inconvenience but operational, legal, and reputational risk. Every module is engineered for regulated environments."
        primaryCta={{ label: "Find Your Sector", href: "/enterprise-briefing/" }}
        height="large"
      />

      {/* Industry Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, i) => (
              <ScrollReveal key={industry.name} delay={i * 0.1}>
                <GlassCard className="h-full" padding="lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/10 to-purple-600/10 flex items-center justify-center mb-5 text-amber-400/70">
                    {iconMap[industry.icon]}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {industry.description}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Sector */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Universal Capabilities"
              title="Cross-Sector Governance"
              subtitle="Core capabilities that apply across every regulated infrastructure environment."
            />
          </ScrollReveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
            {crossSector.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <GlassCard className="h-full">
                  <h3 className="text-base font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Find your sector solution"
        subtitle="Speak with our governance team about your specific regulatory environment."
      />
    </>
  );
}

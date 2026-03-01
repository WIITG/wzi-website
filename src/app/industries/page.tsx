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
    "WorkZone Intelligence serves highways, civil construction, traffic management, utilities, engineering, WHS, and government sectors with purpose-built infrastructure governance.",
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
  construction: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m0 0H3m16 0h2M12 7v4m0 0H8m4 0h4" />
    </svg>
  ),
  traffic: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M5.07 19H19a2 2 0 001.75-2.97L13.75 4.06a2 2 0 00-3.5 0L3.32 16.03A2 2 0 005.07 19z" />
    </svg>
  ),
  utilities: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  engineering: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  whs: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  government: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-16 0H3m2-9h14M5 7h14" />
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

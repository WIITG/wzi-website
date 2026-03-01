import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Procurement",
  description:
    "Enterprise procurement: G-Cloud, Crown Commercial Service, modular licensing, and tender response support.",
};

const frameworks = [
  {
    name: "G-Cloud",
    description: "Available on the UK Government Digital Marketplace via G-Cloud framework for direct public sector procurement.",
    badge: "Digital Marketplace",
  },
  {
    name: "Crown Commercial Service",
    description: "Aligned to Crown Commercial Service frameworks for streamlined government procurement pathways.",
    badge: "Government",
  },
  {
    name: "Enterprise Direct",
    description: "Direct enterprise licensing for private sector infrastructure contractors and operators.",
    badge: "Private Sector",
  },
];

const tenderThemes = [
  { theme: "Workforce Management & Compliance", wziSection: "WZI Recruit + WZI Talent" },
  { theme: "Fleet & Asset Management", wziSection: "WZI Fleet" },
  { theme: "Regulatory Compliance & Risk", wziSection: "WZI Comply + WZI Risk" },
  { theme: "Health, Safety & Wellbeing", wziSection: "WZI Pulse + WZI Fatigue" },
  { theme: "Data Security & Governance", wziSection: "Security Architecture" },
  { theme: "Implementation & Support", wziSection: "Consultancy & Advisory" },
  { theme: "Performance Evidence", wziSection: "Case Studies & Metrics" },
];

const phases = [
  { title: "Discovery", desc: "Requirements assessment, stakeholder mapping, and scope definition." },
  { title: "Configuration", desc: "Module selection, workflow customisation, and integration planning." },
  { title: "Deployment", desc: "Phased rollout with user training and data migration support." },
  { title: "Optimisation", desc: "Ongoing governance review, reporting refinement, and feature adoption." },
];

export default function ProcurementPage() {
  return (
    <>
      <HeroSection
        badge="Procurement"
        title="Enterprise Procurement"
        titleAccent="& Framework Access"
        subtitle="Multiple procurement routes designed for public and private sector infrastructure organisations. Modular licensing that scales with your governance requirements."
        primaryCta={{ label: "Start Procurement Conversation", href: "/enterprise-briefing/" }}
        height="large"
        backgroundImage="/images/backgrounds/hero-bg-3.png"
      />

      {/* Frameworks */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Frameworks"
              title="Procurement Routes"
              subtitle="WZI is available through multiple procurement frameworks to simplify purchasing for your organisation."
            />
          </ScrollReveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
            {frameworks.map((fw, i) => (
              <ScrollReveal key={fw.name} delay={i * 0.1}>
                <GlassCard className="h-full" padding="lg">
                  <span className="inline-block text-[10px] px-2 py-1 rounded-md bg-amber-500/10 text-amber-400/80 uppercase tracking-wider mb-4">
                    {fw.badge}
                  </span>
                  <h3 className="text-xl font-semibold mb-3">{fw.name}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{fw.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tender Response Matrix */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Tender Support"
              title="RFP Response Matrix"
              subtitle="Common National Highways tender themes mapped directly to WZI platform capabilities."
            />
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    <th className="py-4 px-4 text-left text-xs uppercase tracking-wider text-white/40 font-medium">
                      Tender Theme
                    </th>
                    <th className="py-4 px-4 text-left text-xs uppercase tracking-wider text-amber-400/80 font-medium">
                      WZI Response Section
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tenderThemes.map((row) => (
                    <tr key={row.theme} className="border-b border-white/[0.04]">
                      <td className="py-4 px-4 text-sm text-white/60">{row.theme}</td>
                      <td className="py-4 px-4 text-sm text-white/80 font-medium">{row.wziSection}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Implementation"
              title="Phased Deployment"
              subtitle="Modular, scalable deployment designed to minimise operational disruption."
            />
          </ScrollReveal>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.title} delay={i * 0.1}>
                <GlassCard className="h-full">
                  <div className="text-2xl font-bold gradient-text-amber mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-base font-semibold mb-2">{phase.title}</h3>
                  <p className="text-sm text-white/50">{phase.desc}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Start the procurement conversation"
        subtitle="Our team can provide framework-specific pricing, compliance documentation, and deployment proposals."
        ctaLabel="Contact Procurement Team"
      />
    </>
  );
}

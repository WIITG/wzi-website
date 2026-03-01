import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FeatureGrid } from "@/components/sections/FeatureGrid";

export const metadata: Metadata = {
  title: "Planning & Design",
  description:
    "Permit intelligence, design governance, document control, and BIM integration for infrastructure planning.",
};

const permitFeatures = [
  {
    title: "Permit Lifecycle Management",
    description: "End-to-end permit tracking from application through approval, renewal, and closure with full audit trail.",
  },
  {
    title: "Secure Permit Vault",
    description: "Centralised, version-controlled repository for all permit documentation with role-based access controls.",
  },
  {
    title: "Expiry & Renewal Alerts",
    description: "Automated monitoring of permit validity periods with escalating notifications before expiry dates.",
  },
];

const designFeatures = [
  {
    title: "Document Version Control",
    description: "Complete revision history for all design documents with approval workflows and digital sign-off.",
  },
  {
    title: "Approval Workflows",
    description: "Configurable multi-stage approval processes with role-based authorisation and audit trail.",
  },
  {
    title: "Design Change Management",
    description: "Formal change request process with impact assessment, approval, and implementation tracking.",
  },
];

const standards = [
  "CDM 2015 Design Risk Management",
  "BS EN ISO 19650 (BIM)",
  "PAS 1192 Information Management",
  "National Highways DMRB",
  "Network Rail Standards",
  "Building Regulations Part L",
];

export default function PlanningDesignPage() {
  return (
    <>
      <HeroSection
        badge="Solutions"
        title="Planning & Design"
        titleAccent="Intelligence"
        subtitle="Permit lifecycle governance, design document control, and regulatory compliance tracking for infrastructure planning teams."
        primaryCta={{ label: "Request Demonstration", href: "/enterprise-briefing/" }}
        height="large"
      />

      {/* Permit Intelligence */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Permits"
              title="Permit Intelligence"
              subtitle="Centralised permit governance replacing spreadsheet-based tracking with automated lifecycle management."
            />
          </ScrollReveal>
          <div className="mt-16">
            <FeatureGrid features={permitFeatures} columns={3} />
          </div>
        </div>
      </section>

      {/* Design Governance */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Design Control"
              title="Design Governance"
              subtitle="Structured document control and approval workflows for design teams working on regulated infrastructure."
            />
          </ScrollReveal>
          <div className="mt-16">
            <FeatureGrid features={designFeatures} columns={3} />
          </div>
        </div>
      </section>

      {/* Standards Alignment */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Compliance"
              title="Standards Alignment"
              subtitle="WZI planning and design modules are aligned to key regulatory and industry standards."
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {standards.map((s, i) => (
              <ScrollReveal key={s} delay={i * 0.08}>
                <GlassCard>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-amber-400/60 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-white/70">{s}</span>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Explore planning intelligence"
        subtitle="See how WZI transforms permit and design governance for your infrastructure projects."
      />
    </>
  );
}

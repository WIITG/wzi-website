import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatBlock } from "@/components/ui/StatBlock";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FeatureGrid } from "@/components/sections/FeatureGrid";

export const metadata: Metadata = {
  title: "Vehicle Mitigation",
  description:
    "Traffic management strategy, fleet compliance, CDM 2015 integration, and National Highways SRN alignment.",
};

const tmFeatures = [
  {
    title: "Live TM Compliance Tracking",
    description: "Real-time monitoring of traffic management deployments across active work zones with automated compliance verification.",
  },
  {
    title: "TTM Layout Governance",
    description: "Temporary traffic management layout approval workflows with digital sign-off and revision tracking.",
  },
  {
    title: "Operative Competency Verification",
    description: "Automated verification that all TM operatives hold current NHSS sector scheme qualifications.",
  },
];

const fleetFeatures = [
  {
    title: "Vehicle Service Scheduling",
    description: "Proactive service scheduling with automated alerts for upcoming service requirements and overdue vehicles.",
  },
  {
    title: "Defect Reporting & Resolution",
    description: "Digital defect reporting with photographic evidence, severity classification, and resolution tracking.",
  },
  {
    title: "MOT & Insurance Tracking",
    description: "Automated monitoring of MOT expiry, insurance renewal, and regulatory certification status.",
  },
  {
    title: "Operator-Asset Assignment",
    description: "Competency-gated operator assignment ensuring only qualified personnel operate specific vehicle classes.",
  },
];

const cdmDuties = [
  { role: "Client", duty: "WZI provides visibility of duty compliance across all appointed parties." },
  { role: "Principal Designer", duty: "Design governance, permit tracking, and planning intelligence through WZI." },
  { role: "Principal Contractor", duty: "Workforce competency, fleet compliance, and risk management via WZI modules." },
  { role: "Contractors", duty: "Individual compliance, training records, and method statement management." },
];

export default function VehicleMitigationPage() {
  return (
    <>
      <HeroSection
        badge="Solutions"
        title="Vehicle Mitigation"
        titleAccent="& Fleet Compliance"
        subtitle="Traffic management intelligence, fleet lifecycle governance, and CDM 2015 dutyholder alignment for high-risk highway operations."
        primaryCta={{ label: "Request Demonstration", href: "/enterprise-briefing/" }}
        height="large"
      />

      {/* TM Strategy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Traffic Management"
              title="TM Strategy Intelligence"
              subtitle="Real-time traffic management compliance monitoring for Strategic Road Network operations."
            />
          </ScrollReveal>
          <div className="mt-16">
            <FeatureGrid features={tmFeatures} columns={3} />
          </div>
        </div>
      </section>

      {/* Fleet Compliance */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Fleet Governance"
              title="Operational Asset Oversight"
              subtitle="Complete fleet lifecycle management from acquisition through disposal with continuous compliance monitoring."
            />
          </ScrollReveal>
          <div className="mt-16">
            <FeatureGrid features={fleetFeatures} columns={2} />
          </div>
        </div>
      </section>

      {/* CDM Integration */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="CDM 2015"
              title="Dutyholder Framework Alignment"
              subtitle="WZI maps directly to CDM 2015 dutyholder responsibilities, providing governance visibility for every appointed role."
            />
          </ScrollReveal>
          <div className="mt-12 space-y-4">
            {cdmDuties.map((item, i) => (
              <ScrollReveal key={item.role} delay={i * 0.1}>
                <div className="glass-card p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-purple-400">{item.role[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">{item.role}</h3>
                    <p className="text-sm text-white/50">{item.duty}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Metric */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading badge="Deployment Evidence" title="High-Speed Motorway Upgrade" />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={0}><StatBlock value="120-180" label="Personnel Governed" /></ScrollReveal>
            <ScrollReveal delay={0.1}><StatBlock value="15+" label="Active Work Zones" /></ScrollReveal>
            <ScrollReveal delay={0.2}><StatBlock value="63%" label="CAR Reduction" /></ScrollReveal>
            <ScrollReveal delay={0.3}><StatBlock value="100%" label="TM Compliance" /></ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection
        title="See vehicle mitigation in action"
        subtitle="Request a demonstration of WZI fleet and traffic management governance."
      />
    </>
  );
}

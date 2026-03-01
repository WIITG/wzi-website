import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatBlock } from "@/components/ui/StatBlock";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Enterprise deployment evidence from live high-risk infrastructure programmes demonstrating measurable governance outcomes.",
};

const caseStudies = [
  {
    title: "High-Speed Motorway Upgrade",
    contract: "20-50M",
    personnel: "120-180",
    stats: [
      { value: "63%", label: "CAR Close-out Reduction" },
      { value: "+5%", label: "Audit Score Improvement" },
      { value: "100%", label: "Mobilisation Compliance" },
      { value: "0", label: "Expired Deployments" },
    ],
    highlights: [
      "Daily TTM compliance tracking across 15+ active work zones",
      "Automated competency expiry alerts preventing non-compliant deployments",
      "Real-time executive risk dashboard for senior project leadership",
      "Full CDM 2015 dutyholder framework alignment",
    ],
  },
  {
    title: "Urban Major Road Alliance",
    contract: "10-25M",
    personnel: "90-130",
    stats: [
      { value: "400+", label: "Annual Audits Managed" },
      { value: "6%→2%", label: "Repeat Non-conformance" },
      { value: "96.4%", label: "Average Compliance" },
      { value: "24hr", label: "CAR Response Time" },
    ],
    highlights: [
      "Multi-authority alliance governance across 4 local authorities",
      "Standardised audit workflows replacing 3 legacy paper systems",
      "AI-staged risk escalation reducing executive intervention by 40%",
      "Integrated fleet compliance with daily defect resolution tracking",
    ],
  },
  {
    title: "Regional Network Deployment",
    contract: "Multi-site rural",
    personnel: "60-100",
    stats: [
      { value: "100%", label: "Mobilisation Compliance" },
      { value: "3.4d", label: "Average CAR Closure" },
      { value: "12", label: "Sites Governed" },
      { value: "0", label: "Regulatory Actions" },
    ],
    highlights: [
      "Geographically dispersed workforce governance across 12 rural sites",
      "Centralised competency monitoring with mobile field verification",
      "Fatigue management integration with shift-pattern risk analysis",
      "Pulse wellbeing monitoring with anonymous psychosocial risk scoring",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <HeroSection
        badge="Evidence"
        title="Enterprise Deployment"
        titleAccent="Evidence"
        subtitle="Performance metrics from live deployments across high-risk infrastructure programmes. Every number is drawn from operational data, not projections."
        primaryCta={{ label: "Discuss Your Deployment", href: "/enterprise-briefing/" }}
        height="large"
      />

      {/* Case Studies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((study, idx) => (
            <ScrollReveal key={study.title}>
              <GlassCard padding="lg" hover={false}>
                <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
                  <div>
                    <span className="text-xs text-amber-400/60 uppercase tracking-wider">
                      Project {idx + 1}
                    </span>
                    <h3 className="text-2xl font-bold mt-1">{study.title}</h3>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-right">
                      <div className="text-xs text-white/40">Contract Value</div>
                      <div className="text-sm font-semibold">{study.contract}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-white/40">Personnel</div>
                      <div className="text-sm font-semibold">{study.personnel}</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8 py-6 border-y border-white/[0.04]">
                  {study.stats.map((s) => (
                    <StatBlock key={s.label} value={s.value} label={s.label} />
                  ))}
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {study.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-white/60">
                      <svg className="w-4 h-4 mt-0.5 text-amber-400/60 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Aggregate Performance"
              title="Cross-Programme Metrics"
              subtitle="Combined performance outcomes across all enterprise deployments."
            />
          </ScrollReveal>
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={0}><StatBlock value="96.4%" label="Average Compliance Rate" /></ScrollReveal>
            <ScrollReveal delay={0.1}><StatBlock value="63%" label="CAR Reduction" /></ScrollReveal>
            <ScrollReveal delay={0.2}><StatBlock value="3.4d" label="Avg CAR Closure" /></ScrollReveal>
            <ScrollReveal delay={0.3}><StatBlock value="0" label="Regulatory Actions" /></ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection
        title="Discuss your deployment"
        subtitle="Every infrastructure programme is different. Let us show you what WZI looks like in your operational context."
      />
    </>
  );
}

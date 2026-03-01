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
    "Enterprise deployment evidence from a live UK motorway programme demonstrating measurable governance outcomes across all WZI modules.",
};

const stats = [
  { value: "63%", label: "CAR Close-out Reduction" },
  { value: "96.4%", label: "Average Compliance Rate" },
  { value: "100%", label: "Mobilisation Compliance" },
  { value: "0", label: "Regulatory Actions" },
];

const modules = [
  {
    name: "WZI Recruit",
    description:
      "Competency-verified onboarding for all operatives. Right-to-work validation, NHSS sector scheme qualification checks, and automated mobilisation clearance before any site deployment.",
    outcomes: [
      "100% mobilisation compliance achieved",
      "Automated right-to-work and qualification expiry alerts",
      "Zero non-compliant deployments across programme duration",
    ],
  },
  {
    name: "WZI Talent",
    description:
      "Continuous workforce competency monitoring across 120-180 personnel. Training record governance, CPD tracking, and competency gap analysis with AI-driven recommendations.",
    outcomes: [
      "Real-time competency dashboards for project leadership",
      "Automated training renewal scheduling and escalation",
      "Competency-gated role assignment preventing unqualified deployments",
    ],
  },
  {
    name: "WZI Fleet",
    description:
      "Full fleet lifecycle governance including vehicle service scheduling, MOT and insurance tracking, defect reporting with photographic evidence, and operator-asset assignment controls.",
    outcomes: [
      "Proactive service scheduling eliminating overdue vehicles",
      "Digital defect reporting with severity classification and resolution tracking",
      "Competency-gated operator assignment for specialist vehicle classes",
    ],
  },
  {
    name: "WZI Comply",
    description:
      "Audit management and corrective action governance across 15+ active work zones. Daily TTM compliance tracking, CDM 2015 dutyholder alignment, and formal non-conformance resolution.",
    outcomes: [
      "63% reduction in corrective action close-out time",
      "400+ annual audits managed through structured workflows",
      "Full CDM 2015 dutyholder framework alignment",
    ],
  },
  {
    name: "WZI Pulse",
    description:
      "Workforce wellbeing monitoring with anonymous psychosocial risk scoring. Early intervention triggers and welfare trend analysis integrated with operational risk dashboards.",
    outcomes: [
      "Anonymous wellbeing scoring driving proactive welfare support",
      "Psychosocial risk trends correlated with operational performance",
      "Early intervention protocols reducing welfare-related incidents",
    ],
  },
  {
    name: "WZI Fatigue",
    description:
      "Shift-pattern risk analysis and fatigue governance for high-risk highway operations. Rest period compliance, driving hour monitoring, and fatigue risk scoring integrated with deployment controls.",
    outcomes: [
      "Shift-pattern risk analysis preventing fatigue-related deployments",
      "Automated rest period compliance monitoring",
      "Fatigue risk scoring integrated with mobilisation clearance",
    ],
  },
  {
    name: "WZI Risk",
    description:
      "AI-staged risk escalation with cross-module correlation intelligence. Executive risk dashboards providing real-time operational visibility for senior project leadership.",
    outcomes: [
      "AI-staged risk escalation reducing executive intervention by 40%",
      "Cross-module risk correlation identifying systemic governance gaps",
      "Real-time executive dashboards replacing manual reporting",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <HeroSection
        badge="Evidence"
        title="UK Motorway"
        titleAccent="Deployment"
        subtitle="Performance metrics from a live high-speed motorway upgrade programme. Every number is drawn from operational data, not projections. All seven WZI modules deployed across the full project lifecycle."
        primaryCta={{ label: "Discuss Your Deployment", href: "/enterprise-briefing/" }}
        height="large"
      />

      {/* Overview Stats */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Programme Metrics"
              title="Aggregate Governance Outcomes"
              subtitle="Combined performance outcomes across the full motorway upgrade programme with all WZI modules active."
            />
          </ScrollReveal>
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <StatBlock value={s.value} label={s.label} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Module-by-Module Deployment */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Full Platform Deployment"
              title="Module-by-Module Evidence"
              subtitle="How each WZI module contributed to governance outcomes on this live motorway programme."
            />
          </ScrollReveal>
          <div className="mt-16 space-y-6">
            {modules.map((mod, i) => (
              <ScrollReveal key={mod.name} delay={i * 0.08}>
                <GlassCard padding="lg" hover={false}>
                  <h3 className="text-xl font-bold mb-3">
                    <span className="gradient-text-amber">{mod.name}</span>
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-5">
                    {mod.description}
                  </p>
                  <ul className="space-y-2">
                    {mod.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2 text-sm text-white/50">
                        <svg className="w-4 h-4 mt-0.5 text-amber-400/60 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </ScrollReveal>
            ))}
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

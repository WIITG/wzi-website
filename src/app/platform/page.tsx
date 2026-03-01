import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ModuleCard } from "@/components/ui/ModuleCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { modules, ModuleKey } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "The WorkZone Intelligence platform: seven integrated modules delivering closed-loop infrastructure governance.",
};

const coreModules: ModuleKey[] = ["recruit", "talent", "fleet", "comply"];
const premiumModules: ModuleKey[] = ["pulse", "fatigue", "risk"];

const comparisonRows = [
  {
    category: "System Design",
    wzi: "Built for regulated infrastructure governance from day one",
    generic: "General-purpose SaaS adapted for compliance",
  },
  {
    category: "Compliance Model",
    wzi: "Closed-loop: Recruit → Talent → Fleet → Comply",
    generic: "Disconnected modules bolted together",
  },
  {
    category: "Risk Escalation",
    wzi: "AI-staged with automatic executive notification",
    generic: "Manual flagging dependent on individual users",
  },
  {
    category: "Executive Visibility",
    wzi: "Real-time dashboards with cross-module correlation",
    generic: "Periodic reports from isolated data sources",
  },
  {
    category: "Regulatory Alignment",
    wzi: "ISO 27001, ISO 45001, CDM 2015, NHSS pre-mapped",
    generic: "Generic compliance checklists, manual mapping",
  },
];

const outcomes = [
  {
    title: "Reduced Regulatory Exposure",
    description:
      "Automated compliance tracking and escalation eliminates gaps that lead to regulatory action.",
  },
  {
    title: "Faster Workforce Mobilisation",
    description:
      "Competency-gated deployment ensures only qualified personnel reach site, reducing onboarding delays.",
  },
  {
    title: "Lower Fleet Downtime",
    description:
      "Proactive service scheduling and defect resolution keeps operational assets compliant and available.",
  },
  {
    title: "Stronger Audit Defensibility",
    description:
      "Complete digital audit trail from recruitment through corrective action closure.",
  },
  {
    title: "Improved Operational Oversight",
    description:
      "Executive dashboards deliver real-time visibility across every governance dimension.",
  },
  {
    title: "Enhanced Tender Credibility",
    description:
      "Demonstrable governance capability strengthens competitive positioning in procurement.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <HeroSection
        badge="The Platform"
        title="Integrated Governance"
        titleAccent="Ecosystem"
        subtitle="Seven purpose-built modules sharing a unified data layer. Engineered for high-risk infrastructure operations where disconnected systems are not an option."
        primaryCta={{
          label: "Request Platform Demo",
          href: "/enterprise-briefing/",
        }}
        height="large"
      />

      {/* Core Modules */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Core Modules"
              title="Governance Foundation"
              subtitle="The four pillars of workforce and operational compliance. Each module feeds data into the next, creating an unbroken governance chain."
            />
          </ScrollReveal>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreModules.map((key, i) => (
              <ScrollReveal key={key} delay={i * 0.1}>
                <ModuleCard moduleKey={key} className="h-full" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Modules */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Premium Intelligence"
              title="Advanced Capabilities"
              subtitle="Psychosocial risk monitoring, fatigue governance, and AI-powered risk intelligence for organisations requiring deeper operational insight."
            />
          </ScrollReveal>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {premiumModules.map((key, i) => (
              <ScrollReveal key={key} delay={i * 0.1}>
                <ModuleCard moduleKey={key} className="h-full" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Why WZI"
              title="Purpose-Built vs Generic"
              subtitle="Infrastructure governance demands purpose-built architecture. Generic SaaS platforms cannot deliver closed-loop compliance."
            />
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    <th className="py-4 px-4 text-left text-xs uppercase tracking-wider text-white/40 font-medium">
                      Category
                    </th>
                    <th className="py-4 px-4 text-left text-xs uppercase tracking-wider text-amber-400/80 font-medium">
                      WZI
                    </th>
                    <th className="py-4 px-4 text-left text-xs uppercase tracking-wider text-white/30 font-medium">
                      Generic SaaS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.category}
                      className="border-b border-white/[0.04]"
                    >
                      <td className="py-4 px-4 text-sm font-medium text-white/70">
                        {row.category}
                      </td>
                      <td className="py-4 px-4 text-sm text-white/60">
                        {row.wzi}
                      </td>
                      <td className="py-4 px-4 text-sm text-white/30">
                        {row.generic}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Governance Outcomes */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Outcomes"
              title="Governance Impact"
              subtitle="Measurable improvements across every governance dimension."
            />
          </ScrollReveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
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
        title="See WZI in your environment"
        subtitle="Request an enterprise briefing tailored to your operational context."
      />
    </>
  );
}

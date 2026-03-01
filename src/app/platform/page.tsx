import type { Metadata } from "next";
import Image from "next/image";
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

const moduleScreenshots: Partial<Record<ModuleKey, string>> = {
  recruit: "/images/module-recruit.png",
  talent: "/images/module-talent.png",
  fleet: "/images/module-fleet.png",
  comply: "/images/module-comply.png",
  pulse: "/images/module-pulse.png",
  fatigue: "/images/module-fatigue.png",
  risk: "/images/module-risk.png",
};

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

          {/* Core Module Screenshots */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreModules.map((key, i) => (
              <ScrollReveal key={`ss-${key}`} delay={i * 0.1}>
                <div className="rounded-xl overflow-hidden border border-white/[0.08]">
                  <Image
                    src={moduleScreenshots[key]!}
                    alt={`${modules[key].name} interface`}
                    width={800}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
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

          {/* Premium Module Screenshots */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {premiumModules.map((key, i) => (
              <ScrollReveal key={`ss-${key}`} delay={i * 0.1}>
                <div className="rounded-xl overflow-hidden border border-white/[0.08]">
                  <Image
                    src={moduleScreenshots[key]!}
                    alt={`${modules[key].name} interface`}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Permit Vault & AI Compliance */}
      <section id="comply" className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Expanding Intelligence"
              title="Permit Vault & AI Compliance"
              subtitle="Extending the WZI platform with secure permit governance and AI-powered regulatory intelligence."
            />
          </ScrollReveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <GlassCard padding="lg" className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-purple-600/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Secure Permit Vault</h3>
                    <span className="text-[10px] uppercase tracking-wider text-green-400/60 font-medium">Live</span>
                  </div>
                </div>
                <p className="text-sm text-white/50 leading-relaxed mb-4">
                  Centralised, version-controlled repository for all permit documentation with role-based access controls. End-to-end permit lifecycle management from application through approval, renewal, and closure with full audit trail.
                </p>
                <ul className="space-y-2">
                  {["Permit lifecycle management", "Expiry & renewal alerts", "Version-controlled document vault", "Role-based access controls"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/40">
                      <svg className="w-3.5 h-3.5 text-amber-400/60 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div id="risk" className="gradient-border rounded-2xl h-full">
                <div className="p-6 lg:p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">AI Compliance Module</h3>
                      <span className="text-[10px] uppercase tracking-wider text-purple-400/60 font-medium">Coming Soon</span>
                    </div>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">
                    AI-powered regulatory intelligence that continuously monitors compliance obligations, identifies governance gaps, and generates recommendations aligned to your specific regulatory landscape.
                  </p>
                  <ul className="space-y-2">
                    {["AI regulatory gap analysis", "Automated compliance recommendations", "Cross-framework obligation mapping", "Predictive non-conformance detection"].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/40">
                        <svg className="w-3.5 h-3.5 text-purple-400/60 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
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

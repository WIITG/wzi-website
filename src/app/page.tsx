import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatBlock } from "@/components/ui/StatBlock";
import { ModuleCard } from "@/components/ui/ModuleCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { stats, ModuleKey } from "@/lib/constants";

const moduleKeys: ModuleKey[] = [
  "recruit",
  "talent",
  "fleet",
  "comply",
  "pulse",
  "fatigue",
  "risk",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        badge="Infrastructure Governance Platform"
        title="AI Infrastructure"
        titleAccent="Governance"
        subtitle="Unified workforce, fleet, and compliance intelligence for high-risk infrastructure operations. One platform. Complete oversight. Zero blind spots."
        primaryCta={{
          label: "Request Enterprise Briefing",
          href: "/enterprise-briefing/",
        }}
        secondaryCta={{ label: "Explore Platform", href: "/platform/" }}
      />

      {/* Trust Bar */}
      <TrustBar />

      {/* Problem Statement */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeading
                badge="The Problem"
                title="Disconnected Systems Create Hidden Risk"
                subtitle="Infrastructure organisations manage workforce, fleet, and compliance across disconnected systems. This creates hidden risk, delayed corrective action, and limited executive visibility across high-stakes operations."
              />
            </div>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Fragmented Compliance",
                desc: "Workforce qualifications, fleet certifications, and regulatory obligations tracked in isolated spreadsheets and legacy systems.",
              },
              {
                title: "Delayed Risk Escalation",
                desc: "Corrective actions stall in inboxes. Non-conformances go unresolved. Audit findings lack traceability to root cause.",
              },
              {
                title: "Limited Executive Visibility",
                desc: "Senior leadership lacks real-time oversight of operational risk, compliance posture, and governance performance.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <GlassCard className="h-full">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-4 h-4 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {item.desc}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview - Module Grid */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="The Platform"
              title="Seven Integrated Modules"
              subtitle="Each module operates independently while sharing a unified data layer. Together, they form a closed-loop governance system that no point solution can replicate."
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {moduleKeys.map((key, i) => (
              <ScrollReveal key={key} delay={i * 0.08}>
                <ModuleCard moduleKey={key} className="h-full" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Category Definition Statement */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
              <span className="text-white/90">&ldquo;Most software digitises </span>
              <span className="text-white/40">process</span>
              <span className="text-white/90">.</span>
              <br />
              <span className="text-white/90">WZI digitises </span>
              <span className="gradient-text-amber">accountability</span>
              <span className="text-white/90">.&rdquo;</span>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Proven Impact"
              title="Measurable Governance Outcomes"
              subtitle="Performance metrics from live enterprise deployments across high-risk infrastructure programmes."
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <StatBlock value={stat.value} label={stat.label} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closed-Loop Governance */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Architecture"
              title="Closed-Loop Governance"
              subtitle="WZI creates an unbroken chain of accountability from recruitment through operational compliance."
            />
          </ScrollReveal>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
            {["Recruit", "Talent", "Fleet", "Comply"].map((step, i) => (
              <ScrollReveal key={step} delay={i * 0.15}>
                <div className="flex items-center gap-4">
                  <div className="glass-card px-6 py-4 text-center">
                    <div className="text-xs text-white/40 mb-1">
                      Phase {i + 1}
                    </div>
                    <div className="text-lg font-semibold gradient-text-amber">
                      {step}
                    </div>
                  </div>
                  {i < 3 && (
                    <svg
                      className="w-6 h-6 text-white/20 hidden sm:block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}

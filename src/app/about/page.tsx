import type { Metadata } from "next";
import Image from "next/image";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "WIITG — WorkZone Intelligence Technology Group. The company behind WZI, delivering AI-powered infrastructure governance for high-risk operations.",
};

const values = [
  {
    title: "Purpose-Built",
    description:
      "Every feature is engineered for regulated infrastructure environments. We do not adapt generic software — we build governance tools from the ground up.",
  },
  {
    title: "Closed-Loop Accountability",
    description:
      "Our architecture ensures no compliance gap goes undetected. From recruitment to corrective action, every process feeds into a unified governance chain.",
  },
  {
    title: "Operational Reality",
    description:
      "Built by people who understand infrastructure operations. Our platform reflects the real demands of field teams, compliance officers, and executive leadership.",
  },
  {
    title: "Regulatory Alignment",
    description:
      "Pre-mapped to ISO 27001, ISO 45001, CDM 2015, and sector-specific standards. Compliance is embedded, not bolted on.",
  },
];

const timeline = [
  {
    year: "Foundation",
    title: "WIITG Established",
    description:
      "WorkZone Intelligence Technology Group founded to address the critical gap in infrastructure governance technology.",
  },
  {
    year: "Development",
    title: "WZI Platform Built",
    description:
      "Seven integrated modules developed from the ground up for workforce, fleet, and compliance governance.",
  },
  {
    year: "Deployment",
    title: "Enterprise Rollout",
    description:
      "Live deployment across UK motorway and infrastructure programmes, delivering measurable compliance improvements.",
  },
  {
    year: "Expansion",
    title: "Growing Capability",
    description:
      "Permit Vault launched, AI Compliance module in development, expanding into new regulated sectors.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        badge="About Us"
        title="WorkZone Intelligence"
        titleAccent="Technology Group"
        subtitle="The company behind WZI. We build purpose-designed governance technology for organisations operating in high-risk, regulated infrastructure environments."
        primaryCta={{ label: "Request Briefing", href: "/enterprise-briefing/" }}
        height="large"
        backgroundImage="/images/backgrounds/hero-bg-2.png"
      />

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeading
              badge="Our Mission"
              title="Governance Without Blind Spots"
              subtitle="Infrastructure organisations manage workforce, fleet, and compliance across disconnected systems. WIITG exists to close that gap — delivering unified governance intelligence that protects operations, people, and regulatory standing."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Our Brands */}
      <section id="brands" className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Our Brands"
              title="Two Brands, One Mission"
              subtitle="WIITG is the technology group. WZI is the platform. Together, they deliver end-to-end infrastructure governance."
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <GlassCard padding="lg" className="h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-white/[0.06] flex items-center justify-center">
                    <span className="text-xl font-bold text-white tracking-tight">WIITG</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  WorkZone Intelligence Technology Group
                </h3>
                <p className="text-xs uppercase tracking-wider text-amber-400/60 font-medium mb-4">
                  The Company
                </p>
                <p className="text-sm text-white/50 leading-relaxed mb-4">
                  WIITG is the parent technology group responsible for research, development, and strategic direction. We bring together infrastructure governance expertise with modern technology to solve real-world operational challenges.
                </p>
                <ul className="space-y-2">
                  {["Technology research & development", "Strategic advisory & consultancy", "Enterprise deployment & support", "Regulatory framework expertise"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/40">
                      <svg className="w-3.5 h-3.5 text-white/30 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="gradient-border rounded-2xl h-full">
                <div className="p-6 lg:p-8 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src="/images/logos/wzi-icon.png"
                      alt="WZI"
                      width={40}
                      height={54}
                      className="flex-shrink-0"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    WorkZone Intelligence
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-amber-400/60 font-medium mb-4">
                    The Platform
                  </p>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">
                    WZI is the AI-powered infrastructure governance platform. Seven integrated modules sharing a unified data layer, engineered for high-risk operations where disconnected systems create unacceptable risk.
                  </p>
                  <ul className="space-y-2">
                    {["WZI Recruit — Workforce mobilisation", "WZI Talent — Competency assurance", "WZI Fleet — Asset compliance", "WZI Comply — Regulatory command", "WZI Pulse — Psychosocial risk", "WZI Fatigue — Fatigue governance", "WZI Risk — AI risk staging"].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/40">
                        <svg className="w-3.5 h-3.5 text-amber-400/60 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Values */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Principles"
              title="What Drives Us"
              subtitle="The principles that guide every product decision, every deployment, and every client engagement."
            />
          </ScrollReveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((item, i) => (
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

      {/* Journey */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Journey"
              title="Our Path"
              subtitle="From identifying the governance gap to delivering enterprise-grade solutions."
            />
          </ScrollReveal>
          <div className="mt-16 space-y-8">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24">
                    <span className="text-sm font-semibold gradient-text-amber">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1 pb-8 border-l border-white/[0.08] pl-6">
                    <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Work with us"
        subtitle="Request an enterprise briefing to see how WIITG and the WZI platform can transform your governance operations."
      />
    </>
  );
}

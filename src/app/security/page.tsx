import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Enterprise-grade security architecture: ISO 27001, data sovereignty, encryption, zero-trust access controls, and incident response.",
};

const securityDomains = [
  {
    title: "Organisational Controls",
    count: "37",
    description: "Information security policies, roles, responsibilities, threat intelligence, and supply chain security.",
  },
  {
    title: "People Controls",
    count: "8",
    description: "Screening, terms of employment, security awareness, disciplinary processes, and post-employment obligations.",
  },
  {
    title: "Physical Controls",
    count: "14",
    description: "Secure areas, equipment protection, clean desk policies, and physical media management.",
  },
  {
    title: "Technological Controls",
    count: "34",
    description: "Access rights, cryptography, secure development, vulnerability management, and logging/monitoring.",
  },
];

const securityFeatures = [
  {
    title: "TLS 1.3 In-Transit Encryption",
    description: "All data transmitted between clients and WZI infrastructure is encrypted using TLS 1.3.",
  },
  {
    title: "AES-256 At-Rest Encryption",
    description: "All stored data is encrypted using AES-256 with managed encryption keys.",
  },
  {
    title: "Role-Based Access Control",
    description: "Granular RBAC with principle of least privilege across all modules and data access points.",
  },
  {
    title: "Complete Audit Logging",
    description: "Every data access, modification, and administrative action is logged with full attribution.",
  },
  {
    title: "Zero-Trust Architecture",
    description: "No implicit trust. Every request is authenticated, authorised, and encrypted regardless of origin.",
  },
  {
    title: "Data Sovereignty Controls",
    description: "Data residency controls ensuring information remains within specified jurisdictional boundaries.",
  },
];

const incidentPhases = [
  { phase: "Detection", desc: "Automated monitoring and anomaly detection across all system layers." },
  { phase: "Classification", desc: "Severity assessment and impact analysis using predefined classification criteria." },
  { phase: "Containment", desc: "Immediate isolation of affected systems to prevent lateral movement." },
  { phase: "Recovery", desc: "Systematic restoration of services with verified integrity checks." },
  { phase: "Reporting", desc: "Regulatory notification, root cause analysis, and lessons learned documentation." },
];

export default function SecurityPage() {
  return (
    <>
      <HeroSection
        badge="Security"
        title="Enterprise-Grade"
        titleAccent="Security Architecture"
        subtitle="93 controls across 4 domains. ISO 27001 aligned. Built for organisations where data protection is a regulatory obligation, not a feature checkbox."
        primaryCta={{ label: "Request Security Overview", href: "/enterprise-briefing/" }}
        height="large"
        backgroundImage="/images/backgrounds/hero-bg-2.png"
      />

      {/* ISO 27001 Domains */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="ISO 27001 Annex A"
              title="93 Controls, 4 Domains"
              subtitle="Comprehensive information security management system aligned to the latest ISO 27001:2022 standard."
            />
          </ScrollReveal>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {securityDomains.map((domain, i) => (
              <ScrollReveal key={domain.title} delay={i * 0.1}>
                <GlassCard className="h-full" padding="lg">
                  <div className="text-3xl font-bold gradient-text-amber mb-2">{domain.count}</div>
                  <h3 className="text-base font-semibold mb-2">{domain.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{domain.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Architecture"
              title="Defence in Depth"
              subtitle="Multiple layers of security controls protecting data at every stage of its lifecycle."
            />
          </ScrollReveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {securityFeatures.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.08}>
                <GlassCard className="h-full">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{f.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Incident Response"
              title="Structured Response Lifecycle"
              subtitle="Documented incident response procedures aligned to ISO 27001 requirements."
            />
          </ScrollReveal>
          <div className="mt-16 space-y-4">
            {incidentPhases.map((item, i) => (
              <ScrollReveal key={item.phase} delay={i * 0.1}>
                <div className="flex items-start gap-6 glass-card p-5">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-amber-400">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">{item.phase}</h3>
                    <p className="text-sm text-white/50">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Download our security overview"
        subtitle="Request a detailed security briefing including our ISO 27001 compliance architecture."
        ctaLabel="Request Security Briefing"
      />
    </>
  );
}

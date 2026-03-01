import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Consultancy",
  description:
    "Advisory services, compliance audits, and governance implementation support for infrastructure organisations.",
};

const services = [
  {
    title: "Compliance Audits",
    description:
      "Comprehensive governance assessments identifying compliance gaps, risk exposure, and improvement opportunities across workforce, fleet, and operational systems.",
    features: [
      "Gap analysis against ISO 45001, ISO 9001, CDM 2015",
      "Workforce competency compliance review",
      "Fleet and asset governance assessment",
      "Corrective action effectiveness audit",
    ],
  },
  {
    title: "Governance Implementation",
    description:
      "End-to-end implementation support from requirements definition through operational deployment and user adoption.",
    features: [
      "Requirements gathering and scope definition",
      "Workflow design and configuration",
      "Data migration and integration planning",
      "User training and change management",
    ],
  },
  {
    title: "Strategic Advisory",
    description:
      "Senior governance advisory for organisations seeking to strengthen their compliance posture and tender credibility.",
    features: [
      "Governance strategy development",
      "Regulatory landscape assessment",
      "Procurement and tender advisory",
      "Executive governance reporting design",
    ],
  },
];

const phases = [
  { title: "Assessment", desc: "Current state analysis, stakeholder interviews, and governance maturity scoring.", icon: "1" },
  { title: "Design", desc: "Target operating model design, workflow mapping, and implementation roadmap.", icon: "2" },
  { title: "Implementation", desc: "Phased deployment with parallel running, data migration, and user training.", icon: "3" },
  { title: "Ongoing Support", desc: "Continuous improvement, quarterly governance reviews, and feature adoption.", icon: "4" },
];

const frameworks = [
  "ISO 9001:2015",
  "ISO 14001:2015",
  "ISO 45001:2018",
  "ISO 27001:2022",
  "CDM 2015",
  "NHSS Sector Schemes",
];

export default function ConsultancyPage() {
  return (
    <>
      <HeroSection
        badge="Advisory"
        title="Consultancy"
        titleAccent="& Advisory"
        subtitle="Expert governance advisory for infrastructure organisations. From compliance audits to full implementation support, our team bridges the gap between regulatory requirements and operational reality."
        primaryCta={{ label: "Speak With Our Team", href: "/enterprise-briefing/" }}
        height="large"
      />

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Services"
              title="Advisory Offerings"
              subtitle="Specialist governance services tailored to your organisational maturity and regulatory obligations."
            />
          </ScrollReveal>
          <div className="mt-16 space-y-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <GlassCard padding="lg" hover={false}>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-white/50">
                        <svg className="w-4 h-4 mt-0.5 text-amber-400/60 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Process"
              title="Engagement Model"
              subtitle="A structured approach to governance implementation that minimises operational disruption."
            />
          </ScrollReveal>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.title} delay={i * 0.1}>
                <GlassCard className="h-full">
                  <div className="text-2xl font-bold gradient-text-amber mb-2">{phase.icon}</div>
                  <h3 className="text-base font-semibold mb-2">{phase.title}</h3>
                  <p className="text-sm text-white/50">{phase.desc}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              badge="Expertise"
              title="Compliance Framework Expertise"
              subtitle="Our advisory team has deep expertise across the regulatory frameworks that govern infrastructure operations."
            />
          </ScrollReveal>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {frameworks.map((fw, i) => (
              <ScrollReveal key={fw} delay={i * 0.05}>
                <span className="inline-block px-4 py-2 text-sm font-medium text-white/50 border border-white/[0.08] rounded-lg bg-white/[0.02] hover:bg-white/[0.04] hover:text-white/70 transition-colors">
                  {fw}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Speak with our governance team"
        subtitle="Discuss your compliance challenges with experienced infrastructure governance advisors."
        ctaLabel="Book Advisory Call"
      />
    </>
  );
}

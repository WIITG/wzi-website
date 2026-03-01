"use client";

import { useState } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { certifications } from "@/lib/constants";

export default function EnterpriseBriefingPage() {
  const [submitted, setSubmitted] = useState(false);

  const expectations = [
    {
      title: "Executive Overview",
      desc: "Strategic positioning of WZI within your operational context.",
    },
    {
      title: "Platform Demonstration",
      desc: "Live walkthrough of modules relevant to your governance requirements.",
    },
    {
      title: "Deployment Discussion",
      desc: "Phased implementation roadmap tailored to your infrastructure.",
    },
    {
      title: "Security Review",
      desc: "ISO 27001 compliance architecture and data sovereignty controls.",
    },
  ];

  return (
    <>
      <HeroSection
        badge="Get Started"
        title="Request an Enterprise"
        titleAccent="Briefing"
        subtitle="Speak directly with our governance team. We will assess your operational requirements and demonstrate how WZI addresses your specific compliance challenges."
        height="medium"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollReveal>
              <GlassCard padding="lg" hover={false}>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-8 h-8 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Briefing Request Received
                    </h3>
                    <p className="text-white/50">
                      Our governance team will be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-5"
                  >
                    <h3 className="text-lg font-semibold mb-6">
                      Enterprise Briefing Request
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-white/40 mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-amber-500/50 transition-colors"
                          placeholder="Jane Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/40 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-amber-500/50 transition-colors"
                          placeholder="jane@organisation.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-white/40 mb-1.5">
                          Organisation
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-amber-500/50 transition-colors"
                          placeholder="Company Ltd"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/40 mb-1.5">
                          Role
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-amber-500/50 transition-colors"
                          placeholder="Operations Director"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-1.5">
                        Sector
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-amber-500/50 transition-colors">
                        <option value="" className="bg-[#0a0a0f]">
                          Select your sector
                        </option>
                        <option value="highways" className="bg-[#0a0a0f]">
                          Highways
                        </option>
                        <option value="rail" className="bg-[#0a0a0f]">
                          Rail
                        </option>
                        <option value="utilities" className="bg-[#0a0a0f]">
                          Utilities
                        </option>
                        <option value="government" className="bg-[#0a0a0f]">
                          Government
                        </option>
                        <option value="aviation" className="bg-[#0a0a0f]">
                          Aviation
                        </option>
                        <option value="other" className="bg-[#0a0a0f]">
                          Other
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-1.5">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                        placeholder="Tell us about your governance challenges..."
                      />
                    </div>
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      Submit Briefing Request
                    </Button>
                  </form>
                )}
              </GlassCard>
            </ScrollReveal>

            {/* What to expect */}
            <div>
              <ScrollReveal>
                <h3 className="text-lg font-semibold mb-6">
                  What to Expect
                </h3>
              </ScrollReveal>
              <div className="space-y-4">
                {expectations.map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 0.1}>
                    <GlassCard>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-sm font-bold text-amber-400">
                            {i + 1}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-white/50">{item.desc}</p>
                        </div>
                      </div>
                    </GlassCard>
                  </ScrollReveal>
                ))}
              </div>

              {/* Trust signals */}
              <ScrollReveal delay={0.4}>
                <div className="mt-8 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <p className="text-xs text-white/40 mb-3">
                    Your data is protected under our ISO 27001 compliant ISMS
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {certifications.map((cert) => (
                      <span
                        key={cert}
                        className="text-[10px] px-2 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-white/30"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

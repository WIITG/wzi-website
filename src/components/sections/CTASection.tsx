import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function CTASection({
  title = "Ready for infrastructure-grade governance?",
  subtitle = "Request an enterprise briefing to see WZI in your operational environment.",
  ctaLabel = "Request Enterprise Briefing",
  ctaHref = "/enterprise-briefing/",
}: CTASectionProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[300px] bg-amber-500/[0.05] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-lg text-white/50 mb-8">{subtitle}</p>
          <Button href={ctaHref} variant="primary" size="lg">
            {ctaLabel}
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}

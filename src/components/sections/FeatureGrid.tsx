import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function FeatureGrid({ features, columns = 3, className = "" }: FeatureGridProps) {
  const colClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid grid-cols-1 ${colClass[columns]} gap-4 ${className}`}>
      {features.map((feature, i) => (
        <ScrollReveal key={feature.title} delay={i * 0.1}>
          <GlassCard className="h-full">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/10 to-purple-600/10 flex items-center justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-amber-500/60" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">
              {feature.description}
            </p>
          </GlassCard>
        </ScrollReveal>
      ))}
    </div>
  );
}

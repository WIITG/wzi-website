import { certifications } from "@/lib/constants";

export function TrustBar() {
  return (
    <section className="py-12 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-white/30 mb-6">
          Aligned to industry standards
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {certifications.map((cert) => (
            <span
              key={cert}
              className="text-sm font-medium text-white/25 hover:text-white/40 transition-colors"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

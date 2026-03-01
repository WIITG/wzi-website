"use client";

import { modules, ModuleKey } from "@/lib/constants";

interface ModuleCardProps {
  moduleKey: ModuleKey;
  className?: string;
}

export function ModuleCard({ moduleKey, className = "" }: ModuleCardProps) {
  const mod = modules[moduleKey];

  return (
    <div
      className={`glass-card p-6 group relative overflow-hidden ${className}`}
    >
      {/* Gradient accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
        style={{
          background: `linear-gradient(90deg, ${mod.gradient.from}, ${mod.gradient.to})`,
        }}
      />

      {/* Module icon placeholder */}
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
        style={{
          background: `linear-gradient(135deg, ${mod.gradient.from}20, ${mod.gradient.to}20)`,
        }}
      >
        <div
          className="w-5 h-5 rounded-full"
          style={{
            background: `linear-gradient(135deg, ${mod.gradient.from}, ${mod.gradient.to})`,
          }}
        />
      </div>

      {/* Name with gradient */}
      <h3 className="text-lg font-semibold mb-1">
        <span
          style={{
            background: `linear-gradient(135deg, ${mod.gradient.from}, ${mod.gradient.to})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {mod.name}
        </span>
      </h3>

      <p className="text-xs text-white/40 mb-3">{mod.tagline}</p>

      <p className="text-sm text-white/60 mb-4 leading-relaxed">
        {mod.description}
      </p>

      {/* Features */}
      <ul className="space-y-2">
        {mod.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-white/50">
            <svg
              className="w-4 h-4 mt-0.5 flex-shrink-0"
              style={{ color: mod.gradient.from }}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      {/* Live indicator */}
      <div className="mt-4 pt-4 border-t border-white/[0.04] flex items-center gap-2">
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ backgroundColor: mod.gradient.from }}
        />
        <span className="text-[10px] uppercase tracking-wider text-white/30">
          Live Module
        </span>
      </div>
    </div>
  );
}

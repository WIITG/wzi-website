import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddings = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function GlassCard({
  children,
  className = "",
  gradient = false,
  hover = true,
  padding = "md",
}: GlassCardProps) {
  if (gradient) {
    return (
      <div className={`gradient-border ${className}`}>
        <div
          className={`bg-[#0a0a0f] ${paddings[padding]} ${
            hover ? "hover:bg-white/[0.02] transition-colors" : ""
          }`}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`glass-card ${paddings[padding]} ${
        hover ? "" : "pointer-events-none"
      } ${className}`}
    >
      {children}
    </div>
  );
}

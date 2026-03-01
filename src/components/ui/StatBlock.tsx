interface StatBlockProps {
  value: string;
  label: string;
  className?: string;
}

export function StatBlock({ value, label, className = "" }: StatBlockProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-4xl sm:text-5xl font-bold gradient-text-amber mb-2">
        {value}
      </div>
      <div className="text-sm text-white/50">{label}</div>
    </div>
  );
}

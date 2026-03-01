export const siteConfig = {
  name: "WorkZone Intelligence",
  shortName: "WZI",
  tagline: "AI Infrastructure Governance",
  description:
    "Unified workforce, fleet, and compliance intelligence for high-risk infrastructure operations.",
  url: "https://workzoneintellegence.com",
  email: "briefing@workzoneintellegence.com",
};

export const modules = {
  recruit: {
    name: "WZI Recruit",
    tagline: "Workforce Mobilisation Control",
    description:
      "Competency-verified workforce onboarding with automated right-to-work, qualification validation, and site-specific induction governance.",
    gradient: { from: "#f97316", to: "#ec4899" },
    features: [
      "Right-to-work verification",
      "Qualification & certification tracking",
      "Site-specific induction management",
      "Competency-gated deployment",
    ],
  },
  talent: {
    name: "WZI Talent",
    tagline: "Competency Assurance Governance",
    description:
      "Continuous competency lifecycle management with expiry tracking, renewal workflows, and skills-gap intelligence.",
    gradient: { from: "#06b6d4", to: "#3b82f6" },
    features: [
      "Certification expiry monitoring",
      "Skills-gap analysis",
      "Renewal workflow automation",
      "Competency matrix reporting",
    ],
  },
  fleet: {
    name: "WZI Fleet",
    tagline: "Operational Asset Oversight",
    description:
      "Vehicle and plant compliance with service scheduling, defect management, and operator assignment governance.",
    gradient: { from: "#14b8a6", to: "#06b6d4" },
    features: [
      "Service schedule compliance",
      "Defect reporting & resolution",
      "Operator-asset assignment",
      "MOT & insurance tracking",
    ],
  },
  comply: {
    name: "WZI Comply",
    tagline: "Regulatory & Risk Command",
    description:
      "Corrective action management with AI-staged risk escalation, audit readiness, and regulatory alignment intelligence.",
    gradient: { from: "#a855f7", to: "#ec4899" },
    features: [
      "CAR lifecycle management",
      "AI risk staging & escalation",
      "Audit trail generation",
      "Regulatory framework mapping",
    ],
  },
  pulse: {
    name: "WZI Pulse",
    tagline: "Psychosocial Risk & Wellbeing Intelligence",
    description:
      "Real-time workforce sentiment and psychosocial risk monitoring with anonymous pulse surveys and trend analysis.",
    gradient: { from: "#ec4899", to: "#a855f7" },
    features: [
      "Anonymous pulse surveys",
      "Psychosocial risk scoring",
      "Wellbeing trend analysis",
      "Early intervention alerts",
    ],
  },
  fatigue: {
    name: "WZI Fatigue",
    tagline: "Operational Fatigue & Fitness Governance",
    description:
      "Fatigue risk management with shift-pattern analysis, fitness-for-duty governance, and driving hour compliance.",
    gradient: { from: "#f59e0b", to: "#d97706" },
    features: [
      "Shift-pattern risk analysis",
      "Fitness-for-duty checks",
      "Driving hours compliance",
      "Fatigue incident correlation",
    ],
  },
  risk: {
    name: "WZI Risk",
    tagline: "AI Risk Staging & Escalation Management",
    description:
      "Enterprise risk heatmap with AI-powered escalation, cross-module risk correlation, and executive risk dashboards.",
    gradient: { from: "#ef4444", to: "#f59e0b" },
    features: [
      "AI risk staging engine",
      "Cross-module correlation",
      "Executive risk dashboards",
      "Escalation workflow automation",
    ],
  },
} as const;

export type ModuleKey = keyof typeof modules;

export const navigation = {
  main: [
    { label: "Home", href: "/" },
    { label: "Platform", href: "/platform/" },
    {
      label: "Solutions",
      href: "#",
      children: [
        { label: "Vehicle Mitigation", href: "/vehicle-mitigation/" },
        { label: "Planning & Design", href: "/planning-design/" },
        { label: "Consultancy", href: "/consultancy/" },
      ],
    },
    { label: "Industries", href: "/industries/" },
    { label: "Security", href: "/security/" },
    { label: "Case Studies", href: "/case-studies/" },
    { label: "Procurement", href: "/procurement/" },
  ],
  cta: { label: "Request Briefing", href: "/enterprise-briefing/" },
};

export const stats = [
  { value: "96.4%", label: "Average Compliance Rate" },
  { value: "63%", label: "CAR Close-out Reduction" },
  { value: "0", label: "Expired Competency Deployments" },
  { value: "3.4", label: "Day Average CAR Closure" },
];

export const certifications = [
  "ISO 27001",
  "ISO 45001",
  "ISO 9001",
  "CDM 2015",
  "G-Cloud",
  "Crown Commercial Service",
];

export const industries = [
  {
    name: "Highways",
    description:
      "Strategic Road Network compliance, National Highways standards alignment, and traffic management governance.",
    icon: "highway",
  },
  {
    name: "Rail",
    description:
      "Network Rail compliance, RISQS alignment, and rail infrastructure workforce governance.",
    icon: "rail",
  },
  {
    name: "Utilities",
    description:
      "Street works compliance, NRSWA governance, and utility infrastructure workforce management.",
    icon: "utilities",
  },
  {
    name: "Government",
    description:
      "Crown Commercial framework alignment, G-Cloud procurement, and public sector governance.",
    icon: "government",
  },
  {
    name: "Aviation",
    description:
      "Airside operations compliance, CAA standards alignment, and aviation workforce governance.",
    icon: "aviation",
  },
];

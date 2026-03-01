import Link from "next/link";
import { siteConfig, certifications } from "@/lib/constants";

const footerLinks = {
  Platform: [
    { label: "Overview", href: "/platform/" },
    { label: "WZI Recruit", href: "/platform/#recruit" },
    { label: "WZI Talent", href: "/platform/#talent" },
    { label: "WZI Fleet", href: "/platform/#fleet" },
    { label: "WZI Comply", href: "/platform/#comply" },
  ],
  Solutions: [
    { label: "Vehicle Mitigation", href: "/vehicle-mitigation/" },
    { label: "Planning & Design", href: "/planning-design/" },
    { label: "Consultancy", href: "/consultancy/" },
    { label: "Industries", href: "/industries/" },
  ],
  Enterprise: [
    { label: "Security", href: "/security/" },
    { label: "Case Studies", href: "/case-studies/" },
    { label: "Procurement", href: "/procurement/" },
    { label: "Request Briefing", href: "/enterprise-briefing/" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#060609]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-white font-semibold">
                {siteConfig.shortName}
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {certifications.slice(0, 4).map((cert) => (
                <span
                  key={cert}
                  className="text-[10px] px-2 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-white/40"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white/80 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} WorkZone Intelligence Technology
            Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-white/30 hover:text-white/50">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-white/30 hover:text-white/50">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

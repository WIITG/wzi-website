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
    { label: "Consultancy", href: "/consultancy/" },
    { label: "Industries", href: "/industries/" },
    { label: "Permit Vault", href: "/platform/#comply" },
    { label: "AI Compliance", href: "/platform/#risk" },
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
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                <circle cx="20" cy="20" r="5" fill="url(#footer-logo-grad)" />
                <circle cx="8" cy="10" r="3.5" fill="url(#footer-logo-grad)" opacity="0.85" />
                <line x1="11" y1="12" x2="16" y2="17" stroke="url(#footer-logo-grad)" strokeWidth="1.5" opacity="0.6" />
                <circle cx="32" cy="10" r="3.5" fill="url(#footer-logo-grad)" opacity="0.85" />
                <line x1="29" y1="12" x2="24" y2="17" stroke="url(#footer-logo-grad)" strokeWidth="1.5" opacity="0.6" />
                <circle cx="8" cy="30" r="3.5" fill="url(#footer-logo-grad)" opacity="0.85" />
                <line x1="11" y1="28" x2="16" y2="23" stroke="url(#footer-logo-grad)" strokeWidth="1.5" opacity="0.6" />
                <circle cx="32" cy="30" r="3.5" fill="url(#footer-logo-grad)" opacity="0.85" />
                <line x1="29" y1="28" x2="24" y2="23" stroke="url(#footer-logo-grad)" strokeWidth="1.5" opacity="0.6" />
                <circle cx="4" cy="20" r="2.5" fill="url(#footer-logo-grad)" opacity="0.7" />
                <line x1="6.5" y1="20" x2="15" y2="20" stroke="url(#footer-logo-grad)" strokeWidth="1.5" opacity="0.5" />
                <circle cx="36" cy="20" r="2.5" fill="url(#footer-logo-grad)" opacity="0.7" />
                <line x1="33.5" y1="20" x2="25" y2="20" stroke="url(#footer-logo-grad)" strokeWidth="1.5" opacity="0.5" />
              </svg>
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

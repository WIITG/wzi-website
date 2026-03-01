"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigation, siteConfig } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.08]"
            : "bg-transparent"
        }`}
      >
        {/* Infrastructure Control Strip - gradient accent line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* WZI Connected Nodes Logo */}
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <defs>
                  <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                {/* Central node */}
                <circle cx="20" cy="20" r="5" fill="url(#logo-grad)" />
                {/* Top-left node */}
                <circle cx="8" cy="10" r="3.5" fill="url(#logo-grad)" opacity="0.85" />
                <line x1="11" y1="12" x2="16" y2="17" stroke="url(#logo-grad)" strokeWidth="1.5" opacity="0.6" />
                {/* Top-right node */}
                <circle cx="32" cy="10" r="3.5" fill="url(#logo-grad)" opacity="0.85" />
                <line x1="29" y1="12" x2="24" y2="17" stroke="url(#logo-grad)" strokeWidth="1.5" opacity="0.6" />
                {/* Bottom-left node */}
                <circle cx="8" cy="30" r="3.5" fill="url(#logo-grad)" opacity="0.85" />
                <line x1="11" y1="28" x2="16" y2="23" stroke="url(#logo-grad)" strokeWidth="1.5" opacity="0.6" />
                {/* Bottom-right node */}
                <circle cx="32" cy="30" r="3.5" fill="url(#logo-grad)" opacity="0.85" />
                <line x1="29" y1="28" x2="24" y2="23" stroke="url(#logo-grad)" strokeWidth="1.5" opacity="0.6" />
                {/* Side nodes */}
                <circle cx="4" cy="20" r="2.5" fill="url(#logo-grad)" opacity="0.7" />
                <line x1="6.5" y1="20" x2="15" y2="20" stroke="url(#logo-grad)" strokeWidth="1.5" opacity="0.5" />
                <circle cx="36" cy="20" r="2.5" fill="url(#logo-grad)" opacity="0.7" />
                <line x1="33.5" y1="20" x2="25" y2="20" stroke="url(#logo-grad)" strokeWidth="1.5" opacity="0.5" />
              </svg>
              <div>
                <span className="text-white font-bold text-lg tracking-tight">
                  {siteConfig.shortName}
                </span>
                <span className="hidden sm:inline text-white/40 text-sm ml-2 font-normal">
                  Intelligence
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href={navigation.cta.href}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-black bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20"
              >
                {navigation.cta.label}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-white/70 hover:text-white"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

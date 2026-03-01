"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
              {/* WZI Logo Icon */}
              <Image
                src="/images/logos/wzi-icon.png"
                alt="WZI"
                width={32}
                height={44}
                className="flex-shrink-0"
              />
              <div className="flex items-center gap-2">
                <div>
                  <span className="text-white font-bold text-lg tracking-tight">
                    WIITG
                  </span>
                  <span className="hidden sm:block text-[10px] uppercase tracking-[0.15em] text-white/30 leading-none -mt-0.5">
                    Group
                  </span>
                </div>
                <span className="text-white/20 text-lg font-light">|</span>
                <div>
                  <span className="text-white font-bold text-lg tracking-tight gradient-text-amber">
                    WZI
                  </span>
                  <span className="hidden sm:block text-[10px] uppercase tracking-[0.15em] text-white/30 leading-none -mt-0.5">
                    Intelligence
                  </span>
                </div>
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

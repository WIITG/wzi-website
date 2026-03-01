"use client";

import Link from "next/link";
import { navigation } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const allLinks = navigation.main.flatMap((item) =>
    item.children ? item.children : [item]
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl lg:hidden"
        >
          <div className="flex items-center justify-between px-6 h-16">
            <span className="text-white font-semibold text-lg">WZI</span>
            <button
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="px-6 pt-8 space-y-1">
            {allLinks.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-3 text-xl text-white/80 hover:text-white border-b border-white/[0.05] transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-8"
            >
              <Link
                href={navigation.cta.href}
                onClick={onClose}
                className="block w-full text-center py-4 text-base font-medium text-black bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl"
              >
                {navigation.cta.label}
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

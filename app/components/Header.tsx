"use client";

import { useEffect, useState } from "react";
import { FB } from "@/app/fonts";
import { Icons } from "@/app/icons";
import { navItems } from "@/app/data";
import { DEFAULT_MSG, waLink } from "@/app/site-config";
import { LogoText } from "./LogoText";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#161618]/92 shadow-lg shadow-black/30 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <LogoText />

        <nav className={`hidden items-center gap-9 lg:flex ${FB}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="group relative text-sm font-medium uppercase tracking-wider text-slate-300 transition-colors hover:text-white">
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-[#c9a24b] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={waLink(DEFAULT_MSG)} target="_blank" rel="noopener noreferrer" className={`hidden items-center gap-2 bg-green-500 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-green-500/25 transition-all hover:-translate-y-0.5 hover:bg-green-600 sm:flex ${FB}`}>
            {Icons.whatsapp} WhatsApp
          </a>
          <button aria-label="Menu" onClick={() => setOpen((v) => !v)} className="flex h-10 w-10 items-center justify-center text-white transition hover:bg-white/10 lg:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <div className={`overflow-hidden bg-[#161618]/97 backdrop-blur-md transition-all duration-300 lg:hidden ${open ? "max-h-96 border-t border-white/10" : "max-h-0"}`}>
        <nav className={`flex flex-col px-5 py-2 ${FB}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-white/5 py-3 text-sm font-medium uppercase tracking-wider text-slate-200">
              {item.label}
            </a>
          ))}
          <a href={waLink(DEFAULT_MSG)} target="_blank" rel="noopener noreferrer" className="my-3 flex items-center justify-center gap-2 bg-green-500 py-3 text-sm font-semibold uppercase text-white">
            {Icons.whatsapp} Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

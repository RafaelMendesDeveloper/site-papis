"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { Kicker } from "./Kicker";
import { portfolio } from "@/app/data";
import { FD, FB } from "@/app/fonts";

function BeforeAfter({ item, index }: { item: (typeof portfolio)[number]; index: number }) {
  const [after, setAfter] = useState(false);
  return (
    <div className="group border border-slate-200 bg-white">
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.antes} alt={`${item.titulo} antes`} className="absolute inset-0 h-full w-full object-cover" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.depois} alt={`${item.titulo} depois`} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${after ? "opacity-100" : "opacity-0"}`} />
        <span className={`${FB} absolute left-0 top-0 bg-[#1a1a1d] px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#c9a24b]`}>
          0{index + 1} / {after ? "Depois" : "Antes"}
        </span>
        {/* cantos */}
        <span className="absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-white/70" />
        <span className="absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-white/70" />
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-slate-200 p-5">
        <h3 className={`${FD} text-lg font-semibold uppercase tracking-wide text-[#1a1a1d]`}>{item.titulo}</h3>
        <button onClick={() => setAfter((v) => !v)} className={`flex-none border border-slate-300 px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-700 transition hover:border-[#c9a24b] hover:bg-[#1a1a1d] hover:text-[#c9a24b] ${FB}`}>
          Ver {after ? "antes" : "depois"}
        </button>
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#f6f4ef] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Kicker index="03">Portfólio</Kicker>
          <h2 className={`mt-5 max-w-2xl text-4xl font-bold uppercase leading-[0.95] tracking-tight text-[#1a1a1d] sm:text-5xl ${FD}`}>
            Antes & depois<br />que falam por si
          </h2>
          <p className={`mt-4 text-slate-600 ${FB}`}>Toque em “ver depois” pra revelar a transformação.</p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, i) => (
            <Reveal key={item.titulo} delay={i * 90}>
              <BeforeAfter item={item} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

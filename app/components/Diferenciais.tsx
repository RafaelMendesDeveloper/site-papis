import { Reveal } from "./Reveal";
import { Kicker } from "./Kicker";
import { Icons } from "@/app/icons";
import { diferenciais } from "@/app/data";
import { FD, FB } from "@/app/fonts";

export function Diferenciais() {
  return (
    <section className="bg-[#f6f4ef] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <Kicker index="01">Por que a Resolve</Kicker>
            <h2 className={`mt-5 text-4xl font-bold uppercase leading-[0.95] tracking-tight text-[#1a1a1d] sm:text-5xl ${FD}`}>
              Feito com<br /><span className="text-[#b8923d]">capricho</span> e<br />responsa.
            </h2>
            <p className={`mt-5 max-w-sm text-slate-600 ${FB}`}>
              Não é só consertar — é entregar tranquilidade. Veja o que você pode
              esperar quando chama a gente.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {diferenciais.map((d, i) => (
              <Reveal key={d.title} delay={i * 70}>
                <div className="group flex items-center gap-6 py-6 transition-colors hover:bg-white">
                  <span className={`${FD} w-12 flex-none text-3xl font-bold text-slate-300 transition-colors group-hover:text-[#c9a24b]`}>
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className={`${FD} text-xl font-semibold uppercase tracking-wide text-[#1a1a1d]`}>{d.title}</h3>
                    <p className={`mt-1 text-sm text-slate-600 ${FB}`}>{d.text}</p>
                  </div>
                  <span className="hidden flex-none text-[#c9a24b] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
                    {Icons.arrow}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

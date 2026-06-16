import { Reveal } from "./Reveal";
import { Kicker } from "./Kicker";
import { Icons } from "@/app/icons";
import { servicos } from "@/app/data";
import { DEFAULT_MSG, waLink } from "@/app/site-config";
import { FD, FB } from "@/app/fonts";

export function Servicos() {
  return (
    <section id="servicos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <Kicker index="02">Nossos serviços</Kicker>
              <h2 className={`mt-5 text-4xl font-bold uppercase leading-[0.95] tracking-tight text-[#1a1a1d] sm:text-5xl ${FD}`}>
                O que a gente resolve
              </h2>
            </div>
            <a href={waLink(DEFAULT_MSG)} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#b8923d] transition hover:gap-3 ${FB}`}>
              Não achou? Pergunte {Icons.arrow}
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="group relative h-full overflow-hidden bg-white p-8">
                <span className={`${FD} pointer-events-none absolute -right-2 -top-5 select-none text-[6rem] font-bold leading-none text-slate-50`}>
                  0{i + 1}
                </span>
                <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-[#c9a24b] transition-transform duration-300 group-hover:scale-y-100" />
                <div className="relative">
                  <span className="flex h-14 w-14 items-center justify-center bg-[#1a1a1d] text-[#c9a24b] transition-colors duration-300 group-hover:bg-[#c9a24b] group-hover:text-[#1a1a1d]">
                    {s.icon}
                  </span>
                  <h3 className={`${FD} mt-5 text-xl font-semibold uppercase tracking-wide text-[#1a1a1d]`}>{s.title}</h3>
                  <p className={`mt-2 text-sm leading-relaxed text-slate-600 ${FB}`}>{s.text}</p>
                  <a href={waLink(`Olá! Tenho interesse no serviço de ${s.title}.`)} target="_blank" rel="noopener noreferrer" className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-[#b8923d] transition group-hover:gap-3 ${FB}`}>
                    Solicitar {Icons.arrow}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

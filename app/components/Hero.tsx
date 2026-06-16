import { Reveal } from "./Reveal";
import { Kicker } from "./Kicker";
import { Icons } from "@/app/icons";
import { especialidades } from "@/app/data";
import { AREA, waLink, gridBg } from "@/app/site-config";
import { FD, FB } from "@/app/fonts";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#161618] pt-32 pb-0 sm:pt-40">
      <div className="absolute inset-0" style={gridBg} />
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#c9a24b]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-32 h-80 w-80 rounded-full bg-[#3a5a78]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="max-w-3xl pb-16">
          <Reveal>
            <Kicker dark>Manutenção • Reformas • {AREA}</Kicker>
          </Reveal>

          <Reveal delay={100}>
            <h1 className={`mt-6 text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl ${FD}`}>
              Soluções completas em{" "}
              <span className="relative inline-block text-[#c9a24b]">
                manutenção
                <span className="absolute -bottom-1 left-0 h-1 w-full bg-[#c9a24b]/40" />
              </span>{" "}
              & reformas
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className={`mt-7 max-w-xl text-lg leading-relaxed text-slate-300 ${FB}`}>
              Atendimento rápido, serviço de qualidade e confiança para sua casa
              ou empresa. Resolvemos do reparo simples à reforma completa.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className={`mt-9 flex flex-col gap-3 sm:flex-row ${FB}`}>
              <a href={waLink("Olá! Gostaria de solicitar um orçamento com a Resolve.")} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 bg-green-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-green-500/20 transition-all hover:-translate-y-0.5 hover:bg-green-600">
                {Icons.whatsapp} Orçamento no WhatsApp
                <span className="transition-transform group-hover:translate-x-1">{Icons.arrow}</span>
              </a>
              <a href="#servicos" className="flex items-center justify-center gap-2 border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:border-[#c9a24b]/50 hover:bg-white/[0.07]">
                Ver serviços
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Régua de especialidades (igual à logo) */}
      <Reveal delay={400}>
        <div className="relative border-t border-white/10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
            {especialidades.map((e, i) => (
              <div key={e.label} className={`group flex items-center gap-4 px-5 py-7 transition-colors hover:bg-white/[0.03] ${i % 2 === 0 ? "border-r border-white/10" : ""} ${i < 2 ? "border-b border-white/10 lg:border-b-0" : ""} ${i === 2 ? "lg:border-r lg:border-white/10" : ""}`}>
                <span className={`${FD} text-sm font-bold text-[#c9a24b]/60`}>0{i + 1}</span>
                <span className="text-[#c9a24b] transition-transform duration-300 group-hover:scale-110">{e.icon}</span>
                <span className={`${FD} text-lg font-semibold uppercase tracking-wide text-slate-200`}>{e.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

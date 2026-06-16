import { Reveal } from "./Reveal";
import { Kicker } from "./Kicker";
import { AREA } from "@/app/site-config";
import { FD, FB } from "@/app/fonts";

export function Sobre() {
  return (
    <section id="sobre" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=70" alt="Profissional Resolve" className="h-full w-full object-cover grayscale-[20%]" />
            </div>
            <div className="absolute -bottom-5 -right-5 flex items-baseline gap-2 bg-[#1a1a1d] px-7 py-5 sm:-right-5">
              <span className={`${FD} text-4xl font-bold text-[#c9a24b]`}>+10</span>
              <span className={`${FB} text-xs font-medium uppercase leading-tight tracking-wide text-slate-300`}>anos de<br />experiência</span>
            </div>
            <span className="absolute -left-3 -top-3 h-10 w-10 border-l-2 border-t-2 border-[#c9a24b]" />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div>
            <Kicker index="04">Sobre a Resolve</Kicker>
            <h2 className={`mt-5 text-4xl font-bold uppercase leading-[0.95] tracking-tight text-[#1a1a1d] sm:text-5xl ${FD}`}>
              Gente da casa,<br />trabalho de gente grande
            </h2>
            <p className={`mt-6 text-lg leading-relaxed text-slate-600 ${FB}`}>
              A <strong className="text-[#1a1a1d]">Resolve Manutenção e Reformas</strong> nasceu pra facilitar a vida de quem precisa de soluções rápidas e bem feitas. Atuamos em {AREA} com pintura, elétrica, hidráulica, alvenaria, montagem e reparos gerais.
            </p>
            <p className={`mt-4 text-lg leading-relaxed text-slate-600 ${FB}`}>
              Pontualidade, organização e transparência total — cuidamos da sua casa ou empresa como se fosse nossa.
            </p>
            <div className={`mt-8 flex flex-wrap gap-3 ${FB}`}>
              {["Profissionais qualificados", "Orçamento sem compromisso", "Garantia nos serviços"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b8923d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

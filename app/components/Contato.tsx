import { Reveal } from "./Reveal";
import { Kicker } from "./Kicker";
import { Icons } from "@/app/icons";
import { AREA, EMAIL, PHONE_DISPLAY, WHATSAPP, DEFAULT_MSG, waLink, gridBg } from "@/app/site-config";
import { FD, FB } from "@/app/fonts";

export function Contato() {
  const contatos = [
    { icon: Icons.whatsapp, label: "WhatsApp", value: PHONE_DISPLAY, href: waLink(DEFAULT_MSG) },
    { icon: Icons.phone, label: "Telefone", value: PHONE_DISPLAY, href: `tel:+${WHATSAPP}` },
    { icon: Icons.mail, label: "E-mail", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Icons.pin, label: "Atendimento", value: AREA, href: "#" },
  ];
  return (
    <section id="contato" className="relative overflow-hidden bg-[#161618] py-20 sm:py-28">
      <div className="absolute inset-0" style={gridBg} />
      <div className="pointer-events-none absolute -right-20 -top-10 h-72 w-72 rounded-full bg-[#c9a24b]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <Reveal>
            <div>
              <Kicker index="05" dark>Contato</Kicker>
              <h2 className={`mt-5 text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl ${FD}`}>
                Bora<br /><span className="text-[#c9a24b]">resolver?</span>
              </h2>
              <p className={`mt-5 max-w-md text-lg text-slate-300 ${FB}`}>
                Fale com a gente e receba seu orçamento sem compromisso. Resposta rápida no WhatsApp.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <a href={waLink(DEFAULT_MSG)} target="_blank" rel="noopener noreferrer" className={`group flex items-center justify-center gap-3 bg-green-500 px-8 py-5 text-base font-bold uppercase tracking-wide text-white shadow-xl shadow-green-500/20 transition-all hover:-translate-y-0.5 hover:bg-green-600 ${FB}`}>
              {Icons.whatsapp} Chamar no WhatsApp
              <span className="transition-transform group-hover:translate-x-1">{Icons.arrow}</span>
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {contatos.map((c, i) => (
            <Reveal key={c.label} delay={i * 70}>
              <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={`group flex h-full items-center gap-4 border-white/10 px-1 py-7 transition-colors hover:bg-white/[0.03] sm:px-5 ${i < 3 ? "lg:border-r" : ""}`}>
                <span className="flex h-11 w-11 flex-none items-center justify-center bg-white/[0.06] text-[#c9a24b] transition-colors group-hover:bg-[#c9a24b] group-hover:text-[#1a1a1d]">
                  {c.icon}
                </span>
                <span className="flex flex-col">
                  <span className={`${FB} text-[11px] font-semibold uppercase tracking-widest text-slate-500`}>{c.label}</span>
                  <span className={`${FB} text-sm font-medium text-white`}>{c.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

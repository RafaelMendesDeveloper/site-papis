import { LogoText } from "./LogoText";
import { navItems } from "@/app/data";
import { AREA } from "@/app/site-config";
import { FB } from "@/app/fonts";

export function Footer() {
  return (
    <footer className="bg-[#121214] py-12">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <LogoText />
          <nav className={`flex flex-wrap items-center justify-center gap-6 ${FB}`}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm uppercase tracking-wide text-slate-400 transition hover:text-[#c9a24b]">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className={`mt-8 border-t border-white/10 pt-8 text-center ${FB}`}>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Resolve Manutenção e Reformas — Todos os direitos reservados.</p>
          <p className="mt-1 text-sm text-slate-600">Atendimento em {AREA}.</p>
        </div>
      </div>
    </footer>
  );
}

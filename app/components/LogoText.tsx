import { FD, FB } from "@/app/fonts";

export function LogoText({ light = true }: { light?: boolean }) {
  return (
    <a href="#inicio" className="flex flex-col leading-none">
      <span className={`flex items-start ${FD}`}>
        <span className="mt-[3px] bg-gradient-to-br from-[#e0c074] to-[#b8923d] bg-clip-text text-base font-bold leading-none text-transparent">r</span>
        <span className="-ml-0.5 bg-gradient-to-br from-[#e0c074] to-[#b8923d] bg-clip-text text-2xl font-bold leading-none text-transparent">R</span>
        <span className={`text-2xl font-bold leading-none tracking-wide ${light ? "text-white" : "text-[#1a1a1d]"}`}>ESOLVE</span>
      </span>
      <span className={`mt-1.5 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#c9a24b] ${FB}`}>
        Manutenção e Reformas
      </span>
    </a>
  );
}

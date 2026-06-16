import type { CSSProperties } from "react";

export const WHATSAPP = "5513974053383"; // 55 + DDD + número (só dígitos)
export const PHONE_DISPLAY = "(13) 97405-3383";
export const EMAIL = "thidiegues@hotmail.com";
export const AREA = "Santos e região";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
export const DEFAULT_MSG = "Olá! Vim pelo site e gostaria de solicitar um orçamento.";

/* textura de grade (blueprint) para seções escuras */
export const gridBg: CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
  backgroundSize: "46px 46px",
};

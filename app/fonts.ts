import { Oswald, Space_Grotesk } from "next/font/google";

export const display = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

export const body = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const FD = "[font-family:var(--font-display)]"; // títulos
export const FB = "[font-family:var(--font-body)]"; // corpo

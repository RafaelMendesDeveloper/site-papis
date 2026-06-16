import type { ReactNode } from "react";
import { FB } from "@/app/fonts";

export function Kicker({
  index,
  children,
  dark = false,
}: {
  index?: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 ${FB}`}>
      <span className="h-px w-7 bg-[#c9a24b]" />
      <span className="text-xs font-semibold uppercase tracking-[0.32em]">
        {index && <span className="text-[#c9a24b]">{index}</span>}{" "}
        <span className={dark ? "text-slate-400" : "text-[#8a7437]"}>{children}</span>
      </span>
    </div>
  );
}

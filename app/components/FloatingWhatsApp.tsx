import { Icons } from "@/app/icons";
import { DEFAULT_MSG, waLink } from "@/app/site-config";

export function FloatingWhatsApp() {
  return (
    <a href={waLink(DEFAULT_MSG)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-green-500/40 transition-all hover:scale-110 hover:bg-green-600">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
      <span className="relative">{Icons.whatsapp}</span>
    </a>
  );
}

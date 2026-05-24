import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5585921708115?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Forte%20Capital."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-medium text-white shadow-2xl shadow-[#25D366]/30 hover:scale-105 transition-all"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Fale no WhatsApp</span>
    </a>
  );
}

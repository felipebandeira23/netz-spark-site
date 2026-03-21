import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5521973958770?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20NETZSolutions."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,40%)] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow active:scale-95"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

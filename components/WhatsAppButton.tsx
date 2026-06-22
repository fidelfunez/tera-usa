import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../config/whatsapp";

export function WhatsAppButton() {
  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversemos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white shadow-lg transition hover:bg-charcoal md:hidden"
    >
      <MessageCircle className="h-5 w-5" />
    </Link>
  );
}

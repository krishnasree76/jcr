import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/918309988784"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-brand-slate p-4 rounded-full shadow-2xl flex items-center justify-center"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} fill="currentColor" />
  </motion.a>
);

export default WhatsAppButton;

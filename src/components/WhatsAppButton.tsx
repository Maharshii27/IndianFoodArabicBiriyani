import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const whatsappNumber = '+971501234567';
  const message = encodeURIComponent('Hello! I would like to place an order.');

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      aria-label="Order via WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </motion.a>
  );
}

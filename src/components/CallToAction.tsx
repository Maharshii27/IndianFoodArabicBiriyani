import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';

export default function CallToAction() {
  const whatsappNumber = '+971501234567';
  const message = encodeURIComponent('Hello! I would like to place an order.');

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 md:p-16 text-center"
        >
          <span className="text-primary text-sm uppercase tracking-widest mb-4 block">
            Ready to Order?
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Order Your <span className="text-gradient-gold">Royal Biryani</span> Now
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Experience the taste of royalty delivered to your doorstep. 
            Fresh, hot, and crafted with love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold flex items-center justify-center gap-2">
              <Phone size={20} />
              Call to Order
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-semibold bg-[#25D366] text-white flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              <MessageCircle size={20} />
              WhatsApp Order
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

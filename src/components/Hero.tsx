import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-biryani.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Arabic Biryani"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 pt-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-2 rounded-full glass text-primary text-sm uppercase tracking-widest mb-6"
        >
          ★ Premium Halal Cuisine ★
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-foreground">Authentic</span>
          <br />
          <span className="text-gradient-gold">Arabic Biryani</span>
          <br />
          <span className="text-foreground">Taste</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Experience the royal flavor of Arabian spices blended with Indian tradition. 
          Every grain tells a story of heritage and passion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/contact" className="btn-gold">
            Order Now
          </Link>
          <Link to="/menu" className="btn-outline-gold">
            View Menu
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-primary"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Al-Rashid',
    role: 'Food Blogger',
    content: 'The best Arabic biryani I have ever tasted outside of Dubai! The flavors are authentic and the presentation is stunning. A must-visit for biryani lovers.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Regular Customer',
    content: 'My family orders from here every weekend. The Hyderabadi Dum Biryani is absolutely divine. The meat just falls off the bone!',
    rating: 5,
  },
  {
    name: 'Mohammed Hassan',
    role: 'Corporate Event Manager',
    content: 'We ordered catering for our company event and everyone was impressed. Professional service and exceptional food quality. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Sarah Khan',
    role: 'Food Enthusiast',
    content: 'The Lamb Kabsa transported me back to my grandmother\'s kitchen in Riyadh. Authentic Arabian flavors with a beautiful Indian touch.',
    rating: 5,
  },
  {
    name: 'Rajesh Patel',
    role: 'Restaurant Critic',
    content: 'A perfect fusion of Arabian and Indian cuisines. The ambience is luxurious and the staff is incredibly attentive. Five stars!',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            What Our <span className="text-gradient-gold">Guests</span> Say
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <Quote size={80} className="absolute top-4 left-4 text-primary/10" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center relative z-10"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-foreground/90 mb-8 italic leading-relaxed">
                  "{testimonials[current].content}"
                </p>
                <div>
                  <h4 className="font-display text-xl font-semibold text-gradient-gold">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? 'w-8 bg-primary' : 'bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

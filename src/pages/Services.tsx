import { useState } from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Truck, CalendarDays, PartyPopper, Home, Package, Send } from 'lucide-react';
import { toast } from 'sonner';

const services = [
  {
    icon: UtensilsCrossed,
    title: 'Dine-In Service',
    description: 'Experience our luxurious ambience with impeccable table service. Perfect for romantic dinners, family gatherings, or business meetings.',
  },
  {
    icon: Truck,
    title: 'Online Order & Delivery',
    description: 'Craving our biryani? Order online and get hot, fresh food delivered to your doorstep within 30 minutes.',
  },
  {
    icon: CalendarDays,
    title: 'Event Catering',
    description: 'From corporate events to private parties, we bring our culinary excellence to your venue with full-service catering.',
  },
  {
    icon: PartyPopper,
    title: 'Wedding & Birthday Orders',
    description: 'Make your special occasions memorable with our bulk orders and customized menu packages.',
  },
  {
    icon: Home,
    title: 'Home Delivery',
    description: 'Fast and reliable home delivery service ensuring your food arrives fresh, hot, and perfectly packed.',
  },
  {
    icon: Package,
    title: 'Party Packs & Family Combos',
    description: 'Special value packs designed for family gatherings, featuring a variety of our signature dishes.',
  },
];

export default function Services() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guests: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Catering inquiry submitted! We\'ll contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', eventType: '', guests: '', date: '', message: '' });
  };

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm uppercase tracking-widest mb-4 block"
          >
            What We Offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold mb-4"
          >
            Our <span className="text-gradient-gold">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            From intimate dinners to grand celebrations, we have the perfect 
            culinary solution for every occasion.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mb-6 group-hover:animate-glow">
                  <service.icon size={28} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Form */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-primary text-sm uppercase tracking-widest mb-4 block">
                Book Your Event
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Catering <span className="text-gradient-gold">Inquiry</span>
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and our events team will get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="glass-card p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="+971 50 123 4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Event Type *</label>
                  <select
                    required
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="private">Private Party</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Number of Guests *</label>
                  <input
                    type="number"
                    required
                    min="10"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Expected guests"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Event Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Additional Requirements</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your event, dietary requirements, or special requests..."
                />
              </div>
              <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                <Send size={18} />
                Submit Inquiry
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </main>
  );
}

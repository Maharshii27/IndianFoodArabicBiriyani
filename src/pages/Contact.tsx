import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const whatsappNumber = '+971501234567';
  const message = encodeURIComponent('Hello! I would like to make a reservation.');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
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
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold mb-4"
          >
            Contact <span className="text-gradient-gold">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Have a question, feedback, or want to make a reservation? 
            We'd love to hear from you!
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold mb-8">
                Contact <span className="text-gradient-gold">Information</span>
              </h2>

              <div className="space-y-6 mb-10">
                <div className="glass-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      123 Spice Street, Dubai Marina<br />
                      Dubai, UAE - 12345
                    </p>
                  </div>
                </div>

                <div className="glass-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">
                      +971 50 123 4567<br />
                      +971 4 123 4567
                    </p>
                  </div>
                </div>

                <div className="glass-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      info@arabicbiryani.com<br />
                      reservations@arabicbiryani.com
                    </p>
                  </div>
                </div>

                <div className="glass-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Opening Hours</h4>
                    <p className="text-muted-foreground">
                      Mon - Thu: 11:00 AM - 11:00 PM<br />
                      Fri - Sun: 11:00 AM - 12:00 AM
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white font-semibold hover:scale-105 transition-transform"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold mb-8">
                Send Us a <span className="text-gradient-gold">Message</span>
              </h2>

              <form onSubmit={handleSubmit} className="glass-card p-8">
                <div className="space-y-6">
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
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                    <Send size={18} />
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold mb-4">
              Find <span className="text-gradient-gold">Us</span>
            </h2>
            <p className="text-muted-foreground">Visit us at our Dubai Marina location</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.168505642546!2d55.13519931500851!3d25.07756598395522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6caed0a88f5f%3A0x7b99382a2e8b9b0c!2sDubai%20Marina!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

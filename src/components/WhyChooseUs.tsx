import { motion } from 'framer-motion';
import { Shield, Leaf, Truck, Users, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: '100% Halal',
    description: 'All our ingredients are certified halal, ensuring authentic taste with peace of mind',
  },
  {
    icon: Leaf,
    title: 'Fresh Arabian Spices',
    description: 'We import premium spices directly from Arabia for that authentic flavor',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Hot and fresh delivery within 30 minutes to your doorstep',
  },
  {
    icon: Users,
    title: 'Family Friendly',
    description: 'Spacious dining with a warm ambience perfect for family gatherings',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Award-winning recipes crafted by expert chefs with 20+ years experience',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            The <span className="text-gradient-gold">Royal</span> Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don't just serve food, we craft experiences that transport you 
            to the bustling streets of Arabia and the royal kitchens of Hyderabad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 text-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-gold flex items-center justify-center group-hover:animate-glow transition-all">
                <feature.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

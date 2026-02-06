import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Phone, MessageCircle } from 'lucide-react';
import mandiImage from '@/assets/mandi-biryani.jpg';
import parotaWithChickenImage from '@/assets/ParotaWithChicken.jpg';
import kushkaImage from '@/assets/kushka.jpg';
import specialChickenImage from '@/assets/specialChicken.jpg';
import dosaWithChickenImage from '@/assets/dosaWithChicken.jpg';

const phoneNumber = 'tel:+919398442100';
const whatsappNumber = '919398442100';

const categories = ['All', 'Biryani', 'Starters', 'Grills', 'Arabian Specials', 'Desserts', 'Drinks'];

const menuItems = [
  // Biryani
  { id: 1, name: 'Chicken Dum Biryani', description: 'Tender chicken slow-cooked with aromatic Arabian spices and fragrant basmati rice', price: 120, category: 'Biryani', image: mandiImage, rating: 4.9 },
  { id: 2, name: 'Parota with Chicken Curry', description: 'Classic layered biryani with saffron-infused rice and succulent meat pieces', price: 50, category: 'Biryani', image: parotaWithChickenImage, rating: 4.8 },
  { id: 3, name: 'Kushka with Chicken', description: 'Royal lamb pieces on a bed of spiced rice with roasted nuts and raisins', price: 60, category: 'Biryani', image: kushkaImage, rating: 4.9 },
  { id: 4, name: 'Special Chicken Curry', description: 'Fusion of juicy shawarma and aromatic biryani with tahini drizzle', price: 60, category: 'Biryani', image: specialChickenImage, rating: 4.7 },
  { id: 5, name: 'Dosa with Chicken', description: 'Grand feast for 4-6 people with assorted biryanis, sides, and desserts', price: 50, category: 'Biryani', image: dosaWithChickenImage, rating: 5.0 },
  // Starters
  { id: 6, name: 'Hummus Platter', description: 'Creamy chickpea dip with olive oil', price: 199, category: 'Starters', image: mandiImage, rating: 4.6 },
  { id: 7, name: 'Parota Platter', description: 'Flaky parotas with side dishes', price: 249, category: 'Starters', image: parotaWithChickenImage, rating: 4.7 },
  { id: 8, name: 'Chicken Kushka', description: 'Tender chicken with aromatic spiced rice', price: 349, category: 'Starters', image: kushkaImage, rating: 4.8 },
  // Grills
  { id: 9, name: 'Kushka Special', description: 'Special rice dish with mixed ingredients', price: 899, category: 'Grills', image: kushkaImage, rating: 4.9 },
  { id: 10, name: 'Special Chicken Grill', description: 'Grilled chicken with special marinade', price: 549, category: 'Grills', image: specialChickenImage, rating: 4.8 },
  // Arabian Specials
  { id: 11, name: 'Majboos Rice', description: 'Traditional Qatari spiced rice dish', price: 479, category: 'Arabian Specials', image: mandiImage, rating: 4.7 },
  { id: 12, name: 'Parota Special', description: 'Special parota dish with unique preparation', price: 359, category: 'Arabian Specials', image: parotaWithChickenImage, rating: 4.6 },
  // Desserts
  { id: 13, name: 'Dosa Delight', description: 'Crispy dosa with sweet and savory fillings', price: 199, category: 'Desserts', image: dosaWithChickenImage, rating: 4.9 },
  { id: 14, name: 'Baklava Assortment', description: 'Layers of phyllo, nuts, and honey', price: 249, category: 'Desserts', image: mandiImage, rating: 4.8 },
  // Drinks
  { id: 15, name: 'Parota Coffee', description: 'Traditional coffee served with parota', price: 99, category: 'Drinks', image: parotaWithChickenImage, rating: 4.7 },
  { id: 16, name: 'Kushka Drink', description: 'Refreshing beverage with kushka flavors', price: 79, category: 'Drinks', image: kushkaImage, rating: 4.6 },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm uppercase tracking-widest mb-4 block"
          >
            Explore Our Menu
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold mb-4"
          >
            Our <span className="text-gradient-gold">Delicious</span> Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            From aromatic biryanis to succulent grills, discover a menu 
            that celebrates the best of Arabian and Indian cuisine.
          </motion.p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 sticky top-16 z-40 glass">
        <div className="container-custom">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? 'gradient-gold text-primary-foreground'
                    : 'glass hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                    {item.category}
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm">
                    <Star size={14} className="text-primary fill-primary" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">₹{item.price}</span>
                    <button className="btn-gold py-2 px-4 text-sm flex items-center gap-2">
                      <ShoppingCart size={16} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Order Buttons */}
      <section className="py-8">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={phoneNumber}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-gold text-primary font-semibold hover:scale-105 transition-transform"
            >
              <Phone size={20} />
              Call to Order
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi Jameer Shaik! I would like to place an order.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white font-semibold hover:scale-105 transition-transform"
            >
              <MessageCircle size={20} />
              WhatsApp Order
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

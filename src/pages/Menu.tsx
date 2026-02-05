import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';
import mandiImage from '@/assets/mandi-biryani.jpg';
import hyderabadiImage from '@/assets/hyderabadi-biryani.jpg';
import kabsaImage from '@/assets/lamb-kabsa.jpg';
import shawarmaImage from '@/assets/shawarma-biryani.jpg';
import familyImage from '@/assets/family-pack.jpg';

const categories = ['All', 'Biryani', 'Starters', 'Grills', 'Arabian Specials', 'Desserts', 'Drinks'];

const menuItems = [
  // Biryani
  { id: 1, name: 'Arabian Chicken Mandi', description: 'Tender chicken slow-cooked with aromatic spices', price: 449, category: 'Biryani', image: mandiImage, rating: 4.9 },
  { id: 2, name: 'Hyderabadi Dum Biryani', description: 'Classic layered biryani with saffron rice', price: 399, category: 'Biryani', image: hyderabadiImage, rating: 4.8 },
  { id: 3, name: 'Arabic Lamb Kabsa', description: 'Royal lamb on spiced rice with nuts', price: 599, category: 'Biryani', image: kabsaImage, rating: 4.9 },
  { id: 4, name: 'Chicken Shawarma Biryani', description: 'Fusion of shawarma and biryani', price: 429, category: 'Biryani', image: shawarmaImage, rating: 4.7 },
  { id: 5, name: 'Family Pack Biryani', description: 'Feast for 4-6 people', price: 1499, category: 'Biryani', image: familyImage, rating: 5.0 },
  // Starters
  { id: 6, name: 'Hummus Platter', description: 'Creamy chickpea dip with olive oil', price: 199, category: 'Starters', image: mandiImage, rating: 4.6 },
  { id: 7, name: 'Falafel Basket', description: 'Crispy herb-spiced chickpea fritters', price: 249, category: 'Starters', image: hyderabadiImage, rating: 4.7 },
  { id: 8, name: 'Chicken Seekh Kebab', description: 'Spiced minced chicken on skewers', price: 349, category: 'Starters', image: kabsaImage, rating: 4.8 },
  // Grills
  { id: 9, name: 'Mixed Grill Platter', description: 'Assorted grilled meats and vegetables', price: 899, category: 'Grills', image: kabsaImage, rating: 4.9 },
  { id: 10, name: 'Lamb Shish Kebab', description: 'Tender lamb cubes char-grilled', price: 549, category: 'Grills', image: shawarmaImage, rating: 4.8 },
  // Arabian Specials
  { id: 11, name: 'Majboos Rice', description: 'Traditional Qatari spiced rice dish', price: 479, category: 'Arabian Specials', image: mandiImage, rating: 4.7 },
  { id: 12, name: 'Harees', description: 'Slow-cooked wheat and meat porridge', price: 359, category: 'Arabian Specials', image: hyderabadiImage, rating: 4.6 },
  // Desserts
  { id: 13, name: 'Kunafa', description: 'Cheese pastry soaked in sweet syrup', price: 199, category: 'Desserts', image: familyImage, rating: 4.9 },
  { id: 14, name: 'Baklava Assortment', description: 'Layers of phyllo, nuts, and honey', price: 249, category: 'Desserts', image: mandiImage, rating: 4.8 },
  // Drinks
  { id: 15, name: 'Arabic Coffee', description: 'Traditional cardamom-infused coffee', price: 99, category: 'Drinks', image: hyderabadiImage, rating: 4.7 },
  { id: 16, name: 'Fresh Laban', description: 'Refreshing buttermilk drink', price: 79, category: 'Drinks', image: kabsaImage, rating: 4.6 },
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
    </main>
  );
}

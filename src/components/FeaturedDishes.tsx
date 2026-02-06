import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import mandiImage from '@/assets/mandi-biryani.jpg';
import parotaWithChickenImage from '@/assets/ParotaWithChicken.jpg';
import kushkaImage from '@/assets/kushka.jpg';
import specialChickenImage from '@/assets/specialChicken.jpg';
import dosaWithChickenImage from '@/assets/dosaWithChicken.jpg';

const dishes = [
  {
    name: 'Chicken Dum Biryani',
    description: 'Tender chicken slow-cooked with aromatic Arabian spices and fragrant basmati rice',
    price: '₹120',
    image: mandiImage,
    rating: 4.9,
  },
  {
    name: 'Parota with Chicken Curry',
    description: 'Flaky layered parota served with rich and spicy chicken curry',
    price: '₹50',
    image: parotaWithChickenImage,
    rating: 4.8,
  },
  {
    name: 'Kushka with Chicken',
    description: 'Aromatic rice cooked with tender chicken and aromatic spices',
    price: '₹60',
    image: kushkaImage,
    rating: 4.9,
  },
  {
    name: 'Special Chicken Curry',
    description: 'Special chicken curry prepared with unique blend of Arabian spices',
    price: '₹60',
    image: specialChickenImage,
    rating: 4.7,
  },
  {
    name: 'Dosa with Chicken',
    description: 'Crispy dosa served with flavorful chicken filling and chutney',
    price: '₹50',
    image: dosaWithChickenImage,
    rating: 5.0,
  },
];

export default function FeaturedDishes() {
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
            Our Specialties
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient-gold">Dishes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our chef's signature creations, crafted with the finest Arabian spices 
            and time-honored Indian cooking techniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm">
                  <Star size={14} className="text-primary fill-primary" />
                  <span className="text-sm font-medium">{dish.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2">{dish.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{dish.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{dish.price}</span>
                  <button className="btn-gold py-2 px-4 text-sm">Add to Cart</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

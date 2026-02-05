import { motion } from 'framer-motion';
import { Award, Users, Clock, MapPin } from 'lucide-react';
import chefImage from '@/assets/chef.jpg';
import interiorImage from '@/assets/restaurant-interior.jpg';

const timeline = [
  { year: '2015', title: 'The Beginning', description: 'Founded in Dubai with a passion for authentic Arabian cuisine' },
  { year: '2017', title: 'First Expansion', description: 'Opened our second branch due to overwhelming demand' },
  { year: '2019', title: 'Award Winning', description: 'Recognized as Best Arabic Restaurant in the region' },
  { year: '2021', title: 'Digital Innovation', description: 'Launched online ordering and delivery services' },
  { year: '2024', title: 'Growing Strong', description: 'Now serving 10,000+ happy customers monthly' },
];

const stats = [
  { icon: Award, value: '15+', label: 'Awards Won' },
  { icon: Users, value: '50K+', label: 'Happy Customers' },
  { icon: Clock, value: '10+', label: 'Years Experience' },
  { icon: MapPin, value: '5', label: 'Branches' },
];

export default function About() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-sm uppercase tracking-widest mb-4 block">
                Our Story
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                A Legacy of <span className="text-gradient-gold">Royal Flavors</span>
              </h1>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Arabic Biryani House was born from a dream to bring together the rich culinary 
                traditions of Arabia and India. Our founder, Chef Mohammed Al-Rashid, spent 
                20 years perfecting recipes that honor both heritages.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                What started as a small family kitchen in Dubai has grown into a beloved 
                destination for food lovers seeking authentic flavors. Every dish we serve 
                carries the love, passion, and expertise of generations.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon size={28} className="text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gradient-gold">{stat.value}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="glass-card overflow-hidden">
                <img
                  src={interiorImage}
                  alt="Restaurant Interior"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-4 hidden md:block">
                <div className="text-3xl font-bold text-gradient-gold">Since 2015</div>
                <div className="text-muted-foreground">Serving Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="glass-card overflow-hidden max-w-md mx-auto">
                <img
                  src={chefImage}
                  alt="Head Chef"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-primary text-sm uppercase tracking-widest mb-4 block">
                Meet Our Chef
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Chef <span className="text-gradient-gold">Mohammed Al-Rashid</span>
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                With over 25 years of culinary expertise spanning the royal kitchens of 
                Saudi Arabia to the bustling streets of Hyderabad, Chef Mohammed brings 
                an unparalleled understanding of spices and flavors.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                His philosophy is simple: use the freshest ingredients, respect traditional 
                techniques, and pour love into every dish. Under his leadership, our kitchen 
                has earned numerous accolades and a devoted following.
              </p>
              <div className="glass-card p-6">
                <p className="italic text-foreground/90">
                  "Food is not just about taste—it's about memories, traditions, and bringing 
                  people together. Every biryani I create carries a piece of my soul."
                </p>
                <div className="mt-4 text-primary font-semibold">— Chef Mohammed</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="font-display text-2xl font-bold mb-4 text-gradient-gold">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To serve authentic Arabian-Indian fusion cuisine that delights every palate, 
                while maintaining the highest standards of quality, hygiene, and hospitality. 
                We aim to make every meal a memorable experience.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8"
            >
              <h3 className="font-display text-2xl font-bold mb-4 text-gradient-gold">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the global ambassador of Arabian-Indian cuisine, expanding our 
                legacy across continents while staying true to our roots. We envision a 
                world where our flavors bring joy to millions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm uppercase tracking-widest mb-4 block">
              Our Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              The <span className="text-gradient-gold">Timeline</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30 hidden md:block" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass-card p-6 inline-block">
                    <div className="text-2xl font-bold text-gradient-gold mb-2">{item.year}</div>
                    <h4 className="font-display text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full gradient-gold z-10 hidden md:block" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

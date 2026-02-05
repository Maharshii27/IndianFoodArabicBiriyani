import Hero from '@/components/Hero';
import FeaturedDishes from '@/components/FeaturedDishes';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';

export default function Index() {
  return (
    <main>
      <Hero />
      <FeaturedDishes />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </main>
  );
}

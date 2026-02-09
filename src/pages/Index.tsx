import Hero from '@/components/Hero';
import FeaturedDishes from '@/components/FeaturedDishes';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import { useEffect } from 'react';

export default function Index() {
  useEffect(() => {
    // Force scroll to top for all devices including mobile
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Additional mobile-specific scroll handling
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
    };

    // Execute immediately and also after a short delay for mobile browsers
    scrollToTop();
    const timeoutId = setTimeout(scrollToTop, 100);
    
    // Clean up
    return () => {
      clearTimeout(timeoutId);
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    };
  }, []);
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

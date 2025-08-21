import React from 'react';
import Hero from '../components/Hero';
import FeaturedDestinations from '../components/FeaturedDestinations';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <FeaturedDestinations />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
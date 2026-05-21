import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero/Hero';
import FeaturedCatalog from './components/sections/FeaturedCatalog/FeaturedCatalog';
import TraditionalCollection from './components/sections/TraditionalCollection/TraditionalCollection';
import BrandStory from './components/sections/BrandStory/BrandStory';
import Testimonials from './components/sections/Testimonials/Testimonials';
import ContactCTA from './components/sections/ContactCTA/ContactCTA';

function App() {
  return (
    <Layout>
      <Hero />
      <FeaturedCatalog />
      <BrandStory />
      <TraditionalCollection />
      {/*<Testimonials />*/}
      {/*<ContactCTA />*/}
    </Layout>
  );
}

export default App;

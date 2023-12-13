import React from 'react';
import HeroCarousel from './HeroCarousel';
import Categories from './Categories';
import SalesProducts from './SalesProducts';

const Home = () => {
  return (
    <section>
        <HeroCarousel/>
        <Categories/>
        <SalesProducts/>
    </section>
  )
}

export default Home
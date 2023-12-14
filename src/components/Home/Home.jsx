import React from 'react';
import HeroCarousel from './HeroCarousel';
import Categories from './Categories';
import SalesProducts from './SalesProducts';
import ExploreProducts from './ExploreProducts';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
  return (
    <section>
        <HeroCarousel/>
        <Categories/>
        <SalesProducts/>
        <Banner/>
        <ExploreProducts/>
        <Services/>
    </section>
  )
}

export default Home
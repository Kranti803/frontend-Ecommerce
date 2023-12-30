import React from 'react';
import HeroCarousel from './HeroCarousel';
import SalesProducts from './SalesProducts';
import ExploreProducts from './ExploreProducts';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
  return (
    <section className='md:w-[80%] m-auto'>
        <HeroCarousel/>
        <SalesProducts/>
        <Banner/>
        <ExploreProducts/>
        <Services/>
    </section>
  )
}

export default Home
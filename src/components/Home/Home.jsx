import React from "react";
import HeroCarousel from "./HeroCarousel";
import FeaturedProducts from "./FeaturedProducts";
import ExploreProducts from "./ExploreProducts";
import Banner from "./Banner";
import Services from "./Services";


const Home = () => {

  return (
    <section className=" px-2 lg:w-[85%] m-auto">
      <HeroCarousel />
      <FeaturedProducts />
      <Banner />
      <ExploreProducts />
      <Services />
    </section>
  );
};

export default Home;

import React from "react";
import HeroCarousel from "./HeroCarousel";
import FeaturedProducts from "./FeaturedProducts";
import ExploreProducts from "./ExploreProducts";
import Banner from "./Banner";
import Services from "./Services";
import { useSelector } from "react-redux";
import Loader from "../Layouts/Loader";

const Home = () => {
  const { loading } = useSelector((state) => state.auth);
  if (loading) return <Loader />;
  return (
    <section className="md:w-[80%] m-auto">
      <HeroCarousel />
      <FeaturedProducts />
      <Banner />
      <ExploreProducts />
      <Services />
    </section>
  );
};

export default Home;

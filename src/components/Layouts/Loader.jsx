import React from "react";
import loaderPng from "../../assets/infinity-loader.png";

const Loader = () => {
  return <div className="h-64">
    <img src={loaderPng} className="w-full h-full object-contain" alt="" />
  </div>;
};

export default Loader;

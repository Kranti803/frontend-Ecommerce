import React from "react";
import loaderPng from "../../assets/loaderPng.png";

const Loader = () => {
  return <div className="h-6 w-6">
    <img src={loaderPng} className="w-full h-full object-contain" alt="" />
  </div>;
};

export default Loader;

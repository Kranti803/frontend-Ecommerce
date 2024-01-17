import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-[calc(100vh-70px)] p-4 lg:p-0 lg:w-[80%] m-auto mt-4 flex flex-col items-center justify-center gap-4 text-center">
      <div>
        <h1 className="text-3xl md:text-5xl font-[Inter] pb-4">404 Not Found</h1>
        <p className="text-sm md:text-xl pb-2">
          Your visited page not found. <br />
          You may go home page.
        </p>
      </div>
      <div>
        <Link to={'/'} className="text-[poppins] text-sm bg-[#DB4444] border-none outline-none text-white p-2 rounded-md">Return To Home Page</Link>
      </div>
    </section>
  );
};

export default NotFound;

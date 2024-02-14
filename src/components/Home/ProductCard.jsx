import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import StarsRating from "react-star-rate";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/thunks/cartThunk";

const ProductCard = ({ title, image, price, rating, id }) => {
  const dispatch = useDispatch();


  return (
    <div className="max-w-[250px] h-[400px] font-[poppins] relative flex-shrink-0">
      <div className="h-[250px] w-full bg-[#F5F5F5]">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover p-8 bg-inherit"
        />
        <button
          className="bg-[#DB4444] text-white w-full text-sm py-2"
          onClick={() => dispatch(addToCart(id))}
        >
          Add To Cart
        </button>
      </div>
      <div className="absolute top-2 w-full flex justify-end px-2">
        <button className="borrder-none outline-none bg-[#ffffff] h-[25px] w-[25px] flex items-center justify-center p-[2px] rounded-full">
          <FaRegHeart />
        </button>
      </div>
      <Link
        to={`/productdetails/${id}`}
        className="flex flex-col gap-y-[8px] mt-12"
      >
        <h4 className="text-sm md:text-base">{title}</h4>
        <p className="text-sm md:text-base">
          <span>${price}</span>
        </p>
        <div className="flex gap-2">
          <div className="text-[#FFAD33]">
            <StarsRating
              value={rating}
              allowHalf={true}
              symbol={<IoIosStar size={20} />}
              disabled={true}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

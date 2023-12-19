import React, { useState } from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Cart = () => {

  const cart = [
    {
      image: img1,
      name: "Headphones",
      discountedPrice: 100,
    },
    {
      image: img2,
      name: "Camera",
      discountedPrice: 110,
    },
    {
      image: img3,
      name: "shoes",
      discountedPrice: 110,
    },
    {
      image: img4,
      name: "Another Shoes",
      discountedPrice: 110,
    },
  ];
  return (
    <section className="min-h-screen mt-4 p-[2px] sm:p-4 lg:p-0 lg:w-[80%] m-auto">
      <div className="font-normal">
        <table className="font-[poppins] w-full text-xs sm:text-md md:text-lg flex flex-col gap-4">
          <tr className="grid grid-cols-4 place-items-start text-[12px] sm:text-md md:text-lg border-b-2 border-gray-300 py-3 px-1 md:px-2">
            <th className="font-normal">Product</th>
            <th className="font-normal">Price</th>
            <th className="font-normal">Quantity</th>
            <th className="font-normal">Remove</th>
          </tr>
          {cart.map((item, index) => (
            <CartItem item={item} index={index} />
          ))}
        </table>
      </div>
      <div className="flex justify-end mt-4">
        <div className="border-[1px] border-gray-300 w-full xs:w-1/2 p-4 rounded-sm">
          <h2 className="text-md font-semibold">Cart Total</h2>
          <p className="text-sm flex justify-between pt-2">
            <span>Subtotal</span> <span>$534</span>
          </p>
          <p className="text-sm flex justify-between pt-2">
            <span>Shipping</span>
            <span>Free</span>
          </p>
          <p className="text-sm flex justify-between pt-2">
            <span>Total</span> <span>$512</span>
          </p>
          <div className="flex justify-center pt-2">
            <Link
              to={"/billingdetails"}
              className=" bg-[#DB4444] text-white text-sm sm:text-base font-[inter] px-2 py-1 rounded-sm"
            >
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

const CartItem = ({ item, index }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <tr
      key={index}
      className="border-b-[1px] pb-1 grid grid-cols-4 border-gray-300"
    >
      <td className="flex flex-col sm:flex-row gap-1">
        <img
          src={item?.image}
          alt=""
          className="h-[54px] w-[54px] object-cover"
        />
        <span>{item?.name}</span>
      </td>
      <td>${item?.discountedPrice}</td>
      <td className="flex gap-2">
        <button
          class="h-fit"
          onClick={() => setQuantity((prevState) => prevState - 1)}
        >
          <MdChevronLeft size={25} />
        </button>
        <p className="mt-1 md:mt-0">{quantity}</p>
        <button
          class="h-fit"
          onClick={() => setQuantity((prevState) => prevState + 1)}
        >
          <MdChevronRight size={25} />
        </button>
      </td>
      <td>
        <button className="text-red-600">
          <MdDeleteForever className="text-red" size={25} />
        </button>
      </td>
    </tr>
  );
};

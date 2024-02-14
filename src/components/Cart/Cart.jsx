import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";

const Cart = () => {
  const { products, subTotal, totalPrice, shipping } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  return (
    <section className="min-h-screen mt-4 p-[2px] sm:p-4 lg:p-0 lg:w-[80%] m-auto">
      <div className="font-normal">
        <table className="font-[poppins] w-full text-xs sm:text-md md:text-lg flex flex-col gap-4">
          <thead>
            <tr className="grid grid-cols-4 place-items-start text-[12px] sm:text-md md:text-lg border-b-2 border-gray-300 py-3 px-1 md:px-2">
              <th className="font-normal">Product</th>
              <th className="font-normal">Price</th>
              <th className="font-normal">Quantity</th>
              <th className="font-normal">Remove</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((item, index) => (
              <CartItem
                title={item?.product?.title}
                price={item?.product?.price}
                image={item?.product?.productImage?.url}
                key={item?.product?._id}
                id={item?.product?._id}
                quantity={item?.quantity}
                index={index}
              />
            ))}
          </tbody>
        </table>
        {products.length > 0 && (
          <div>
            <button
              className="px-2 py-1 mt-2 font-[poppins] bg-[#DB4444] text-white rounded-sm"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
      {products?.length > 0 && (
        <div className="flex justify-end mt-4 font-[poppins]">
          <div className="border-[1px] border-gray-300 w-full xs:w-1/2 p-4 rounded-sm">
            <h2 className="text-md font-semibold">Cart Total</h2>
            <p className="text-sm flex justify-between pt-2">
              <span>Subtotal</span> <span>${subTotal}</span>
            </p>
            <p className="text-sm flex justify-between pt-2">
              <span>Shipping</span>
              <span>${shipping}</span>
            </p>
            <p className="text-sm flex justify-between pt-2">
              <span>Total</span> <span>${totalPrice}</span>
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
      )}
    </section>
  );
};

export default Cart;

const CartItem = ({ title, price, image, id, quantity, index }) => {

  const dispatch = useDispatch();


  return (
    <tr className="border-b-[1px] pb-1 grid grid-cols-4 border-gray-300">
      <td className="flex flex-col sm:flex-row gap-x-2">
        <img src={image} alt="" className="h-[54px] w-[54px] object-contain" />
        <span className="text-sm">{title}</span>
      </td>
      <td>${price}</td>
      <td className="flex gap-2">
        <button
          className="h-fit"
          onClick={() => dispatch(decrementQuantity(index))}
        >
          <MdChevronLeft size={25} />
        </button>
        <p className="mt-1 md:mt-0">{quantity}</p>
        <button
          className="h-fit"
          onClick={() => dispatch(incrementQuantity(index))}
        >
          <MdChevronRight size={25} />
        </button>
      </td>
      <td>
        <button
          className="text-red-600"
          onClick={() => dispatch(removeFromCart(id))}
        >
          <MdDeleteForever className="text-red" size={25} />
        </button>
      </td>
    </tr>
  );
};

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
      <div className="overflow-x-auto">
        <table className="font-[Inter] w-full">
          <thead>
            <tr>
              <th className="font-semibold text-lg p-3">Product</th>
              <th className="font-semibold text-lg p-3">Price</th>
              <th className="font-semibold text-lg p-3">Quantity</th>
              <th className="font-semibold text-lg p-3">Remove</th>
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
      </div>
      {products.length > 0 && (
        <div className="flex justify-end">
          <button
            className="px-2 py-1 mt-6 font-[poppins] bg-[#DB4444] text-white rounded-sm"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      )}
      {products?.length > 0 && (
        <div className="flex justify-end my-4 font-[poppins]">
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
    <tr className="even:bg-[#f4f4f4] rounded-md">
      <td className="flex flex-col sm:flex-row gap-x-2 p-3 justify-center items-center">
        <img src={image} alt="" className="h-[54px] w-[54px] object-contain" />
        <span className="text-sm">{title}</span>
      </td>
      <td className="p-3 text-center">${price}</td>

      <td className="p-3 text-center">
        <div className="flex justify-evenly items-center">
          <button onClick={() => dispatch(decrementQuantity(index))}>
            <MdChevronLeft size={25} />
          </button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(index))}>
            <MdChevronRight size={25} />
          </button>
        </div>
      </td>
      <td className="p-3 text-center">
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

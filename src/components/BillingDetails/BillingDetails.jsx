import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { serverUrl } from "../../redux/store";

const BillingDetails = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const { products, subTotal, shipping, totalPrice } = useSelector(
    (state) => state.cart
  );

  const navigate = useNavigate();

  const makeStripePayment = async () => {
    try {
      const stripe = await loadStripe(
        "pk_test_51OkhlcSJmrxbqh51oYUmDiCXonW5ACEmu9RkkNV2HDCXRq53V8iHydpgK8SAee8do1lZ7YoObkjm04uBvG9Vh43Z00sNDQ7UYa"
      );

      const { data } = await axios.post(
        `${serverUrl}/create-checkout-session`,
        { products, shipping },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      stripe.redirectToCheckout({
        sessionId: data?.id,
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const proceedToPayment = () => {
    if (paymentMethod === "") {
      toast.error("Select one payment method !");
    } else if (paymentMethod === "cod") {
      navigate("/paymentsuccess");
    } else if (paymentMethod === "stripe") {
      // console.log("its stripe");
      makeStripePayment();
    }
  };

  return (
    <section className="min-h-[calc(100vh-70px)] p-4 lg:p-0 lg:w-[80%] m-auto">
      <h2 className="text-xl md:text-2xl font-[inter] font-semibold">
        Billing Details
      </h2>
      <div className="flex flex-col gap-4 md:flex-row mt-3">
        <form className="flex flex-col w-full md:w-1/2">
          <label htmlFor="name" className="text-xs font-[poppins] pb-[2px]">
            Name
          </label>
          <input
            className="border-none outline-none bg-[#F5F5F5] px-3 py-1 rounded-sm mb-2"
            id="name"
            name="name"
            type="text"
          />
          <label htmlFor="name" className="text-xs font-[poppins] pb-[2px]">
            Email
          </label>
          <input
            className="border-none outline-none bg-[#F5F5F5] px-3 py-1 rounded-sm mb-2"
            id="name"
            name="name"
            type="text"
          />
          <label htmlFor="name" className="text-xs font-[poppins] pb-[2px]">
            Address
          </label>
          <input
            className="border-none outline-none bg-[#F5F5F5] px-3 py-1 rounded-sm mb-2"
            id="name"
            name="name"
            type="text"
          />
          <label htmlFor="name" className="text-xs font-[poppins] pb-[2px]">
            City/Town
          </label>
          <input
            className="border-none outline-none bg-[#F5F5F5] px-3 py-1 rounded-sm mb-2"
            id="name"
            name="name"
            type="text"
          />
          <label htmlFor="name" className="text-xs font-[poppins] pb-[2px]">
            Phone
          </label>
          <input
            className="border-none outline-none bg-[#F5F5F5] px-3 py-1 rounded-sm mb-2"
            id="name"
            name="name"
            type="text"
          />
        </form>
        <div className="w-full flex flex-col gap-3 md:w-1/2">
          {products.map((item) => (
            <div
              key={item?.product?._id}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex gap-2 items-center">
                <img
                  src={item?.product?.productImage?.url}
                  className="h-[40px] w-[40px]"
                  alt=""
                />
                <p className="text-sm font-[poppins] flex gap-x-2">
                  {item?.product?.title}
                  <span>x {item?.quantity}</span>
                </p>
              </div>
              <div>
                <p className="font-[poppins]">${item?.product?.price}</p>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between font-[poppins] text-sm border-b-2 border-gray-200">
            <span>Subtotal</span>
            <span>${subTotal}</span>
          </div>
          <div className="flex items-center justify-between font-[poppins] text-sm border-b-2 border-gray-200">
            <span>Shipping</span>
            <span>${shipping}</span>
          </div>
          <div className="flex items-center justify-between font-[poppins] text-sm border-b-2 border-gray-200">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
          <div className="flex items-center gap-x-2 text-sm">
            <input
              type="radio"
              name="paymentMethod"
              id="stripePayment"
              value="stripe"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="stripePayment" className="font-[poppins]">
              Pay using Stripe
            </label>
          </div>
          <div className="flex items-center gap-x-2 text-sm">
            <input
              type="radio"
              name="paymentMethod"
              id="codPayment"
              value="cod"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="codPayment" className="font-[poppins]">
              Cash On Delivery
            </label>
          </div>
          <div className="flex items-center w-full justify-center">
            <button
              className="px-2 py-1 bg-[#DB4444] font-[inter] text-white text-sm rounded-sm mt-2 w-full md:w-fit"
              onClick={proceedToPayment}
            >
              Proceed To Payment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillingDetails;

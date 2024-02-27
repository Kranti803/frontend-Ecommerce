import React, { useEffect,useRef,useCallback } from "react";
import successPng from "../../assets/successPng.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../redux/thunks/orderThunk";
import { clearError, clearMessage } from "../../redux/slices/orderSlice";

const PaymentSuccess = () => {

  const { tempData, error, message } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  // Ref to track whether placeOrder has been dispatched
  const placeOrderDispatched = useRef(false);

  // Memoized placeOrder function using useCallback
  const memoizedPlaceOrder = useCallback(
    (data) => {
      if (!placeOrderDispatched.current) {
        dispatch(placeOrder(data));
        placeOrderDispatched.current = true;
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (tempData) {
      memoizedPlaceOrder(tempData);
    }
  }, [memoizedPlaceOrder, tempData]);

  useEffect(() => {
    if (error) {
      dispatch(clearError());
    }

    if (message) {
      dispatch(clearMessage());
    }
  }, [dispatch, error, message]);

  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="md:h-[500px] p-3 md:w-[500px] flex flex-col gap-16 items-center shadow-md rounded-sm">
        <img src={successPng} alt="" className="h-[48px] w-[48px]" />
        <h2 className="text-xl md:text-2xl font-semibold">
          Your payment has been done successfully .
        </h2>
        <Link
          className="bg-[#DB4444] w-full flex justify-center py-2 text-white text-lg rounded-sm"
          to={"/"}
        >
          Return to homepage
        </Link>
      </div>
    </section>
  );
};

export default PaymentSuccess;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetail } from "../../../redux/thunks/orderThunk";
import { toast } from "react-toastify";
import { clearError } from "../../../redux/slices/orderSlice";

const OrderDetail = ({ orderId }) => {
  const dispatch = useDispatch();
  const { orderDetail, error } = useSelector((state) => state.order);
  useEffect(() => {
    dispatch(getOrderDetail(orderId));
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error, orderId]);
  return (
    <section className="bg-white rounded-md px-4 py-2 min-h-screen">
      <h2 className=" pb-8 text-xl md:text-2xl text-center font-semibold">
        Order Details
      </h2>
      <div className="overflow-x-auto">
        <h4 className="text-lg font-semibold font-[Inter]">User detail</h4>
        <div className="flex flex-col gap-y-2 mt-4 font-[poppins] border-b-[1px] border-gray-300">
          <p>User Id : {orderDetail?.user} </p>
          <p>Name : {orderDetail?.name} </p>
          <p>Email : {orderDetail?.email} </p>
          <p>Address : {orderDetail?.address} </p>
          <p>City : {orderDetail?.city} </p>
          <p>Phone : {orderDetail?.phone} </p>
        </div>
        <div className="border-b-[1px] border-gray-300 mt-4">
          <h4 className="text-lg font-semibold font-[Inter]">Items Ordered</h4>
          {orderDetail?.orderItems.map((item) => (
            <aside
              key={item?._id}
              className="mt-4 flex flex-col gap-y-2 font-[poppins]"
            >
              <p>Product Id : {item?._id} </p>
              <p>Name : {item?.name} </p>
              <p>Price : ${item?.price} </p>
              <p>Quantity : {item?.quantity} </p>
              <div className="font-[poppins] flex gap-x-2 items-center mb-2">
                <p>Product Image : </p>
                <img
                  src={item?.image}
                  alt=""
                  className="h-[80px] w-[80px] object-fill"
                />
              </div>
            </aside>
          ))}
        </div>
        <div>
          <h4 className="text-lg font-semibold mt-4 font-[Inter]">
            Payment Information
          </h4>
          <aside className="mt-4 flex flex-col gap-y-2 font-[poppins]">
            <p>Payment Id : {orderDetail?.paymentInfo?.id} </p>
            <p>Status : {orderDetail?.paymentInfo?.status} </p>
            <p>Subtotal : ${orderDetail?.subTotal} </p>
            <p>Shipping Price : ${orderDetail?.shippingPrice} </p>
            <p>Total Price : ${orderDetail?.totalPrice} </p>
            <p>Order Status : {orderDetail?.orderStatus} </p>
            <p>Paid At : {orderDetail?.paidAt.split("T")[0]} </p>
            {orderDetail?.deliveredAt && (
              <p>Delivered At : {orderDetail?.deliveredAt} </p>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default OrderDetail;

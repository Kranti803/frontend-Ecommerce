import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeOrderstatus,
  deleteOrder,
  getAllOrders,
} from "../../../redux/thunks/orderThunk";
import { toast } from "react-toastify";
import { clearError, clearMessage } from "../../../redux/slices/orderSlice";

const GetAllOrders = ({ setPage, setOrderId }) => {
  const dispatch = useDispatch();
  const { ordersAdmin, error, message } = useSelector((state) => state.order);
  useEffect(() => {
    dispatch(getAllOrders());
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  }, [dispatch, error, message]);
  return (
    <section className="bg-white rounded-md px-4 py-2">
      <h2 className=" pb-8 text-xl md:text-2xl text-center font-semibold">
        All Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="font-[Inter]">
            <tr className="mb-4">
              <th className="font-semibold p-3">Order ID</th>
              <th className="font-semibold p-3">Status</th>
              <th className="font-semibold p-3">Products</th>
              <th className="font-semibold p-3">Amount</th>
              <th className="font-semibold p-3">Action</th>
            </tr>
          </thead>
          <tbody className="font-[poppins]">
            {ordersAdmin?.map((item) => (
              <tr key={item?._id} className="even:bg-[#f4f4f4] even:rounded-md">
                <td className="p-3 text-center">{item._id}</td>
                <td
                  className={`p-3 text-center ${
                    item?.orderStatus === "Placed"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {item?.orderStatus}
                </td>
                <td className="p-3 text-center">{item?.orderItems?.length}</td>
                <td className="p-3 text-center">${item?.totalPrice}</td>
                <td className="p-3 flex flex-col gap-y-3 justify-center items-center">
                  {item?.orderStatus === "Processing" ? (
                    <button
                      className="text-red-600 hover:text-black"
                      onClick={() => dispatch(changeOrderstatus(item._id))}
                    >
                      Change Status
                    </button>
                  ) : null}
                  <button
                    className="text-red-600 hover:text-black"
                    onClick={() => dispatch(deleteOrder(item?._id))}
                  >
                    Delete Order
                  </button>
                  <button
                    className="text-red-600 hover:text-black"
                    onClick={() => {
                      setPage("/admin/orderdetail");
                      setOrderId(item?._id);
                    }}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GetAllOrders;

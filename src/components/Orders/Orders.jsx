import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearError } from "../../redux/slices/orderSlice";
import { getUserOrders } from "../../redux/thunks/orderThunk";

const Orders = () => {
  const { error, ordersUser } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders());
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error]);
  
  return (
    <section className="min-h-screen mt-6 p-2 sm:p-4 lg:p-0 lg:w-[80%] m-auto">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="font-[Inter]">
            <tr className="mb-4">
              <th className="font-semibold p-3">Item</th>
              <th className="font-semibold p-3">Image</th>
              <th className="font-semibold p-3">Status</th>
              <th className="font-semibold p-3">Quantity</th>
              <th className="font-semibold p-3">Price</th>
            </tr>
          </thead>
          <tbody className="font-[poppins]">
            {ordersUser.map((order) =>
              order?.orderItems.map((item,index) => (
                <tr
                  className="even:bg-[#f4f4f4] even:rounded-md"
                  key={index}
                >
                  <td className="p-3 text-center">{item.name}</td>
                  <td className="h-20 w-20">
                    <img
                      src={item?.image}
                      alt=""
                      className=" w-full h-full object-contain"
                    />
                  </td>
                  <td
                    className={`${
                      order?.orderStatus === "Processing"
                        ? "text-red-600"
                        : "text-green-600"
                    } p-3 text-center`}
                  >
                    {order.orderStatus}
                  </td>
                  <td className="p-3 text-center">{item.quantity}</td>
                  <td className="p-3 text-center">{`$${item.price}`}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Orders;

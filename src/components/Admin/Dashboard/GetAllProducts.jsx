import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getAllProducts,
  updateProductFeatured,
} from "../../../redux/thunks/dashboardThunk";
import { clearError, clearMessage } from "../../../redux/slices/dashboardSlice";
import { toast } from "react-toastify";

const GetAllProducts = ({ setPage, setProductId }) => {
  const dispatch = useDispatch();

  const { products, error, message } = useSelector((state) => state.dashboard);


  useEffect(() => {
    dispatch(getAllProducts());
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
        All Products
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="font-[Inter]">
            <tr className="mb-4">
              <th className="font-semibold p-3">Name</th>
              <th className="font-semibold p-3">Image</th>
              <th className="font-semibold p-3">Price</th>
              <th className="font-semibold p-3">Featured</th>
              <th className="font-semibold p-3">Action</th>
            </tr>
          </thead>
          <tbody className="font-[poppins]">
            {products?.map((item) => (
              <Product
                key={item?._id}
                item={item}
                setPage={setPage}
                setProductId={setProductId}
                dispatch={dispatch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GetAllProducts;

const Product = ({ item, setPage, setProductId, dispatch }) => {
  const updateHandler = (id) => {
    setPage("/admin/updateproduct");
    setProductId(id);
  };
  return (
    <>
      <tr className="even:bg-[#f4f4f4] even:rounded-md p-3">
        <td className="p-3 text-center">{item?.title}</td>
        <td className="h-[58px] w-[78px]">
          <img
            src={item?.productImage?.url}
            alt=""
            className=" w-full h-full object-fill"
          />
        </td>
        <td className="p-3 text-center">${item?.price}</td>
        <td className="p-3 text-center">
          {item?.featured === false ? "False" : "True"}
        </td>
        <td className="p-3 text-center flex flex-col justify-center items-center gap-y-3">
          <button
            onClick={() => updateHandler(item?._id)}
            className="text-red-600 text-left hover:text-black"
          >
            Update Product
          </button>
          <button
            onClick={() => dispatch(updateProductFeatured(item?._id))}
            className="text-red-600 text-left hover:text-black"
          >
            Change Featured
          </button>
          <button
            className="text-red-600 text-left hover:text-black"
            onClick={() => dispatch(deleteProduct(item._id))}
          >
            Delete Product
          </button>
        </td>
      </tr>
    </>
  );
};

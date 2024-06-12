import React, { useEffect, useState } from "react";
import { addProduct } from "../../../redux/thunks/dashboardThunk";
import { useDispatch, useSelector } from "react-redux";
import { clearError, clearMessage } from "../../../redux/slices/dashboardSlice";
import { toast } from "react-toastify";
import LoadingButton from "../../Layouts/LoadingButton";

const AddProduct = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [stock, setStock] = useState("");

  const dispatch = useDispatch();

  const changeImageHandler = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(file);
    };
  };

  const { error, message, loading } = useSelector((state) => state.dashboard);

  const handleSubmit = (e) => {
    e.preventDefault();

    const myFormData = new FormData();

    myFormData.append("title", title);
    myFormData.append("description", description);
    myFormData.append("price", price);
    myFormData.append("category", category);
    myFormData.append("brand", brand);
    myFormData.append("stock", stock);
    myFormData.append("file", image);

    dispatch(addProduct(myFormData));
  };

  useEffect(() => {
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
    <section className="bg-white rounded-md px-4 py-2 min-h-screen">
      <h2 className=" pb-8 text-xl md:text-2xl text-center font-semibold">
        Add Product
      </h2>
      <div className="w-full md:w-1/2 m-auto h-full">
        <form className=" w-full flex flex-col gap-12" onSubmit={handleSubmit}>
          <input
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            type="text"
            placeholder="Enter title"
            className="bg-[#f4f4f4] px-4 py-3 outline-[#e05607] rounded-sm "
          />
          <input
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            type="text"
            placeholder="Enter description"
            className="bg-[#f4f4f4] px-4 py-3 outline-[#e05607] rounded-sm "
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            name="price"
            type="text"
            placeholder="Enter price"
            className="bg-[#f4f4f4] px-4 py-3 outline-[#e05607] rounded-sm "
          />
          <input
            onChange={(e) => setCategory(e.target.value)}
            name="category"
            type="text"
            placeholder="Enter category"
            className="bg-[#f4f4f4] px-4 py-3 outline-[#e05607] rounded-sm "
          />
          <input
            onChange={(e) => setBrand(e.target.value)}
            name="brand"
            type="text"
            placeholder="Enter brand"
            className="bg-[#f4f4f4] px-4 py-3 outline-[#e05607] rounded-sm "
          />
          <input
            onChange={(e) => setStock(e.target.value)}
            name="stock"
            type="text"
            placeholder="Enter number of stocks"
            className="bg-[#f4f4f4] px-4 py-3 outline-[#e05607] rounded-sm "
          />

          <input
            onChange={changeImageHandler}
            name="file"
            type="file"
            placeholder="Select Product Image"
            className="bg-[#f4f4f4] px-4 py-3 outline-[#e05607] rounded-sm file:bg-[#e05607] file:border-none file:flex file:justify-center file:w-full file:text-white file:py-2 file:rounded-sm "
          />

          {loading ? (
            <LoadingButton
              className={
                "flex w-full justify-center rounded-sm bg-[#e05607] px-3 py-1.5 text-sm font-semibold leading-6 text-white border-none outline-none text-[poppins]"
              }
            />
          ) : (
            <button
              type="submit"
              className="w-full p-2 bg-[#e05607] text-white rounded-sm"
            >
              Add Product
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default AddProduct;

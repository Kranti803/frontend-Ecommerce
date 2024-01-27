import React, { useState } from "react";

const AddProduct = () => {
  const [image, setImage] = useState("");
  const [formdata, setFormdata] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    stock: "",
  });

  const handleInputChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const changeImageHandler = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(file);
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    console.log(image);
  };
  return (
    <section className="bg-white rounded-md px-4 py-2 min-h-screen">
      <h2 className=" pb-8 text-xl md:text-2xl text-center font-semibold">
        Add Product
      </h2>
      <div className="w-full md:w-1/2 m-auto h-full">
        <form className=" w-full flex flex-col gap-12" onSubmit={handleSubmit}>
          <input
            onChange={handleInputChange}
            name="title"
            type="text"
            placeholder="Enter title"
            className="bg-[#f4f4f4] px-4 py-3 outline-[#e05607] rounded-sm "
          />
          <input
            onChange={handleInputChange}
            name="description"
            type="text"
            placeholder="Enter description"
            className="bg-[#f4f4f4] px-4 py-3 outline-[#e05607] rounded-sm "
          />
          <input
            onChange={handleInputChange}
            name="price"
            type="text"
            placeholder="Enter price"
            className="bg-[#f4f4f4] px-4 py-3 outline-[#e05607] rounded-sm "
          />
          <input
            onChange={handleInputChange}
            name="category"
            type="text"
            placeholder="Enter category"
            className="bg-[#f4f4f4] px-4 py-3 outline-[#e05607] rounded-sm "
          />
          <input
            onChange={handleInputChange}
            name="brand"
            type="text"
            placeholder="Enter brand"
            className="bg-[#f4f4f4] px-4 py-3 outline-[#e05607] rounded-sm "
          />
          <input
            onChange={handleInputChange}
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
          <button
            type="submit"
            className="w-full p-2 bg-[#e05607] text-white rounded-sm"
          >
            Add Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;

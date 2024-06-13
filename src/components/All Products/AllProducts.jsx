import React, { useEffect, useState } from "react";
import ProductCard from "../Home/ProductCard";
import axios from "axios";
import { productBrands, productCategories } from "../../constants";
import ReactPaginate from "react-paginate";
import { serverUrl } from "../../redux/store";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [priceType, setpriceType] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          `${serverUrl}/get_all_products?search=${search}&category=${category}&brand=${brand}&page=${page}`
        );
        setProducts(data?.products);
        setTotalProducts(data?.productsLength);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [category, brand, page, search]);

  //sorting by price
  useEffect(() => {
    let newProducts = [...products];
    if (priceType === "highToLow") {
      const sorted = newProducts.sort((a, b) => b.price - a.price);
      setSortedProducts(sorted);
    } else if (priceType === "lowToHigh") {
      const sorted = newProducts.sort((a, b) => a.price - b.price);
      setSortedProducts(sorted);
    } else {
      setSortedProducts([]);
    }
  }, [priceType, products]);

  return (
    <section className="min-h-screen md:w-[80%] m-auto px-2 font-[Poppins]">
      <div>
        <input
          type="text"
          placeholder="Search Product here..."
          className="w-full py-2 border-b-[2px] border-gray-400 outline-none "
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="text-sm mt-2 flex items-center justify-between flex-wrap gap-2 md:gap-0 ">
        <div className="w-full md:w-auto">
          <select
            name="filterByCategory"
            className=" w-full md:w-auto outline-none border-2 border-gray-400 rounded-md px-1"
            defaultValue={"Category"}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Category" disabled>
              Category
            </option>
            {productCategories.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full md:w-auto">
          <select
            name="filterByBrands"
            className=" w-full md:w-auto outline-none border-2 border-gray-400 rounded-md px-1"
            defaultValue={"Brands"}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="Brands" disabled>
              Brands
            </option>
            {productBrands.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full md:w-auto">
          <select
            name="filterByPrice"
            className=" w-full md:w-auto outline-none border-2 border-gray-400 rounded-md px-1"
            defaultValue={"Price"}
            onChange={(e) => setpriceType(e.target.value)}
          >
            <option value="Price" disabled>
              Price
            </option>
            <option value="highToLow">High To Low</option>
            <option value="lowToHigh">Low To High</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-8 my-8">
        {sortedProducts.length > 0
          ? sortedProducts.map((item) => (
              <ProductCard
                key={item?._id}
                title={item?.title}
                image={item?.productImage?.url}
                price={item?.price}
                rating={item?.rating}
                id={item?._id}
              />
            ))
          : products?.map((item) => (
              <ProductCard
                key={item?._id}
                title={item?.title}
                image={item?.productImage?.url}
                price={item?.price}
                rating={item?.rating}
                id={item?._id}
              />
            ))}
      </div>
      <div>
        {products?.length > 0 ? (
          <Pagination totalProducts={totalProducts} setPage={setPage} />
        ) : (
          <h1 className="text-md text-center">No Products found !!!</h1>
        )}
      </div>
    </section>
  );
};

export default AllProducts;

const Pagination = ({ totalProducts, setPage }) => {
  const totalPages = totalProducts / 8;
  return (
    <>
      <ReactPaginate
        className="text-[#DB4444] my-8 py-2 rounded-md flex flex-wrap justify-evenly items-center gap-x-4 px-1 border-2 border-[#DB4444] "
        breakLabel="..."
        nextLabel="Next >>"
        onPageChange={(e) => setPage(e.selected + 1)}
        pageCount={totalPages}
        previousLabel="<< Previous"
      />
    </>
  );
};

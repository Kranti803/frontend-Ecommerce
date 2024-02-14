import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import iconDelivery from "../../assets/iconDelivery.png";
import iconReturn from "../../assets/iconReturn.png";
import StarsRating from "react-star-rate";
import userPng from "../../assets/userPng.png";
import { BsCart3 } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addReviewAndRating,
  deleteReviewAndRating,
  getProductDetail,
} from "../../redux/thunks/productThunk";
import { addToCart } from "../../redux/thunks/cartThunk";
import { toast } from "react-toastify";
import { clearError, clearMessage } from "../../redux/slices/productSlice";

const ProductDetails = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();

  const { product, error, message } = useSelector((state) => state.product);

  const { user } = useSelector((state) => state.auth);

  const addReviewHandler = (e, productId) => {
    e.preventDefault();
    dispatch(addReviewAndRating(productId, review, rating));
    setRating(0);
    setReview("");
  };

  useEffect(() => {
    dispatch(getProductDetail(id));
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  }, [id, dispatch, error, message]);

  console.log(product);

  return (
    <section className="min-h-screen p-4 lg:p-0 lg:w-[80%] m-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <aside className="md:w-1/2 bg-[#f3f2f2] p-10 md:p-20">
          <img src={product?.productImage?.url} className="" alt="" />
        </aside>
        <aside className="md:w-1/2">
          <div>
            <h2 className="font-bold font-[poppins]">{product?.title}</h2>
            <div className="flex gap-2 items-center">
              <div className="flex items-center gap-[1px] text-yellow-400 py-2">
                <StarsRating
                  value={parseFloat(product?.rating.toFixed(2))}
                  allowHalf={true}
                  symbol={<IoIosStar size={20} />}
                  disabled={true}
                />
              </div>
              <span className="text-sm text-gray-500 font-[poppins]">
                {product?.reviews.length > 1
                  ? `${product?.reviews.length} reviews`
                  : `${product?.reviews.length} review`}
              </span>
              {product?.stock === 0 ? (
                <span className="text-red-600 text-xs font-[poppins] md:text-sm">
                  Out Of Stock
                </span>
              ) : (
                <span className="text-green-600 text-xs font-[poppins] md:text-sm">
                  In Stock
                </span>
              )}
            </div>
            <p className="font-[poppins] font-semibold text-sm pb-2">
              ${product?.price}
            </p>
            <p className="font-[poppins] text-xs md:text-sm pb-2 mt-8">
              {product?.description}
            </p>
          </div>
          <div className="flex justify-center flex-col gap-y-4 items-center my-2 mt-6">
            <button className="text-sm w-full md:w-1/2 bg-[#DB4444] text-white font-[inter] px-4 py-2 rounded-sm">
              Buy Now
            </button>
            <button
              className="text-sm w-full md:w-1/2 bg-[#1e1e1e] text-white font-[inter] px-4 py-2 rounded-sm flex justify-center items-center gap-x-2"
              onClick={() => dispatch(addToCart(id))}
            >
              Add To Cart
              <BsCart3 size={18} />
            </button>
          </div>
          <div className="border-[1px] flex justify-center items-center flex-col w-full md:w-1/2 m-auto border-solid border-gray-400 mt-3">
            <aside className="w-full flex gap-2 pl-2 font-[Inter] border-[1px] border-solid border-gray-400 py-4">
              <img src={iconDelivery} alt="" className="h-[25px] w-[25px]" />
              <p>Free Delivery</p>
            </aside>
            <aside className="w-full flex items-center pl-2 font-[inter] gap-2 border-[1px] border-solid border-gray-400 py-4">
              <img src={iconReturn} alt="" className="h-[25px] w-[25px]" />
              <p>Return Delivery</p>
            </aside>
          </div>
        </aside>
      </div>
      <div className="mt-4 mb-3">
        <h2 className="font-[Inter] border-b-[1px] bolder-solid border-gray-400">
          Reviews
          <span className="text-xs px-2 md:text-sm text-gray-500">(19)</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-3">
          <form
            className="w-full md:w-1/2 flex flex-col"
            onSubmit={(e) => addReviewHandler(e, id)}
          >
            <div className="my-2">
              <StarsRating
                value={rating}
                onChange={(value) => setRating(value)}
                allowHalf={false}
                symbol={<IoIosStar size={20} />}
                disabled={false}
              />
            </div>
            <textarea
              name=""
              value={review}
              id=""
              cols="30"
              rows="10"
              placeholder="Write Reviews"
              className="font-[poppins] bg-gray-100 resize-none border-[1px] border-solid border-gray-400 p-3 rounded-sm outline-none text-sm"
              onChange={(e) => setReview(e.target.value)}
            />
            <button
              type="sumbit"
              className="mt-2 font-[inter] border-none outline-none text-white px-3 py-1 rounded-sm text-sm bg-[#DB4444]"
            >
              Submit Review
            </button>
          </form>

          <div className="w-full md:w-1/2 pt-8">
            {product?.reviews?.map((item) => (
              <div className="flex flex-col font-[poppins] border-b-[1px] mb-1 border-solid border-gray-400">
                <div className="flex items-center gap-2">
                  <img
                    src={userPng}
                    alt=""
                    className="w-[30px] object-cover h-[30px] rounded-full"
                  />
                  <p className="text-xs sm:text-sm text-gray-600">
                    {item?.name}
                  </p>
                </div>
                <div className="mt-1">
                  <div>
                    <StarsRating
                      symbol={<IoIosStar size={10} />}
                      disabled={true}
                      value={item?.userRating}
                    />
                    <p className="text-sm">{item?.review}</p>
                  </div>
                  <div className="flex justify-end pt-1">
                    {user?.role === "admin" || item?.userId === user?._id ? (
                      <button
                        className="border-none outline-none text-[#DB4444] text-xs"
                        onClick={() => dispatch(deleteReviewAndRating(id))}
                      >
                        Delete review
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

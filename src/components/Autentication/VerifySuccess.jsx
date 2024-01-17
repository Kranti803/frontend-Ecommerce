import { React, useEffect } from "react";
import successPng from "../../assets/successPng.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";
import { verifyEmail } from "../../redux/thunks/authThunk";

const VerifySuccess = () => {
  const dispatch = useDispatch();
  const { id, token } = useParams();
  const navigate = useNavigate();

  const { error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(verifyEmail(id, token));
  }, [id, token, dispatch]);

  useEffect(() => {
    if (error) {
      navigate("/");
    }
  }, [error, navigate, dispatch]);

  
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="md:h-[500px] p-3 md:w-[500px] flex flex-col gap-16 items-center shadow-md rounded-sm">
        <img src={successPng} alt="" className="h-[48px] w-[48px]" />
        <h2 className="text-xl md:text-2xl font-semibold">
          Your email has been verified successfully .
        </h2>
        <Link className="bg-[#DB4444] w-full flex justify-center py-2 text-white text-lg rounded-sm" to={'/'}>
          Return to homepage
        </Link>
      </div>
    </section>
  );
};

export default VerifySuccess;

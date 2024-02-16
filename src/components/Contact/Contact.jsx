import React, { useEffect, useState } from "react";
import phoneIcon from "../../assets/icons-phone.png";
import iconMail from "../../assets/icons-mail.png";
import { useDispatch, useSelector } from "react-redux";
import { clearError, clearMessage } from "../../redux/slices/userSlice";
import { toast } from "react-toastify";
import { contactUs } from "../../redux/thunks/userThunk";

const Contact = () => {
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name:user?.name,
    email:user?.email,
    phone: "",
    message: "",
  });
  const { error, message } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(contactUs(formData));
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
    <section className="p-4 lg:p-0 lg:w-[80%] m-auto mt-12 flex flex-wrap-reverse min-h-[calc(100vh-100px)]">
      <div className="flex flex-col gap-2 w-full md:w-1/2">
        <div className="pb-14">
          <aside className="flex items-center gap-3  ">
            <img src={phoneIcon} alt="" />
            <h4 className="text-lg sm:text-xl md:text-2xl">Call To Us</h4>
          </aside>
          <aside className="flex flex-col gap-2 text-sm sm:text-md">
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </aside>
        </div>
        <div>
          <aside className="flex items-center gap-3">
            <img src={iconMail} alt="" />
            <h4 className="text-lg sm:text-xl md:text-2xl">Write To US</h4>
          </aside>
          <aside className="flex flex-col gap-2 text-sm sm:text-md">
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
          </aside>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col md:flex-row gap-2">
            <input
              className="bg-[#F5F5F5] w-full outline-none border-none px-2 py-2 rounded-[4px] text-xs font-[poppins]"
              type="text"
              name="name"
              defaultValue={user?.name}
              required
              placeholder="Your Name"
            />
            <input
              className="bg-[#F5F5F5] w-full outline-none border-none px-2 py-2 rounded-[4px] text-xs font-[poppins]"
              type="email"
              name="email"
              defaultValue={user?.email}
              required
              placeholder="Your Email"
            />
          </div>
          <input
            className="bg-[#F5F5F5] w-full mt-2 outline-none border-none px-2 py-2 rounded-[4px] text-xs font-[poppins]"
            type="text"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Your Phone"
          />
          <div>
            <textarea
              type="text"
              name="message"
              required
              value={formData.message}
              onChange={handleInputChange}
              cols="30"
              rows="10"
              className=" w-full mt-2 resize-none bg-[#F5F5F5] text-xs font-[poppins] outline-none border-none p-2 rounded"
              placeholder="Your Message "
            />
          </div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-sm bg-[#DB4444] mb-4 px-3 py-1.5 text-sm font-semibold leading-6 text-white border-none outline-none text-[poppins]"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

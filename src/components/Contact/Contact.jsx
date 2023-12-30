import React from "react";
import phoneIcon from "../../assets/icons-phone.png";
import iconMail from "../../assets/icons-mail.png";

const Contact = () => {
  return (
    <section className="p-4 lg:p-0 lg:w-[80%] m-auto mt-12 flex flex-wrap-reverse min-h-[calc(100vh-100px)]">
      <div className="flex flex-col gap-2 w-full md:w-1/2 md:pr-4">
        <div className="border-b-2 border-gray-400 pb-2">
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
        <form className="">
          <div className=" flex flex-col md:flex-row gap-2">
            <input
              className="bg-[#F5F5F5] w-full outline-none border-none px-2 py-2 rounded-[4px] text-xs font-[poppins]"
              type="text"
              name=""
              id=""
              placeholder="Your Name"
            />
            <input
              className="bg-[#F5F5F5] w-full outline-none border-none px-2 py-2 rounded-[4px] text-xs font-[poppins]"
              type="email"
              name=""
              id=""
              placeholder="Your Email"
            />
          </div>
          <input
            className="bg-[#F5F5F5] w-full mt-2 outline-none border-none px-2 py-2 rounded-[4px] text-xs font-[poppins]"
            type="text"
            name=""
            id=""
            placeholder="Your Phone"
          />
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className=" w-full mt-2 resize-none bg-[#F5F5F5] text-xs font-[poppins] outline-none border-none p-2 rounded"
              placeholder="Your Message "
            ></textarea>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

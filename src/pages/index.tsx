import React, { useEffect, useState } from "react";
import img from "../assets/svg/img.svg";
import logo from "../assets/svg/logo.svg";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { useUserLogin } from "@/components/store/useUserLogin";
import { toast } from "react-toastify";

function LandingPage() {
  const { setPhoneNumber } = useUserLogin();

  const router = useRouter();
  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   result();
  // };

  // const result = async () => {
  //   try {
  //     const config = {
  //       method: "POST",
  //       url: "https://api.hipal.life/v1/users/chef/Login?withBusinessId=false",
  //       data: {
  //         phone: phoneNumber,
  //       },
  //     };

  //     const user = await axios(config);
  //     if (!isEmpty(user.data)) {
  //       setUser(user.data);
  //     }
  //     if (user.status === 200) {
  //       toast.success(`Hi ${user?.data?.name}`);
  //       setBusinessId(user?.data?.customRole?.[0].businessId);
  //     } else {
  //       toast.error("Phone or Password invalid...!");
  //     }
  //   } catch (err: any) {
  //     toast.error("Phone or Password invalid...!");
  //   }
  // };

  return (
    <div className="grid bg-[#f5f5f5] my-auto min-h-screen place-items-center">
      <div className="flex flex-col items-center mt-4">
        <div className="flex justify-center pt-0 lg:pt-[2rem] mx-[3.375rem]">
          <Image className="lg:w-[15rem]" src={logo} alt="Hi Table Logo" />
        </div>
        <div className="flex lg:w-full justify-center mx-[3.375rem]">
          <Image
            className="lg:w-[30rem] lg:h-[30rem]"
            src={img}
            alt="Hi Table Logo"
          />
        </div>
      </div>

      <div className="flex flex-col lg:mb-[4rem] mb-[12rem] items-start">
        <div className="w-full text-center">
          <span className="font-[400] text-[#002D4B] text-[1rem] lg:text-[1.5rem] leading-[1.125rem]">
            Let’s get started
          </span>
        </div>
        <form>
          <div className="relative w-full px-[3.125rem] md:px-[15rem] lg:px-[25rem] mt-[2.5rem] mb-[5.89rem] ml-0 mr-0 space-y-4">
            <div className="relative w-full">
              <input
                onChange={handlePhoneNumberChange}
                type="text"
                id="floating_outlined3"
                className="block w-full pt-2 pb-3 pl-4 pr-[7rem] mb-0 ml-0 mr-0   bg-transparent border-gray-800 rounded-lg border focus:outline-none focus:border-[#50A466] dark:border-gray-600 peer"
                placeholder=" "
                maxLength={10}
                minLength={10}
                required
              />
              <label
                htmlFor="floating_outlined3"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:bg-[#f5f5f5] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#50A466] peer-focus:dark:text-[#50A466] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Phone number
              </label>
            </div>
          </div>

          <div className="flex justify-center mb-5">
            <button className="on_active_bounce bg-[#50A466] border rounded-full w-[20.5rem] font-[600] py-[1.3rem] text-white text-[18px] leading-[1.15rem]">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;

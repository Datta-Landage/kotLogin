import React, { useEffect, useState } from "react";
import img from "../assets/svg/img.svg";
import logo from "../assets/svg/logo.svg";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { useUserLogin } from "@/components/store/useUserLogin";
import { toast } from "react-toastify";
import { isEmpty } from "lodash-es";

function Business() {
  const router = useRouter();
  const { businessId } = router.query;

  return (
    <div className="grid  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3   px-4 py-4  ">
      <div className="max-w-lg py-3 bg-white rounded overflow-hidden shadow-lg relative cursor-pointer">
        <div> BusinessId {businessId} : Kot Here...</div>

        <div className="px-6 py-4 flex justify-center items-center">
          <div className="font-bold text-[1.5rem] mb-2 capitalize">
            The Coldest Sunset
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;

import React, { useEffect, useState } from "react";
import img from "../assets/svg/img.svg";
import logo from "../assets/svg/logo.svg";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { useUserLogin } from "@/components/store/useUserLogin";
import { toast } from "react-toastify";
import { isEmpty } from "lodash-es";

function HomePage() {
  const [businesses, setBusinesses] = useState([]);

  const router = useRouter();
  const { ownerId } = router.query;

  useEffect(() => {
    result();
  }, []);

  const clickBusiness = (businessId: string) => {
    router.push(`/business/${businessId}/home`);
  };

  const result = async () => {
    try {
      const config = {
        method: "get",
        url: "https://api.hipal.life/v1/businesses/get/allbusiness",
      };

      const businesses = await axios(config);

      if (businesses.status === 200) {
        setBusinesses(businesses?.data);
      } else {
        alert("wrong input");
      }
    } catch (err: any) {
      alert("wrong input");
    }
  };
  const filteredBusiness = businesses.filter((business: any) =>
    business?.staff.includes(ownerId)
  );
  console.log("filer", filteredBusiness);

  return (
    <div className="grid  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3   px-4 py-4  ">
      {filteredBusiness.map((business: any) => (
        <div
          onClick={() => clickBusiness(business?.id)}
          key={business?.id}
          className="max-w-sm py-3 bg-white rounded overflow-hidden shadow-lg relative cursor-pointer"
        >
          <div className="flex justify-center items-center">
            <Image
              className=""
              width={50}
              height={50}
              src={business.logo}
              alt="Sunset in the mountains"
            />
          </div>

          <div className="px-6 py-4 flex justify-center items-center">
            <div className="font-bold text-[1.5rem] mb-2 capitalize">
              {business.businessName || "The Coldest Sunset"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePage;

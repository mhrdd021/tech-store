import React from "react";

//Icons
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { BsLaptop } from "react-icons/bs";
import { CgAppleWatch } from "react-icons/cg";

const Features = () => {
  return (
    <div className="flex item-center justify-evenly w-10/12">
      <div className="flex items-center justify-center flex-col p-2 text-xl text-slate-400">
        <HiOutlineDevicePhoneMobile />
        <h3>آیفون</h3>
      </div>
      <div className="flex items-center justify-center flex-col p-2 text-xl text-slate-400">
        <BsLaptop />
        <h3>مک‌بوک</h3>
      </div>
      <div className="flex items-center justify-center flex-col p-2 text-xl text-slate-400">
        <CgAppleWatch />
        <h3>اپل‌واچ</h3>
      </div>
    </div>
  );
};

export default Features;

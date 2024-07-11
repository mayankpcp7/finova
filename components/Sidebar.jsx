import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="max-w-[1080px] py-5 px-5 mx-auto">
      <div className="flex justify-between w-full items-center">
        <Link href="/">
          <Image
            height={25.78}
            width={133.31}
            alt="logo"
            src="/assets/images/png/logo.png"
          />
        </Link>
        <div className="flex flex-col cursor-pointer">
          <span className="bg-white h-0.5 w-6"></span>
          <span className="bg-white mt-1.5 h-0.5 w-6"></span>
          <span className="bg-white mt-1.5 h-0.5 w-6"></span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

"use client";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import DropDown from "./DropDown";

const DesktopNavbar = () => {
  return (
    <div className="hidden h-[40px] w-auto bg-cover bg-bottom pt-[8px] lg:block">
      <div className="hidden justify-between lg:flex">
        <div className="ml-[50px] flex flex-row items-center space-x-7">
          <button>
            <Image
              src={"/images/user.svg"}
              alt="user icon"
              width={31}
              height={31}
            />
          </button>
          <SearchBar />
        </div>
        <nav className="mr-[35px] flex space-x-4">
          <div className="mr-[20px] flex space-x-5 font-semibold text-[#4C4C4C]">
            <Link href="/about">درباره ما</Link>
            <div className="-mt-2 flex cursor-pointer items-center">
              <DropDown>خدمات</DropDown>
            </div>
            <Link href="/immigration">مهاجرت</Link>
              <Link href="/">خانه</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DesktopNavbar;

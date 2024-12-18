"use client";
import Image from "next/image";
import Link from "next/link";
import woman from "../../public/images/woman-desktop.webp";
import DropDown from "./DropDown";
import SearchBar from "./SearchBar";
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
  return (
    <header>
      <MobileNavbar />

      {/** desktop view */}
      <div
        className="hidden h-[700px] w-auto bg-cover bg-bottom pt-[8px] lg:block"
        style={{ backgroundImage: `url(${woman.src})` }}
      >
        <div className="hidden justify-between lg:flex">
          <div className="ml-[50px] flex flex-row items-center space-x-7">
            <Link href={"/login"}>
              <Image
                src={"/images/user.svg"}
                alt="user icon"
                width={31}
                height={31}
              />
            </Link>
            <SearchBar />
          </div>
          <nav className="mr-[35px] flex items-center space-x-4">
            <div className="mr-[20px] flex space-x-5 font-semibold text-[#4C4C4C]">
              <Link href={"/about"}>درباره ما</Link>
              <div className="flex cursor-pointer items-center">
                <DropDown>خدمات</DropDown>
              </div>
              <Link href={"/immigration"}>مهاجرت</Link>
              <Link href={"/"}>خانه</Link>
            </div>
            <Image
              src={"/images/airplane.png"}
              alt="airplane"
              width={100}
              height={100}
            />
          </nav>
        </div>
        <p className="mr-[100px] mt-[130px] flex justify-end text-2xl font-bold 2xl:mr-[180px] 2xl:mt-[60px]">
          شما را هموار کنیم
          <span className="mx-1 text-[#04A2B9]"> مهاجرت </span>
          ما اینجا هستیم تا مسیر
        </p>
      </div>
    </header>
  );
};

export default Navbar;

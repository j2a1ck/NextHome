"use client"
import Image from "next/image";
import Link from "next/link";
import woman from "../../public/images/woman-desktop.webp";
import { CiSearch } from "react-icons/ci";
import DropDown from "./DropDown";

const Navbar = () => {
  return (
    <header>
      {/* mobile view */}
      <nav className="m-[17px] flex flex-row justify-between lg:hidden">
        <Image src={"/images/user.svg"} alt="user icon" width={31} height={31} />
        <Link href={"/"}>
          <Image
            className="md:w-[80px]"
            src={"/images/airplane.png"}
            alt="airplane"
            width={55}
            height={55}
            priority
          />
        </Link>
        <Image
          src={"/images/menu-burger.svg"}
          alt="burger menu"
          width={31}
          height={31}
        />
      </nav>

      {/** desktop view */}
      <div
        className="hidden h-[700px] w-auto bg-cover bg-bottom pt-[8px] lg:block"
        style={{ backgroundImage: `url(${woman.src})` }}
      >
        <div className="hidden justify-between lg:flex">
          <div className="ml-[50px] flex flex-row items-center space-x-7">
            <button>
              <Image src={"/images/user.svg"} alt="user icon" width={31} height={31} />
            </button>
            <div className="relative">
              <span className="absolute left-3 top-1/3">
                <CiSearch />
              </span>
              <input
                placeholder="search"
                className="h-[50px] w-[206px] rounded-xl bg-[#b5ecf4] pl-9 placeholder-gray-500"
              />
            </div>
          </div>
          <nav className="mr-[35px] flex space-x-4">
            <div className="mr-[20px] flex space-x-5 font-semibold text-[#4C4C4C]">
              <button>درباره ما</button>
              <div
                className="flex cursor-pointer items-center"
              >
                <DropDown>خدمات</DropDown>
              </div>
              <button>مهاجرت</button>
              <button>خانه</button>
            </div>
            <Image
              src={"/images/airplane.png"}
              alt="airplane"
              width={100}
              height={100}
            />
          </nav>
        </div>
        <p className="mr-[200px] mt-[100px] flex justify-end text-2xl font-bold">
          شما را هموار کنیم
          <span className="mx-1 text-[#04A2B9]"> مهاجرت </span>
          ما اینجا هستیم تا مسیر
        </p>
      </div>
    </header>
  );
};

export default Navbar;

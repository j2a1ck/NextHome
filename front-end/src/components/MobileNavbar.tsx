"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DropDown from "./DropDown";
import { IoMdClose } from "react-icons/io";


const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="m-[17px] flex flex-row items-center justify-between md:flex lg:hidden">
      <Link href={"/login"}>
        <Image
          src={"/images/user.svg"}
          alt="user icon"
          width={31}
          height={31}
        />
      </Link>
      <Image
        className="md:w-[80px]"
        src={"/images/airplane.png"}
        alt="airplane"
        width={75}
        height={75}
        priority
      />
      <button onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={"/images/menu-burger.svg"}
          alt="burger menu"
          width={31}
          height={31}
        />
      </button>
      {isOpen && (
        <div className="absolute right-5 top-20 z-10 flex h-80 w-60 flex-col items-center justify-center rounded-lg bg-[#F4F8F8]">
          <button onClick={() => setIsOpen(!isOpen)}>
            <IoMdClose />
          </button>
          <span className="my-4 w-20 border-b-2 border-black"></span>
          <Link href={"/"}>خانه</Link>
          <span className="my-4 w-32 border-b-2 border-black"></span>
          <Link href={"/immigration"}>مهاجرت</Link>
          <span className="my-4 w-32 border-b-2 border-black"></span>
          <div className="flex cursor-pointer items-center">
            <DropDown>خدمات</DropDown>
          </div>
          <span className="my-4 w-32 border-b-2 border-black"></span>

          <Link href={"/about"}>درباره ما</Link>
          <span className="my-4 w-20 border-b-2 border-black"></span>
        </div>
      )}
    </nav>
  );
}

export default MobileNavbar
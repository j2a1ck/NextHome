import Image from "next/image";
import Link from "next/link";

import woman from "../../public/woman-desktop.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
      {/* mobile view */}
      <div className="m-[17px] flex flex-row justify-between lg:hidden">
        <Image
          src={"user.svg"}
          alt="user icon"
          width={31}
          height={31}
        />
        <Link href={"/"}>
          <Image src={"/airplane.png"} alt="airplane" width={55} height={55}  priority />
        </Link>
        <Image
          src={"menu-burger.svg"}
          alt="burger menu"
          width={31}
          height={31}
        />
      </div>

      {/** desktop view */}
      <div
        className="hidden h-[700px] w-auto bg-cover bg-bottom pt-[8px] lg:block"
        style={{ backgroundImage: `url(${woman.src})` }}
      >
        <div className="hidden justify-between lg:flex">
          <div className="ml-[50px] flex flex-row items-center space-x-7">
            <button>
              <Image src={"user.svg"} alt="user icon" width={31} height={31} />
            </button>
            <div className="relative">
              <span className="absolute left-3 top-5">
                <CiSearch />
              </span>
              <input
                placeholder="search"
                className="h-[50px] w-[206px] rounded-xl bg-[#C7EDE6] pl-9"
              />
            </div>
          </div>
          <div className="mr-[35px] flex space-x-4">
            <div className="mr-[20px] flex space-x-5 font-semibold text-[#4C4C4C]">
              <button>درباره ما</button>
              <button className="flex items-center">
                <IoIosArrowDown /> خدمات
              </button>
              <button>مهاجرت</button>
              <button>خانه</button>
            </div>
            <Image
              src={"/airplane.png"}
              alt="airplane"
              width={100}
              height={100}
            />
          </div>
        </div>
        <p className="mr-[200px] mt-[100px] flex justify-end text-2xl font-bold">
          شما را هموار کنیم
          <span className="mx-1 text-[#04A2B9]"> مهاجرت </span>
          ما اینجا هستیم تا مسیر
        </p>
      </div>
    </div>
  );
};

export default Navbar;

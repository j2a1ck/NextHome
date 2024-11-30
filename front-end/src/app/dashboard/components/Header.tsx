"use client";
import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import Image from "next/image";

interface User {
  name: string;
  level: string;
  img: string;
}

const Header = () => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    fetch("/data/user.json")
      .then((response) => response.json())
      .then((json) => setUser(json.user[0]));
  }, []);

  return (
    <div className="flex h-[70px] items-center justify-between bg-[#273142]">
      <div className="flex items-center">
        <IoMenu className="ml-[30px] h-[25px] w-[25px] text-white" />
        <div className="ml-[24px] flex h-[40px] w-[388px] items-center rounded-3xl bg-[#323D4E] text-white">
          <IoIosSearch className="ml-3 h-6 w-5" />
          <div className="ml-3 text-base">Search</div>
        </div>
      </div>
      <div className="m-[90px] flex gap-[20px]">
        <Image
          src={user?.img || "/default.jpg"}
          alt="user pic"
          height={40}
          width={40}
          className="rounded-full"
        />
        <div className="text-sm text-white">
          {user?.name}
          <div className="text-xs text-gray-400">{user?.level}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

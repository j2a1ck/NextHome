import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

interface DropDownProp {
  children?: React.ReactNode;
}

const DropDown = ({ children }: DropDownProp) => {
  return (
    <div className="group relative inline-block">
      <button
        className="ml-2 rounded-md border border-transparent text-center text-sm transition-all disabled:pointer-events-none disabled:opacity-50"
        type="button"
      >
        <div className="flex text-base">
          <IoIosArrowDown />
          {children}
        </div>
      </button>
      <div className="hidden text-right group-hover:block">
        <ul
          role="menu"
          className="absolute z-10 min-w-[120px] overflow-auto rounded-lg border border-slate-300 bg-[#f4f6f3] p-1.5 focus:outline-none"
        >
          <li
            role="menuitem"
            className="hover:[#ffff] focus:[#ffff] active:[#ffff] block w-full cursor-pointer items-center rounded-md p-3 text-sm text-slate-800 transition-all"
          >
            <Link href={"/#consult"}>مشاوره</Link>
          </li>
          <li
            role="menuitem"
            className="hover:[#ffff] focus:[#ffff] active:[#ffff] block w-full cursor-pointer items-center rounded-md p-3 text-sm text-slate-800 transition-all"
          >
            <Link href={"/post/education"}>تحصیلی</Link>
          </li>
          <li
            role="menuitem"
            className="hover:[#ffff] focus:[#ffff] active:[#ffff] block w-full cursor-pointer items-center rounded-md p-3 text-sm text-slate-800 transition-all"
          >
            <Link href={"/post/work"}>کاری</Link>
          </li>
          <li
            role="menuitem"
            className="hover:[#ffff] focus:[#ffff] active:[#ffff] block w-full cursor-pointer items-center rounded-md p-3 text-sm text-slate-800 transition-all"
          >
            <Link href={"/post/invest"}> سرمایه گذاری</Link>
          </li>
          <li
            role="menuitem"
            className="hover:[#ffff] focus:[#ffff] active:[#ffff] block w-full cursor-pointer items-center rounded-md p-3 text-sm text-slate-800 transition-all"
          >
            <Link href={"/post/family"}>خانوادگی</Link>
          </li>
          <li
            role="menuitem"
            className="hover:[#ffff] focus:[#ffff] active:[#ffff] block w-full cursor-pointer items-center rounded-md p-3 text-sm text-slate-800 transition-all"
          >
            <Link href={"/post/lottery"}> لاتاری</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;

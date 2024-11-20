import { IoIosArrowDown } from "react-icons/io";

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
            مشاوره
          </li>
          <li
            role="menuitem"
            className="hover:[#ffff] focus:[#ffff] active:[#ffff] block w-full cursor-pointer items-center rounded-md p-3 text-sm text-slate-800 transition-all"
          >
            تحصیلی
          </li>
          <li
            role="menuitem"
            className="hover:[#ffff] focus:[#ffff] active:[#ffff] block w-full cursor-pointer items-center rounded-md p-3 text-sm text-slate-800 transition-all"
          >
            کاری
          </li>
          <li
            role="menuitem"
            className="hover:[#ffff] focus:[#ffff] active:[#ffff] block w-full cursor-pointer items-center rounded-md p-3 text-sm text-slate-800 transition-all"
          >
            سرمایه گذاری
          </li>
          <li
            role="menuitem"
            className="hover:[#ffff] focus:[#ffff] active:[#ffff] block w-full cursor-pointer items-center rounded-md p-3 text-sm text-slate-800 transition-all"
          >
            خانوادگی
          </li>{" "}
          <li
            role="menuitem"
            className="hover:[#ffff] focus:[#ffff] active:[#ffff] block w-full cursor-pointer items-center rounded-md p-3 text-sm text-slate-800 transition-all"
          >
            لاتاری
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;

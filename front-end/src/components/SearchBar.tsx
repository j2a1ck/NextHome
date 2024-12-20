import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import text from "../../public/data/text.json";

const SearchBar = () => {
  const items = text.cards;

  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // filter item
  const filteredItems = () => {
    return items
      .filter((item) => item.type.toLocaleLowerCase().startsWith(searchTerm))
      .slice(0, 5);
  };
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const path = event.composedPath();
      if (
        inputRef.current &&
        resultsRef.current &&
        !path.includes(inputRef.current) &&
        !path.includes(resultsRef.current)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div className="absolute -top-5 left-0 right-0 w-[246px]">
        <div className="absolute right-1 top-4 px-2">
          <CiSearch />
        </div>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={toggleDropdown}
          ref={dropdownRef}
          placeholder="جستجو"
          className="h-[50px] w-[246px] rounded-3xl bg-[#b5ecf4] px-10 text-right placeholder-gray-500 placeholder:text-right"
          dir="rtl"
        />
        {/* Dropdown */}
        {isOpen &&
          filteredItems().map(
            (item: { type: string; name: string }, index: number) => (
              <Link
                key={index}
                href={`/post/${item.name}`}
                className="mt-3 block cursor-pointer rounded-2xl bg-slate-200 px-4 py-2 text-right text-gray-700 hover:bg-gray-100 active:bg-blue-100"
              >
                {item.type}
              </Link>
            )
          )}
      </div>
    </div>
  );
};

export default SearchBar;

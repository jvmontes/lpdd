import { useRef, useEffect } from "react";
import Image from "next/image";
import filterIcon from "./icons/filter.png";
import xIcon from "./icons/x.png";
import { Industry } from "../types";

interface FilterProps {
  industries: Industry[];
  isIndustryDropdownOpen: boolean;
  setIsIndustryDropdownOpen: (isOpen: boolean) => void;
}

export default function Filter({
  industries,
  isIndustryDropdownOpen,
  setIsIndustryDropdownOpen,
}: FilterProps) {
  const industryDropdownRef = useRef<HTMLDivElement>(null);
  const industryDropdownButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        industryDropdownRef.current?.contains(target) ||
        industryDropdownButtonRef.current?.contains(target)
      ) {
        return;
      }
      setIsIndustryDropdownOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsIndustryDropdownOpen]);

  return (
    <div className="md:h-12 md:w-1/2 relative mt-4 md:mt-0">
      <button
        ref={industryDropdownButtonRef}
        onClick={() => setIsIndustryDropdownOpen(!isIndustryDropdownOpen)}
        className="w-full flex items-center justify-between px-4 py-2 md:h-full bg-[#f0d07d] rounded-lg"
      >
        <div className="flex items-center">
          <Image src={filterIcon} alt="Filter Icon" width={20} height={20} />
          <span className="ml-2 font-semibold">Filter by Industry</span>
        </div>
        <div className="ml-2">
          <Image src={xIcon} alt="Close Filter" width={14} height={14} />
        </div>
      </button>

      {isIndustryDropdownOpen && (
        <div
          ref={industryDropdownRef}
          className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg p-4 shadow-lg"
        >
          {industries.map((industry) => (
            <label key={industry} className="flex items-center space-x-2 mb-2">
              <input type="checkbox"></input>
              <span>{industry}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

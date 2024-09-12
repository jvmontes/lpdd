import { useRef, useEffect } from "react";
import Image from "next/image";
import filterIcon from "./icons/filter.svg";
import xIcon from "./icons/x.svg";
import checkmarkIcon from "./icons/checkmark.svg";
import { Industry } from "../types";
import "./styles/checkbox.css";

interface FilterProps {
  industries: Industry[];
  selectedIndustries: Industry[];
  setSelectedIndustries: (industries: Industry[]) => void;
  isIndustryDropdownOpen: boolean;
  setIsIndustryDropdownOpen: (isOpen: boolean) => void;
}

export default function Filter({
  industries,
  selectedIndustries,
  setSelectedIndustries,
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

  const handleIndustryChange = (industry: Industry) => {
    if (selectedIndustries.includes(industry)) {
      setSelectedIndustries(selectedIndustries.filter((i) => i !== industry));
    } else {
      setSelectedIndustries([...selectedIndustries, industry]);
    }
  };

  const removeIndustry = (industryToRemove: Industry) => {
    setSelectedIndustries(
      selectedIndustries.filter((industry) => industry !== industryToRemove)
    );
  };

  return (
    <div className="md:h-12 md:w-1/2 relative mt-4 md:mt-0">
      <button
        ref={industryDropdownButtonRef}
        onClick={() => setIsIndustryDropdownOpen(!isIndustryDropdownOpen)}
        className={`w-full flex items-center justify-between px-4 py-2 md:h-full bg-[#f0d07d] transition-all ease-out duration-300 ${
          isIndustryDropdownOpen
            ? "rounded-t-lg font-semibold"
            : "rounded-lg font-normal"
        } `}
      >
        <div className="flex items-center">
          <Image src={filterIcon} alt="Filter Icon" width={20} height={16} />
          <span className="ml-2">Filter by Industry</span>
        </div>
        <div
          className={`ml-2 transition-opacity ease-out duration-300 ${
            isIndustryDropdownOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={xIcon} alt="Close Filter" width={14} height={14} />
        </div>
      </button>

      <div
        className={`w-full flex  flex-wrap gap-2 ${
          selectedIndustries.length === 0 ? "mt-0" : "mt-4"
        } ${isIndustryDropdownOpen ? "hidden" : "block"}`}
      >
        {selectedIndustries.map((industry: Industry, index) => (
          <button
            key={index}
            onClick={() => removeIndustry(industry)}
            className="focus:outline-none flex items-center space-x-2 bg-gray-200 rounded-full px-3 py-1"
          >
            <span>{industry}</span>
            <Image src={xIcon} alt="Close Filter" width={14} height={14} />
          </button>
        ))}
      </div>

      <div
        ref={industryDropdownRef}
        className={`absolute w-full bg-white transition-all ease-out duration-300 transform ${
          isIndustryDropdownOpen
            ? "opacity-100 translate-y-0 max-h-[500px] p-4 shadow-lg border-l border-r border-b border-gray-300 rounded-b-lg"
            : "opacity-0 translate-y-0 max-h-0 p-0 shadow-none border-none"
        } overflow-hidden`}
      >
        {industries.map((industry) => (
          <label key={industry} className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              checked={selectedIndustries.includes(industry)}
              onChange={() => handleIndustryChange(industry)}
            ></input>
            <span>{industry}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

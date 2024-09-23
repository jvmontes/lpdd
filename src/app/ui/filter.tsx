import { useRef, useEffect } from "react";
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
    <div className="md:w-full relative mt-4 md:mt-0">
      <button
        ref={industryDropdownButtonRef}
        onClick={() => setIsIndustryDropdownOpen(!isIndustryDropdownOpen)}
        className={`w-full md:w-1/2 flex items-center justify-between px-4 py-2 md:h-12 
          bg-brandGold hover:shadow-lg
          transition-all ease-out duration-300 ${
            isIndustryDropdownOpen
              ? "rounded-t-lg font-semibold"
              : "rounded-lg font-normal"
          } `}
      >
        <div className="flex items-center">
          {/* Filter Icon SVG */}
          <svg
            width="20"
            height="16"
            viewBox="0 0 40 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-foreground"
          >
            <path
              d="M2 2L38 5.11111M6 8.22222L34 11.3333M10 14.4444L30 17.5556M14 20.6667L26 23.7778M18 26.8889L22 30"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <span className="ml-2">Filter by Industry</span>
        </div>
        <div
          className={`ml-2 transition-opacity ease-out duration-300 ${
            isIndustryDropdownOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* X Icon SVG */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L11 11M20 20L11 11M11 11L20 2M11 11L2 20"
              stroke="currentColor"
              strokeWidth="4"
            />
          </svg>
        </div>
      </button>

      <div
        className={`w-full flex flex-wrap gap-2 ${
          selectedIndustries.length === 0 ? "mt-0" : "mt-4"
        } ${isIndustryDropdownOpen ? "hidden" : "block"}`}
      >
        {selectedIndustries.map((industry: Industry) => (
          <button
            key={industry}
            onClick={() => removeIndustry(industry)}
            className="focus:outline-none flex items-center space-x-2 rounded-full px-3 py-1
            bg-gradient-to-r from-chipGradientFrom via-chipGradientVia to-chipGradientTo"
          >
            <span>{industry}</span>
            {/* X Icon SVG */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L11 11M20 20L11 11M11 11L20 2M11 11L2 20"
                stroke="currentColor"
                stroke-width="4"
              />
            </svg>
          </button>
        ))}
      </div>

      <div
        ref={industryDropdownRef}
        className={`absolute w-full md:w-1/2 bg-background transition-all ease-out duration-300 transform ${
          isIndustryDropdownOpen
            ? "opacity-100 translate-y-0 max-h-[500px] p-4 shadow-2xl border-l border-r border-b border-border rounded-b-lg"
            : "opacity-0 translate-y-0 max-h-0 p-0 shadow-none border-none"
        } overflow-hidden`}
      >
        {industries.map((industry) => (
          <label
            key={industry}
            className="flex items-center space-x-2 mb-2 cursor-pointer"
          >
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

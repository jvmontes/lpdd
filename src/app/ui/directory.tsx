"use client";
import { useEffect, useRef, useState } from "react";
import DirectoryOrg from "./directory-org";
import mockDirectoryData from "../mock/mock-directory";
import { Industry } from "../types";
import Image from "next/image";
import filterIcon from "./icons/filter.png";
import xIcon from "./icons/x.png";

export default function Directory() {
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);
  const industryDropdownRef = useRef<HTMLDivElement>(null);
  const industryDropdownButtonRef = useRef<HTMLButtonElement>(null);
  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>([]);

  const industries = [
    "Tech",
    "Healthcare",
    "Finance",
    "Professional Services",
    "Incubator",
    "Venture Capital",
  ].sort();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Close the dropdown if clicked outside the dropdown or the button
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
  }, []);

  return (
    <section className="flex flex-col items-center justify-between pt-8">
      <h1 className="text-center pb-8 text-2xl">Directory</h1>
      <div className="w-10/12 md:w-3/4 shadow rounded-lg bg-white p-4">
        {/* Search bar and filter */}
        <div className="mb-6 md:flex md:gap-x-2">
          <div className="md:h-12 md:w-1/2 relative mt-4 md:mt-0">
            <button
              ref={industryDropdownButtonRef}
              onClick={() => setIsIndustryDropdownOpen(!isIndustryDropdownOpen)}
              className="w-full 
              flex items-center justify-between
              px-4 py-2 md:h-full bg-[#f0d07d] rounded-lg"
            >
              <div className="flex items-center">
                <Image
                  src={filterIcon}
                  alt="Filter Icon"
                  width={20}
                  height={20}
                />
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
                  <label
                    key={industry}
                    className="flex items-center space-x-2 mb-2"
                  >
                    <input type="checkbox"></input>
                    <span>{industry}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
          <input
            type="text"
            placeholder="Search organizations..."
            className="w-full md:w-1/2 md:h-12 mt-4 md:mt-0 p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="grid gap-4">
          {mockDirectoryData.map((org) => (
            <DirectoryOrg key={org.id} {...org} />
          ))}
        </div>
      </div>
    </section>
  );
}

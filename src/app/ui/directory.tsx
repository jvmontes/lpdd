"use client";
import { useState } from "react";
import DirectoryOrg from "./directory-org";
import mockDirectoryData from "../mock/mock-directory";
import { Industry } from "../types";

import Filter from "./filter";
// import SearchBar from "./search-bar";

export default function Directory() {
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);
  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>([]);

  const industries: Industry[] = Object.values(Industry).sort((a, b) =>
    a.localeCompare(b)
  );

  return (
    <section className="flex flex-col items-center justify-between pt-8">
      <h1 className="text-center pb-8 text-2xl">Directory</h1>
      <div
        className="w-10/12 md:w-3/4 shadow rounded-lg bg-background p-4 
      min-w-[325px] min-h-[760px] md:min-h-[620px] md:min-w-[684px]
      dark:shadow-gray-500"
      >
        <div className="mb-6 md:flex md:gap-x-2">
          <Filter
            industries={industries}
            selectedIndustries={selectedIndustries}
            setSelectedIndustries={setSelectedIndustries}
            isIndustryDropdownOpen={isIndustryDropdownOpen}
            setIsIndustryDropdownOpen={setIsIndustryDropdownOpen}
          />

          {/* <SearchBar></SearchBar> */}
        </div>

        <div className="grid gap-4">
          {mockDirectoryData
            .filter((org) => {
              if (selectedIndustries.length === 0) {
                return true;
              }

              return org.industry_tags.some((tag) =>
                selectedIndustries.includes(tag)
              );
            })
            .map((org) => (
              <DirectoryOrg key={org.id} {...org} />
            ))}
        </div>
      </div>
    </section>
  );
}

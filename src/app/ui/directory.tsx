"use client";
import { useState } from "react";
import DirectoryOrg from "./directory-org";
import mockDirectoryData from "../mock/mock-directory";
import { Industry } from "../types";

import Filter from "./filter";

export default function Directory() {
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);
  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>([]);

  const industries: Industry[] = [
    Industry.Tech,
    Industry.Healthcare,
    Industry.Finance,
    Industry.ProfessionalServices,
    Industry.VentureCapital,
  ].sort();

  return (
    <section className="flex flex-col items-center justify-between pt-8">
      <h1 className="text-center pb-8 text-2xl">Directory</h1>
      <div className="w-10/12 md:w-3/4 shadow rounded-lg bg-white p-4">
        {/* Search bar and filter */}
        <div className="mb-6 md:flex md:gap-x-2">
          <Filter
            industries={industries}
            isIndustryDropdownOpen={isIndustryDropdownOpen}
            setIsIndustryDropdownOpen={setIsIndustryDropdownOpen}
          />

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

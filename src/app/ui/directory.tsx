"use client";
import { useEffect, useRef, useState } from "react";
import DirectoryOrg from "./directory-org";

const testData = [
  {
    id: 1,
    name: "Techqueria",
    logo_url: "/org-logos/techqueria/techqueria-logo.png",
    description:
      "Techqueria is the largest global community of Latinx professionals in tech.",
    industry_tags: ["Tech & Engineering"],
    locations: ["Chicago", "New York", "Los Angeles", "+4 more"],
    latino_serving: true,
    affinities: ["Latino"],
  },
  {
    id: 2,
    name: "ALPFA",
    logo_url: "/org-logos/alpfa/alpfa-logo.png",
    description:
      "ALPFA provides leadership development and career opportunities for Latinx professionals.",
    industry_tags: ["Professional Services"],
    locations: ["Chicago", "New York", "+2 more"],
    latino_serving: true,
    affinities: ["Latino", "Professional Services"],
  },
  {
    id: 6,
    name: "1871",
    logo_url: "/org-logos/1871/1871-logo.png",
    description:
      "1871 is a tech hub providing resources to help entrepreneurs build successful businesses.",
    industry_tags: ["Tech", "Incubator", "Venture Capital"],
    locations: ["Chicago"],
    latino_serving: false,
    affinities: ["Tech", "Women-serving", "Latino Programming"],
  },
];

export default function Directory() {
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);
  const industryDropdownRef = useRef<HTMLDivElement>(null);
  const industryDropdownButtonRef = useRef<HTMLButtonElement>(null);

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
    <section className="w-10/12 md:w-3/4">
      <h1 className="text-center pb-8 text-2xl">Directory</h1>

      {/* Search bar and filter */}
      <div className="mb-6 md:flex md:gap-x-2">
        <div className="md:h-12 md:w-1/2 relative mt-4 md:mt-0">
          <button
            ref={industryDropdownButtonRef}
            onClick={() => setIsIndustryDropdownOpen(!isIndustryDropdownOpen)}
            className="w-full px-4 py-2 md:h-full bg-gray-200 rounded-lg text-sm"
          >
            Filter by Industry
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
        {testData.map((org) => (
          <DirectoryOrg
            key={org.id}
            title={org.name}
            logo={org.logo_url}
            description={org.description}
            industry_tags={org.industry_tags}
          />
        ))}
      </div>
    </section>
  );
}

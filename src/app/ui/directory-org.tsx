import Image from "next/image";
import { DirectoryOrgType } from "../types";

export default function DirectoryOrg({
  logo_url,
  name,
  description,
  industry_tags,
}: DirectoryOrgType) {
  return (
    <div
      className="w-full cursor-pointer flex flex-col sm:flex-row items-center p-6 bg-card shadow-lg rounded-lg 
    hover:bg-cardHover
    border border-border shadow-gray-300
    dark:shadow-gray-800
    transition ease-in-out duration-300"
    >
      {/* Organization Logo */}
      <div
        className="w-36 sm:w-32 h-36 sm:h-32 flex-shrink-0 rounded-lg p-2
        mb-4 sm:mr-4 sm:mb-0
        dark:bg-gradient-to-r dark:from-logoGradientFrom dark:via-logoGradientVia dark:to-logoGradientTo
        "
      >
        <Image
          src={logo_url}
          alt={`${name} logo`}
          width={200}
          height={200}
          className="w-full h-full object-scale-down rounded-md"
        />
      </div>

      {/* Organization Info */}
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p
          className="text-sm md:text-base
        text-gray-600 dark:text-gray-400"
        >
          {description}
        </p>
        <div className="mt-1 flex flex-wrap gap-2 text-sm">
          {industry_tags.map((industry_tag, index) => (
            <div
              key={index}
              className="flex-shrink-0 text-xs items-center space-x-2 rounded-full px-3 py-1
              bg-blue-50 dark:bg-blue-900"
            >
              <span>{industry_tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

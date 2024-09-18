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
      className="w-full cursor-pointer flex items-center p-4 bg-background shadow rounded-lg 
    hover:bg-[rgba(94,129,244,.1)] dark:hover:bg-[rgba(94,129,244,.2)]  dark:shadow-gray-500
    transition ease-in-out duration-200"
    >
      {/* Organization Logo */}
      <div className="w-20 md:w-32 h-20 md:h-32 mr-4 flex-shrink-0">
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
        text-gray-600 dark:text-gray-300"
        >
          {description}
        </p>
        <div className="mt-1 flex flex-wrap gap-2 text-sm">
          {industry_tags.map((industry_tag, index) => (
            <div
              key={index}
              className="flex text-xs items-center space-x-2 rounded-full px-3 py-1
              bg-blue-50 dark:bg-blue-900"
            >
              <span> {industry_tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

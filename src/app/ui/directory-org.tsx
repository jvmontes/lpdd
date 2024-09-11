import Image from "next/image";

interface DirectoryOrgProps {
  logo: string;
  title: string;
  description: string;
  industry_tags: string[];
}

export default function DirectoryOrg({
  logo,
  title,
  description,
  industry_tags,
}: DirectoryOrgProps) {
  return (
    <div className="cursor-pointer flex items-center p-4 bg-white shadow rounded-lg hover:bg-[rgba(94,129,244,.1)] transition ease-in-out duration-200">
      {/* Organization Logo */}
      <div className="w-20 md:w-32 h-20 md:h-32 mr-4 flex-shrink-0">
        <Image
          src={logo}
          alt={`${title} logo`}
          width={200}
          height={200}
          className="w-full h-full object-scale-down rounded-md"
        />
      </div>

      {/* Organization Info */}
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
        <p className="mt-1 text-sm text-gray-400">
          {industry_tags.map((industry_tag) => (
            <span key={industry_tag}> {industry_tag}</span>
          ))}
        </p>
      </div>
    </div>
  );
}

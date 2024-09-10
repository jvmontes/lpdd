import Image from "next/image";

interface DirectoryOrgProps {
  logo: string;
  title: string;
  description: string;
  industry: string;
}

export default function DirectoryOrg({
  logo,
  title,
  description,
  industry,
}: DirectoryOrgProps) {
  return (
    <div className="flex items-center p-4 bg-white shadow rounded-lg">
      {/* Organization Logo */}
      <div className="w-16 h-16 mr-4">
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
        <p className="text-gray-600">{description}</p>
        <p className="mt-1 text-sm text-gray-400">{industry}</p>
      </div>
    </div>
  );
}

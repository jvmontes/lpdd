export default function DirectoryOrg({ logo, title, description, industry }) {
  return (
    <div className="flex items-center rounded-lg bg-white p-4 shadow">
      {/* Organization Logo */}
      <div className="mr-4 h-16 w-16">
        <img
          src={logo}
          alt={`${title} logo`}
          className="h-full w-full rounded-full object-cover"
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

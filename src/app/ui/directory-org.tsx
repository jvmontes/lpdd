export default function DirectoryOrg({ logo, title, description, industry }) {
  return (
    <div className="flex items-center p-4 bg-white shadow rounded-lg">
      {/* Organization Logo */}
      <div className="w-16 h-16 mr-4">
        <img
          src={logo}
          alt={`${title} logo`}
          className="w-full h-full object-cover rounded-full"
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

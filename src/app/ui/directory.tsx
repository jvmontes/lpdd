import DirectoryOrg from "./directory-org";

export default function Directory() {
  return (
    <section className="w-10/12 md:w-3/4">
      <h1 className="text-center pb-8">Directory</h1>
      {/* Header with search bar and industry tags */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search organizations..."
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <div className="flex mt-4 space-x-2">
          {/* Example industry tags */}
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
            Tech
          </span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
            Healthcare
          </span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
            Finance
          </span>
        </div>
      </div>

      {/* Static list of DirectoryOrg components */}
      <div className="grid gap-4">
        <DirectoryOrg
          logo="/path/to/logo.png"
          title="Techqueria"
          description="A short description about Org 1."
          industry="Tech"
        />
        <DirectoryOrg
          logo="/path/to/logo.png"
          title="ALPFA"
          description="A short description about Org 2."
          industry="Healthcare"
        />
      </div>
    </section>
  );
}

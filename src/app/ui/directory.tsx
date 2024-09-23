import DirectoryOrg from "./directory-org";

export default function Directory() {
  return (
    <section className="w-10/12 md:w-3/4">
      <h1 className="pb-8 text-center">Directory</h1>
      {/* Header with search bar and industry tags */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search organizations..."
          className="w-full rounded-lg border border-gray-300 p-2"
        />
        <div className="mt-4 flex space-x-2">
          {/* Example industry tags */}
          <span className="rounded-full bg-gray-200 px-3 py-1 text-sm">
            Tech
          </span>
          <span className="rounded-full bg-gray-200 px-3 py-1 text-sm">
            Healthcare
          </span>
          <span className="rounded-full bg-gray-200 px-3 py-1 text-sm">
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

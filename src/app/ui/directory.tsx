import DirectoryOrg from "./directory-org";

const testData = [
  {
    id: 1,
    name: "Techqueria",
    logo_url:
      "https://techqueria.org/wp-content/uploads/2019/02/techqueria-logo.png",
    description:
      "Techqueria is the largest global community of Latinx professionals in tech.",
    industry: ["Tech"],
    locations: ["Chicago", "New York", "Los Angeles", "+4 more"],
    latino_serving: true,
    affinities: ["Latino", "Tech"],
  },
  {
    id: 2,
    name: "ALPFA",
    logo_url: "https://www.alpfa.org/resource/resmgr/logos/alpfa_logo.png",
    description:
      "ALPFA provides leadership development and career opportunities for Latinx professionals.",
    industry: ["Professional Services"],
    locations: ["Chicago", "New York", "+2 more"],
    latino_serving: true,
    affinities: ["Latino", "Professional Services"],
  },
  {
    id: 6,
    name: "1871",
    logo_url: "https://1871.com/wp-content/uploads/2019/05/1871_logo.png",
    description:
      "1871 is a tech hub providing resources to help entrepreneurs build successful businesses.",
    industry: ["Tech", "Incubator", "Venture Capital"],
    locations: ["Chicago"],
    latino_serving: false,
    affinities: ["Tech", "Women-serving", "Latino Programming"],
  },
];

export default function Directory() {
  return (
    <section className="w-10/12 md:w-3/4">
      <h1 className="text-center pb-8 text-2xl">Directory</h1>
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

      <div className="grid gap-4">
        {testData.map((org) => (
          <DirectoryOrg
            key={org.id}
            title={org.name}
            logo={org.logo_url}
            description={org.description}
            industry={org.industry[0]}
          />
        ))}
      </div>
    </section>
  );
}

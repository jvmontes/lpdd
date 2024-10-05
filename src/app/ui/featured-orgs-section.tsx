import Image from "next/image";

export default function FeaturedOrgs() {
  return (
    <section className="my-10 border-2 border-red-400">
      <Image
        className=""
        src="/feat-orgs-bg-yellow.svg"
        width={1540}
        height={830}
        alt="Yellow background for featured organizations section"
      />
      <Image
        className=""
        src="/feat-orgs-bg-blue.svg"
        width={1540}
        height={500}
        alt="Yellow background for featured organizations section"
      />
      <h3>Featured Organizations</h3>
    </section>
  );
}

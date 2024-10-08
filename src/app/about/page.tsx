import Image from "next/image";
import React from "react";

const teamMembers = [
  {
    name: "Jorge Viramontes",
    role: "Role not specified",
    image: "/team-headshots/jorge-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/jorgealbertoviramontes/",
  },
  {
    name: "Gerardo Rodriguez",
    role: "Role not specified",
    image: "/team-headshots/gerardo-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/geraxrodriguez/",
  },
  {
    name: "Natasha Koller",
    role: "Role not specified",
    image: "/team-headshots/natasha-headshot.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Niza Cuéllar",
    role: "Role not specified",
    image: "/team-headshots/niza-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/niza-cuellar-0a8234188/",
  },
  {
    name: "Mario Galeno",
    role: "Role not specified",
    image: "/team-headshots/mario-headshot.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Francisco Gonzalez",
    role: "Role not specified",
    image: "/team-headshots/francisco-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/francisco-gonzalez-0906/",
  },
];

const AboutPage = () => {
  return (
    <section className="mx-auto max-w-screen-lg p-5">
      <div
        className="absolute inset-0 -z-10 bg-no-repeat"
        style={{
          backgroundImage: "url('/background-art1.svg')",
          backgroundSize: "35%",
          backgroundPosition: "bottom left",
        }}
      />
      <div
        className="absolute inset-0 -z-10 bg-no-repeat"
        style={{
          backgroundImage: "url('/background-art2.svg')",
          backgroundSize: "30%",
          backgroundPosition: "right top",
        }}
      />
      <h2 className="mb-5 text-center text-3xl">Meet Our Team</h2>
      <div className="mx-auto grid w-full justify-center gap-20 gap-y-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex w-64 flex-col items-center">
            <Image
              src={member.image}
              alt={member.name}
              width={500}
              height={500}
              className="rounded-lg border-none shadow-lg"
            />
            <div className="bg-lightblue-200 mt-[-10px] flex h-20 w-full flex-col items-center justify-center rounded-lg">
              <div className="flex w-full items-center justify-between px-2">
                <h3 className="overflow-hidden whitespace-nowrap text-right">
                  {member.name}
                </h3>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 mt-[-10px] transition-transform duration-300 hover:scale-110"
                >
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    className="transition-transform duration-300"
                  />
                </a>
              </div>
              <p className="mb-0 ml-[-100px] text-left text-gray-500">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutPage;

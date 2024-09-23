import { Koulen } from "next/font/google";
import { Lexend } from "next/font/google";
import Image from "next/image";

const koulen = Koulen({
  weight: "400",
  subsets: ["latin"],
});

const lexendMedium = Lexend({
  weight: "500",
  subsets: ["latin"],
});

export default function HomeHero() {
  return (
    <section className="relative h-[50vh] w-full bg-black md:h-[75vh]">
      <div className="h-full w-full">
        <Image
          src="/hero.jpg"
          priority={true}
          width={2048}
          height={1365}
          className="h-full w-full object-cover object-[0%_80%] opacity-40"
          alt="Group of people listening to a panel discussion with panelists seated on stage."
        />
      </div>
      <div className="absolute bottom-[10%] left-[5%] md:bottom-[20%]">
        <h1
          className={`${lexendMedium.className} pb-3 text-2xl text-white md:text-3xl`}
        >
          Latiné Professional Development Directory
        </h1>
        <h2 className={`${koulen.className} text-xl text-white md:text-8xl`}>
          Find Your Community
        </h2>
      </div>
    </section>
  );
}

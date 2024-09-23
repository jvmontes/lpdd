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
    <section className="relative h-[25vh] w-full bg-black md:h-[50vh] lg:h-[65vh]">
      <div className="h-full w-full">
        <Image
          src="/hero.jpg"
          priority={true}
          width={2048}
          height={1365}
          className="h-full w-full object-cover opacity-40 lg:object-[30%_60%]"
          alt="Group of people listening to a panel discussion with panelists seated on stage."
        />
      </div>
      <div className="absolute bottom-[25%] left-[5%] flex flex-col-reverse sm:flex-col">
        <h1
          className={`${lexendMedium.className} pb-3 text-xs text-white md:text-3xl`}
        >
          Latiné Professional Development Directory
        </h1>
        <h2 className={`${koulen.className} text-4xl text-white md:text-9xl`}>
          Find Your Community
        </h2>
      </div>
    </section>
  );
}

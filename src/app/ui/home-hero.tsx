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
    <section className="relative w-full h-[30vh] md:h-[75vh] bg-black">
      <div className="w-full h-full">
        <Image
          src="/hero.jpg"
          priority={true}
          width={2048}
          height={1365}
          className="w-full h-full object-cover sm:object-[0%_80%] opacity-40"
          alt="Group of people listening to a panel discussion with panelists seated on stage."
        />
      </div>

      <div className="absolute bottom-[20%] left-[5%] flex flex-col-reverse sm:flex-col">
        <h1 className={`${lexendMedium.className} text-white text-xs md:text-3xl`}>
          Latiné Professional Development Directory
        </h1>
        <h2 className={`${koulen.className} text-white text-4xl md:text-8xl`}>
          Find Your Community
        </h2>
      </div>

      {/* <div>
        <div className="flex flex-col sm:flex-col-reverse">
          <h1 className="text-2xl">This is H1</h1>
          <h2 className="text-xl">This is H2</h2>
        </div>
      </div> */}
    </section>
  );
}

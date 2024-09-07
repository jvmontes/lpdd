import { Koulen } from "next/font/google";
import { Lexend } from "next/font/google";

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
    <section className="relative w-full h-[50vh] md:h-[75vh] bg-slate-900">
      <div className="absolute bottom-[10%] md:bottom-[20%] left-[5%]">
        <h1
          className={`${lexendMedium.className} text-white text-2xl md:text-3xl pb-3`}
        >
          Latiné Professional Development Directory
        </h1>
        <h2 className={`${koulen.className} text-white text-6xl md:text-8xl`}>
          Find Your Community
        </h2>
      </div>
    </section>
  );
}

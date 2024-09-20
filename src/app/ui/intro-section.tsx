import { Lexend } from "next/font/google";
import Link from "next/link";

const lexendRegular = Lexend({
  weight: "400",
  subsets: ["latin"],
});
const lexendMedium = Lexend({
  weight: "500",
  subsets: ["latin"],
});
const lexendSemi = Lexend({
  weight: "600",
  subsets: ["latin"],
});

export default function IntroSection() {
  return (
    <section className="border border-black w-full py-8 text-center">

        <p className={`px-8 text-[#717171] text-xs ${lexendMedium.className}`}>We strive to provide a comprehensive and updated list of organizations that are dedicated to</p>
        
        <h2 className={`my-3 px-1 text-lg ${lexendSemi.className}`}>Fostering The Growth And Development Of Latiné Professionals</h2>
        
        <Link href="/about" className="">About</Link>
    </section>
  );
}

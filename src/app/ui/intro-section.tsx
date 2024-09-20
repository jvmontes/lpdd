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
    <section className="w-full py-8 text-center">

        <p className={`mx-6 text-[#717171] text-xs ${lexendMedium.className}`}>We strive to provide a comprehensive and updated list of organizations that are dedicated to</p>
        
        <h2 className={`mt-4 mb-5 mx-6 text-lg ${lexendSemi.className}`}>Fostering The Growth And Development Of Latiné Professionals</h2>
        {/* <p className={`my-3 text-lg ${lexendSemi.className}`}>Fostering The Growth And Development Of Latiné Professionals</p> */}
        
        <Link href="/about" className={`px-5 py-1 border-2 rounded-full border-[#AF8D86] text-[#AF8D86] text-sm ${lexendRegular.className}`}>About</Link>
    </section>
  );
}

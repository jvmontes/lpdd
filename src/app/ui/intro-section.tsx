import { Lexend } from 'next/font/google'
import Link from 'next/link'

// const lexendRegular = Lexend({
//   weight: "400",
//   subsets: ["latin"],
// });
// const lexendMedium = Lexend({
//   weight: "500",
//   subsets: ["latin"],
// });
// const lexendSemi = Lexend({
//   weight: "600",
//   subsets: ["latin"],
// });
const lexend = Lexend({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
})

export default function IntroSection() {
    return (
        <section className={`w-full py-8 sm:py-20 text-center ${lexend.className}`}>
            <p className="mx-6 text-xs sm:text-2xl font-medium text-[#717171]">
                We strive to provide a comprehensive and updated list of
                organizations that are dedicated to
            </p>
            <h2 className="mx-6 mb-4 mt-2 text-lg sm:text-4xl font-semibold">
                Fostering The Growth And Development Of Latiné Professionals
            </h2>
            <Link
                href="/about"
                className="rounded-full border-2 border-[#AF8D86] px-5 sm:px-8 py-1 sm:py-4 text-sm sm:text-2xl font-normal text-[#AF8D86]"
            >
                About
            </Link>
        </section>
    )
}

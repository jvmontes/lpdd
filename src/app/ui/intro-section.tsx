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
        <section
            className={`w-full py-8 text-center sm:py-20 ${lexend.className}`}
        >
            <p className="mx-6 text-xs font-medium text-[#717171] sm:text-2xl">
                We strive to provide a comprehensive and updated list of
                organizations that are dedicated to
            </p>
            <h2 className="mx-6 mb-4 mt-2 text-lg font-semibold sm:mx-auto sm:mb-10 sm:mt-4 sm:max-w-3xl sm:text-4xl">
                Fostering The Growth And Development Of Latiné Professionals
            </h2>
            <Link
                href="/about"
                className="rounded-full border-2 border-[#AF8D86] px-5 py-1 text-sm font-normal text-[#AF8D86] sm:px-8 sm:py-4 sm:text-2xl"
            >
                About
            </Link>
        </section>
    )
}

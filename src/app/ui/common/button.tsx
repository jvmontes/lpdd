import Link from "next/link";

interface ButtonProps {
  href: string;
  title: string;
}

export default function Button({href, title}: ButtonProps) {
  return (
    <Link
      href={href}
      className="rounded-full border-2 px-5 py-1 text-sm font-normal
    border-brandDustyRose text-brandDustyRose
    sm:border-4 sm:px-8 sm:py-4 sm:text-2xl"
    >
      {title}
    </Link>
  )
}
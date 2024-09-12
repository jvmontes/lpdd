"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    name: "ABOUT",
    href: "/about",
  },
  {
    name: "CONTACT",
    href: "/contact",
  },
  {
    name: "PLACEHOLDER",
    href: "/placeholder",
  },
  {
    name: "LOGIN",
    href: "/login",
  },
];


export default function NavLinks() {
  const pathname = usePathname();
  
  const baseClasses = "text-[0.70rem] pr-2 tracking-tighter sm:text-sm sm:pl-8 sm:tracking-normal";
  const activeClasses = "text-blue-300 underline scale-95";
  const inactiveClasses = "text-white";
  
  return (
    <div className="flex">
      {links.map(({ name, href}) => {
        const isActiveLink = pathname === href;

        return (
          <Link key={name} href={href} className="flex items-center">
            <p
              className={clsx(
                baseClasses,
                isActiveLink ? activeClasses : inactiveClasses
              )}
            >
              {name}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

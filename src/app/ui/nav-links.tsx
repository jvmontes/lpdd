"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "ABOUT",
    href: "/about",
  },
  {
    name: "CONTACT",
    href: "/contact",
  },
  // {
  //   name: "LOGIN",
  //   href: "/login",
  // },
];

export default function NavLinks() {
  const pathname = usePathname();

  const activeClasses = "text-blue-300 underline scale-95";
  const inactiveClasses = "text-white";

  return (
    <div className="flex">
      {links.map(({ name, href }) => {
        const isActiveLink = pathname === href;

        return (
          <Link key={name} href={href}>
            <p
              className={`text-sm pr-2 tracking-tighter sm:pl-8 sm:tracking-normal
                transition ease-in-out duration-300
                ${clsx(isActiveLink ? activeClasses : inactiveClasses)}`}
            >
              {name}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

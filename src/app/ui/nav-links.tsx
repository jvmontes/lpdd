"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex justify-end">
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href}>
            <p
              className={clsx(
                "px-4",
                pathname === link.href && "text-gray-800 underline"
              )}
            >
              {link.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

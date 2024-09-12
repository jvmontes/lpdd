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
  return (
    <div className="flex justify-end">
      {links.map((link) => {
        const isActiveLink = pathname === link.href;

        return (
          <Link key={link.name} href={link.href} className="flex items-center">
            <p
              className={clsx(
                // text-xs, sm, base
                // tracking-tighter, tight, normal
                // light, extralight
                "text-[0.70rem] pl-2 tracking-tighter",
                isActiveLink ? "text-white underline" : "text-white"
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

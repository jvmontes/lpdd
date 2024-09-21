'use client';

import Link from "next/link";
import NavLinks from "./nav-links";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from "next/image";

export default function NavBar() {
  const pathname = usePathname();

  const navClasses = clsx(
    "w-full h-14 flex items-center justify-between px-2 bg-slate-900",
    pathname === '/' && "absolute z-10 sm:bg-transparent"
  );

  return (
    <nav className={navClasses}>
        <Link href="/" className="flex items-center mr-12">
          <Image
            src="/logo.svg"
            width={40}
            height={40}
            alt="Logo for Latiné Professional Development Directory"
          />
          <p className="text-xl text-white tracking-tighter">LPDD</p>
        </Link>
        <NavLinks />
    </nav>
  );
}


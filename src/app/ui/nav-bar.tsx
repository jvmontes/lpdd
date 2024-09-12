'use client';

import Link from "next/link";
import NavLinks from "./nav-links";
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  const classes = "w-full h-16 text-white flex flex-col justify-center";
  const navbarClasses = pathname === '/'
    ? classes + " absolute z-10"
    : classes + " bg-slate-600"; // change to slate-900

  return (
    <nav className={navbarClasses}>
      <div className="w-full flex justify-between px-4">
        <Link href="/">
          <p className="text-2xl">LPDD</p>
        </Link>
        <NavLinks />
      </div>
    </nav>
  );
}


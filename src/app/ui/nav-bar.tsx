'use client';

import Link from "next/link";
import NavLinks from "./nav-links";
import { usePathname } from 'next/navigation';
import Image from "next/image";

export default function NavBar() {
  const pathname = usePathname();
  let classes = "w-full h-14 text-white flex flex-col justify-center bg-slate-900";
  if (pathname === '/') { 
    classes = classes + ' md:absolute z-10 md:bg-transparent'
  }
  // const navbarClasses = pathname === '/'
  //   ? classes + " md:absolute z-10"
  //   : classes + " bg-slate-900"; // change to slate-900

  return (
    <nav className={classes}>
      {/* div surrounds all navbar contents, justify-between aligns first item to start (left) and last to end (right) */}
      <div className="flex justify-between pl-2 pr-3 h-full">
        <Link href="/" className="flex items-center h-full">
            {/* original is 320 by 318 */}
            <Image
              src="/logo.svg"
              width={45}
              height={45}
              // 5/6, 4/6, 3/6, 4/5, 3/5
              // className="h-5/6"
              alt="Logo for Latiné Professional Development Directory"
            />
            <p className="text-xl  tracking-tighter">LPDD</p>
        </Link>
        <NavLinks />
      </div>
    </nav>
  );
}


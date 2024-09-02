import Link from "next/link";
import NavLinks from "./nav-links";

export default function NavBar() {
  return (
    <div className="w-full justify-between flex h-8 text-blue-800">
      <Link key={"Home"} href={"/"}>
        <p className="px-4">Home</p>
      </Link>
      <NavLinks />
    </div>
  );
}

import Image from "next/image";
import Directory from "./ui/directory";
import HomeHero from "./ui/home-hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-2">
      <HomeHero></HomeHero>

      <div>
        <p>Placeholder Intro Paragraph with link to About</p>
      </div>

      <div>
        <p>Placeholder Featured Organizations</p>
      </div>

      <Directory></Directory>
    </main>
  );
}

import Image from "next/image";
import Directory from "./ui/directory";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>Placeholder Hero Image</p>
      </div>

      <div>
        <p>Placeholder Intro Paragraph with link to About</p>
      </div>

      <div>
        <p>Placeholder Featured Organizations</p>
      </div>

      <div>
        <h1>Latiné Professional Development Directory</h1>
        <Directory></Directory>
      </div>
    </main>
  );
}

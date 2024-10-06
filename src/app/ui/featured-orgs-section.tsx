import Image from "next/image";
import { Lexend } from "next/font/google";

const lexendBold = Lexend({
  weight: "700",
  subsets: ["latin"],
});

export default function FeaturedOrgs() {
  return (
    <section className="grid w-full grid-cols-10 grid-rows-3 border-2 border-red-400">
      <Image
        className="col-span-full row-span-full w-full"
        src="/vectors/cropped-yellow-vector.svg"
        width={1540}
        height={830}
        alt="Yellow background for featured organizations section"
      />

      <Image
        className="col-span-full row-span-full w-full self-start"
        src="/vectors/cropped-blue-vector.svg"
        width={1540}
        height={500}
        alt="Blue background for featured organizations section"
      />

      <div className="col-span-full row-span-1 row-start-1 flex items-center justify-center border-2 border-black">
        <h3
          className={`${lexendBold.className} text-5xl text-white antialiased`}
        >
          Featured Organizations
        </h3>
      </div>
    </section>
  );
}

{
  /* <section className="relative my-10 max-h-[800px] w-full border-2 overflow-hidden border-red-400">
<Image
  className="w-full"
  src="/vectors/cropped-yellow-vector.svg"
  width={1540}
  height={830}
  alt="Yellow background for featured organizations section"
/>
<Image
  className="absolute top-0 w-full"
  src="/vectors/cropped-blue-vector.svg"
  width={1540}
  height={500}
  alt="Blue background for featured organizations section"
/>
<h3
  className={`${lexendBold.className} absolute top-[17%] w-full border border-white text-center text-3xl text-white`}
>
  Featured Organizations
</h3>
</section> */
}

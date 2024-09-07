import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/nav-bar";

const inter = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Latiné Professional Development Directory",
  description:
    "A directory for organizations and events in the Chicagoland area to support the professional development of Latiné professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

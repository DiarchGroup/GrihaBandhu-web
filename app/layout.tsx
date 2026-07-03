import type { Metadata } from "next";
import { Big_Shoulders, Manrope } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import FloatingContact from "./components/FloatingContact";
import LenisProvider from "./components/LenisProvider";

const bigShoulders = Big_Shoulders({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  adjustFontFallback: false,
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Griha Bandhu | Construction Partner",
  description:
    "Griha Bandhu — your trusted partner for residential and commercial construction, from foundation to finish.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bigShoulders.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LenisProvider />
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}

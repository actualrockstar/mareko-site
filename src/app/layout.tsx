
import type { Metadata } from "next";
import { Silkscreen } from "next/font/google";
import "./globals.css";
import { convertAniBinaryToCSS } from "ani-cursor";


const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: "400"
});



export const metadata: Metadata = {
  title: "Mareko Offical Website",
  description: "Built by Mareko",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={silkscreen.className}>{children}</body>
    </html>
  );
}

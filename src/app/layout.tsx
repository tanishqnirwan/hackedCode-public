import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hackEDCode 2.0",
  description: "hackEDCode 2.0 is annual hackathon of GGSIPU East Delhi Campus organised by SDC USAR.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar scrollbar-thumb-rounded-full scrollbar-thumb-indigo-900 scrollbar-w-24  scrollbar-track-black">
      <body className={inter.className}>
        {children}     
      </body>
      <Script defer async src="https://apply.devfolio.co/v2/sdk.js" />
    </html>
  );
}

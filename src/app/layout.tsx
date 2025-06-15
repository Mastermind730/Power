/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sofia_Sans } from 'next/font/google'
import './globals.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { sofiaPro } from "./utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Sofia_Sans({
  subsets: ['latin'],
  weight: [ '100','200','300','400'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Power",
  description: "Power | Clover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sofiaPro.variable} ${sofiaPro.className}  antialiased`}
        >
        <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}

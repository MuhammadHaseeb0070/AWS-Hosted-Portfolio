import type { Metadata } from "next";
import { Roboto_Flex, Anton } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "Muhammad Haseeb | Full Stack Developer & AWS Cloud Engineer",
  description: "Muhammad Haseeb – Full Stack Developer and AWS Cloud Engineer. React, React Native, Kotlin, Node.js, Express, PostgreSQL. Portfolio, projects, and contact.",
  keywords: ["Muhammad Haseeb", "Full Stack Developer", "AWS Cloud Engineer", "React", "React Native", "Kotlin", "Node.js"],
  authors: [{ name: "Muhammad Haseeb" }],
  openGraph: {
    type: "website",
    title: "Muhammad Haseeb | Full Stack Developer & AWS Cloud Engineer",
    description: "Full Stack Developer and AWS Cloud Engineer. Explore projects and get in touch.",
    images: ["/images/profileimage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoFlex.variable} ${anton.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

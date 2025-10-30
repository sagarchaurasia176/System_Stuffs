import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";
import NavigationPage from "./ui/NavigationPage";
// import Header from "./components/header/Navbar";
// import Provider from "./components/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevOpsBySagar",
  description: "A blog about DevOps practices and tools",
};

// Root layouts 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationPage/>
        <main>{children}</main>
      </body>
    </html>
  );
}

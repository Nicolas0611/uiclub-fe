import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "uiclub",
  description: "UI Club for UX/UI Designers and Developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-background`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

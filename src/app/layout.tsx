import { Header } from "@/components/shared";
import { HeroUIProviders } from "@/providers/HeroUIProvider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className="light">
      <body className={`${poppins.className} antialiased`}>
        <HeroUIProviders>
          <Header />
          {children}
        </HeroUIProviders>
      </body>
    </html>
  );
}

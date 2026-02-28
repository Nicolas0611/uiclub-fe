import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { HeroUIProviders, NextAuthProvider } from "@/providers";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UI Club — A Curated Repository of Design Systems",
  description:
    "Discover reusable components, specs, and real-world UI patterns in one place. Rated and ready to use. Join the Club, Design Smarter.",
  keywords: [
    "UI Club",
    "design systems",
    "UI components",
    "frontend",
    "developer tools",
    "React UI",
    "component library",
  ],
  authors: [{ name: "UI Club Team" }],
  creator: "UI Club",
  openGraph: {
    title: "UI Club — A Curated Repository of Design Systems",
    description:
      "Explore top-rated UI components with previews, specs, and usage guides. Build better, faster.",
    url: "https://uiclub.vercel.app",
    siteName: "UI Club",
    type: "website",
  },
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
          <ToastContainer />
          <NextAuthProvider>{children}</NextAuthProvider>
        </HeroUIProviders>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

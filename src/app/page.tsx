import Button, { ButtonProps } from "@/components/shared/Button/Button";
import { Metadata } from "next";

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
    url: "https://uiclub.dev", // replace with your actual domain
    siteName: "UI Club",
    images: [
      {
        url: "https://uiclub.dev/og-image.png", // add your OG image here
        width: 1200,
        height: 630,
        alt: "UI Club – Preview of components",
      },
    ],
    type: "website",
  },
};

export default function Home() {
  interface ContentProps {
    title: string;
    description: string;
    links: ButtonProps[];
  }
  const content: ContentProps = {
    title: "Welcome to UI Club",
    description:
      "Streamline your workflow by leveraging the combined expertise of leading Design Systems and UI libraries, all synthesized in one convenient place to help you research, define, and create UI components effortlessly.",
    links: [
      {
        title: "View Components",
        variant: "solid",
        path: "/design-systems",
      },
      {
        title: "View Roadmap",
        variant: "bordered",
        path: "/design-systems",
      },
    ],
  };
  return (
    <section className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          ></div>
        </div>
        <div className="mx-auto max-w-3xl py-20 z-10">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 bg-primary_light py-1 text-sm/6 text-gray-600 ring-1 ring-primary hover:ring-primary_dark">
              Last updated 6 April, 2025 ✨
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl text-neutral-800 font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Join the <span className="text-primary">Club</span>, Design
              Smarter. Ship Faster.
            </h1>
            <p className="mt-8 text-lg font-regular text-pretty text-gray-500 sm:text-xl/8">
              UI Club is a curated repository of reusable UI components and
              design systems — a one-stop destination for designers and
              developers looking to explore, evaluate, and integrate quality UI
              elements into their projects.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {content.links.map((link, index) => (
                <Button
                  key={`link_${index}`}
                  path={link.path}
                  title={link.title}
                  variant={link.variant}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-20 right-10 h-60 w-[40rem] transform-gpu md:bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] rotate-[-10deg] rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
}

import BrowserMock from "@/components/custom/BrowserMock/BrowserMock";
import HomeCard from "@/components/custom/HomeCard/HomeCard";
import HomePill from "@/components/custom/HomePill/HomePill";
import Button, { ButtonProps } from "@/components/shared/Button/Button";

interface ContentProps {
  preTitle: string;
  title: string;
  description: string;
  links: ButtonProps[];
}
export default function Home() {
  const content: ContentProps = {
    preTitle: "Last updated 20 Jul, 2025 ✨",
    title: "Welcome to UI Club",
    description:
      "UI Club is a curated repository of reusable UI components and design systems — a one-stop destination for designers and developers looking to explore, evaluate, and integrate quality UI elements into their projects.",
    links: [
      {
        title: "View Design Systems",
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

  const components = [
    { name: "Avatar", category: "Action", image: "Avatar" },
    { name: "Chip", category: "Status", image: "Chip" },
    { name: "Button", category: "Action", image: "Button" },
    { name: "Dialog", category: "Layout", image: "Dialog" },
    { name: "Dropdown", category: "Input", image: "Dropdown" },
    { name: "Badge", category: "Status", image: "Badge" },
  ];

  return (
    <>
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
            <HomePill title={content.preTitle} />
            <div className="text-center">
              <h1 className="text-5xl text-neutral-800 font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Join the <span className="text-primary">Club</span>, Design
                Smarter. Ship Faster.
              </h1>
              <p className="mt-8 text-lg font-regular text-pretty text-gray-500 sm:text-xl/8">
                {content.description}
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

      <section className="mb-36">
        <BrowserMock components={components}>
          {(comp) => <HomeCard {...comp} />}
        </BrowserMock>
      </section>

      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-600 text-sm">
              © 2025 UI Club. Built with ❤️ for all designers and developers.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

import { Navbar } from "@/components/shared";

export default function DesignLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <div className="z-10 absolute -right-60 h-60 w-[36rem] transform-gpu md:bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] rotate-[-10deg] rounded-full blur-3xl "></div>
          {children}
        </div>
      </div>
    </>
  );
}

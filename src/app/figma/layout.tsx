import { Navbar } from "@/components/shared";

export default function FigmaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </>
  );
}

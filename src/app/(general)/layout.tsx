import { Navbar } from "../components/shared";

function GeneralLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default GeneralLayout;

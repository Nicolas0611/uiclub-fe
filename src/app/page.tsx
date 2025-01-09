import ProfileContainer from "@/components/custom/ProfileContainer";

export default function Home() {
  return (
    <section className="py-10 px-20">
      <div className="flex gap-4">
        <ProfileContainer />
        <div className="bg-slate-600 w-1/2">hola</div>
      </div>
    </section>
  );
}

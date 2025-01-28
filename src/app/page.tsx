import ProfileContainer from "@/components/custom/ProfileContainer";

//Todo Add Metadata.
export default function Home() {
  return (
    <section className="py-7 px-20">
      <div className="flex gap-4">
        <ProfileContainer />
        <div className="bg-white border-2 border-neutral-100 rounded-xl w-1/2">
          hola
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import React from "react";
import LinkButton from "../shared/LinkButton/LinkButton";

const ProfileContainer = () => {
  return (
    <section className=" flex flex-col items-center py-20 gap-7 bg-white border-2 border-neutral-100 w-full flex-grow rounded-md ">
      <Image
        src="/logoProfile.svg"
        alt="profile"
        width={120}
        height={120}
        className="rounded-full"
      />
      <div className="flex flex-col items-center gap-1">
        <h1 className="capitalized text-lg">Welcome to UI Club</h1>
        <p className="capitalized text-neutral-500">
          Hi, my name is Daniel, I&apos;m the CTO here at Kinsta.
        </p>
      </div>

      <div className="flex gap-3">
        <LinkButton
          path="/designsystems"
          title="View Components"
          variant="contained"
        />
        <LinkButton
          path="/designsystems"
          title="View Design News"
          variant="outlined"
        />
      </div>
    </section>
  );
};

export default ProfileContainer;

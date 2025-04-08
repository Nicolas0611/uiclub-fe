"use client";

import dynamic from "next/dynamic";
import animationData from "../../../../public/favicon.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LoadingState = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ height: 400, width: 400 }}
      />
    </div>
  );
};

export default LoadingState;

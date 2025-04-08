"use client";

import Lottie from "lottie-react";
import animationData from "../../public/favicon.json";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
        style={{ height: 400, width: 400 }}
      />
    </div>
  );
};

export default Loading;

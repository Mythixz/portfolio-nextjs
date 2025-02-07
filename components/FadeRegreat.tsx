import React from "react";
import SplitText from "@/src/blocks/TextAnimations/SplitText/SplitText";

const TestSplitText: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <SplitText
        text="Welcome to My Portfolio"
        className="text-4xl font-bold"
        animationFrom={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        delay={50}
      />
    </div>
  );
};

export default TestSplitText;

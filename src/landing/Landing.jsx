// import React, { Suspense } from "react";
import Hero from "./Hero";

import WelcomeArticle from "./WelcomeArticle";
const Landing = () => {
  return (
    <div className="w-full">
      <Hero />
      <WelcomeArticle />
    </div>
  );
};

export default Landing;

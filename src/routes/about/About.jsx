//import React from "react";

import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Pizza Time || About";
  });

  return (
    <div className="mx-auto w-full max-w-screen-xl  py-12 lg:pt-14">
      <div className="md:flex md:justify-between">
        <div className="bg-white about  py-14 lg:px-8  flex">
          <div className=" grid grid-cols-1 ">
            <div>
              <h1 className="center">Pizza Time || About</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;



import Bg_video from "../assets/images/hero/hero-bg.mp4";
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <div className="bg-black Background-video ">
      <video autoPlay muted loop id="video-bg">
        <source src={Bg_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative isolate px-6 pt-14 lg:px-8  video-text">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center welcome-text">
            <span>Welcome</span>
            <h1 className="text-xl  font-bold   sm:text-6xl">
              TRY SOMETHING AMAZING
            </h1>
            <p className="mt-6 text-lg leading-8">
              Ordering your fave Pizza is quick and easy with our app or on our
              website.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <NavLink
                to="/blog"
                className="rounded-md bg-indigo-600 hover:bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Read Blog
              </NavLink>
              <NavLink
                to="/menu"
                className="rounded-md bg-pink-400 hover:bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Menu
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

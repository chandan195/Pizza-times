import bg_img from "../../assets/images/section-one/section-one-1440.webp";
// import { NavLink } from "react-router-dom";
import GoogleLogIn from "./GoogleLogIn";
const LoginPage = () => {
  return (
    <div className="bg-black  ">
      <img
        src={bg_img}
        alt="backGround img"
        className="w-screen h-screen  opacity-50"
      />

      <div className="relative isolate px-6  lg:px-8  login-text">
        <div className=" ">
          <div className="text-center welcome-text">
            <span>Login </span>
          </div>
          <div className="flex">
            <div className="justify-center px-6 py-1 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-orange-500">
                  Sign in to your account
                </h2>
              </div>

              <div className="mt-4 sm:mx-auto lg:w-full sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white text-left"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-black/500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Password
                      </label>
                      <div className="text-sm">
                        <a
                          href="#"
                          className="font-semibold text-orange-400 hover:text-orange-700"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div>
              <GoogleLogIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

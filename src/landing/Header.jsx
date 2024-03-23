import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.png";
import CardIcon from "../components/shoping-card-icon/Card_icon";
const navigation = [
  { name: "Home", to: "/" },
  { name: "Menu", to: "/menu" },
  { name: "Blog", to: "/blog" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className=" inset-x-0 top-0 z-50 fixed"> 
      <nav
        className="flex items-center justify-between p-6 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex md:flex-1  logo-img ">
          <NavLink to="/">
            <img
              className="h-14 transition ease-in-out delay-150 
                hover:rotate-45 hover:duration-1000 hover:ease-in-out "
              src={logo}
              alt="logo"
            />
          </NavLink>
          <NavLink to="/" className="item-center pt-4 pl-2 text-white ">
            <h1>
              Pizza <span className="logo-text text-yellow-600">Time</span>
            </h1>
          </NavLink>
        </div>

        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6 hover:text-orange-500" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-10">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-sm font-bold leading-6  text-orange-500"
                  : "text-sm font-semibold leading-6 text-white"
              }   
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <NavLink
            to="#"
            className="text-sm font-semibold leading-6 text-white"
          >
            Log in
          </NavLink>
          {/* </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"> */}
          <NavLink
            to="/CardProduct"
            className="text-sm font-semibold leading-6 text-white"
          >
            <CardIcon />
          </NavLink>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel
          className="fixed  inset-y-0 right-0 z-50 w-full  overflow-y-auto 
         bg-black  px-32 py-8 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <img
                className="h-14  hover:rotate-45 hover:duration-1000 "
                src={logo}
                alt=""
              />
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 px-13 hover:text-orange-500 " aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({ isActive }) =>
                      isActive
                        ? "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-orange-500"
                        : "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="py-6">
                <NavLink
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-white hover:text-black"
                >
                  Log in
                </NavLink>
                <NavLink
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white"
                >
                  <CardIcon />
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
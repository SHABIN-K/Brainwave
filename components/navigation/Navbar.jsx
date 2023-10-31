import { Merienda } from "next/font/google";
import Hamburger from "../ui/Hamburger";
import TabsPanel from "../ui/Tabs";

const merienda = Merienda({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const Navbar = () => {
  return (
    <>
      <nav className="relative hidden sm:flex px-4 py-2 justify-between items-center bg-bgColor-main">
        <a className="text-3xl font-bold leading-none" href="#">
          <h1 className={` ${merienda.className} text-textColor-main`}>TOSS</h1>
        </a>
        <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:items-center ">
          <TabsPanel />
        </div>
        <div className="hidden sm:inline-block">
          <button className="md:ml-auto md:mr-3 py-2.5 px-6 bg-bgColor-main hover:bg-gray-300 text-sm text-gray-900 font-bold  rounded-xl transition duration-200">
            Sign In
          </button>
          <button className=" py-2.5 px-6 bg-bgColor-primary hover:bg-gray-700 text-sm text-textColor-primary font-bold rounded-xl transition duration-200">
            Sign up
          </button>
        </div>
      </nav>

      {/* Mobile view */}

      <nav className="relative flex sm:hidden p-1 justify-between items-center bg-bgColor-main">
        <div className="flex flex-col">
          <p className="font-medium text-[16px] leading-[135%] tracking-[0.3px] text-left text-gray-800">
            Welcome!
          </p>
          <p className="font-bold text-[22px] leading-[140%] tracking-[0.3px] w-auto text-left text-textColor-main">
            Jon doe
          </p>
        </div>

        <button className="flex items-center">
          <Hamburger />
        </button>
      </nav>
    </>
  );
};

export default Navbar;

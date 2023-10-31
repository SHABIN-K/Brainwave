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
        <div className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 md:flex   lg:items-center ">
          <TabsPanel />
        </div>
        <div className="hidden sm:inline-block">
          <button className="md:ml-auto md:mr-3 py-2 px-6 bg-bgColor-main hover:bg-gray-300 text-sm text-gray-900 font-bold  rounded-xl transition duration-200">
            Sign In
          </button>
          <button className=" py-2 px-6 bg-bgColor-primary hover:bg-gray-700 text-sm text-textColor-primary font-bold rounded-xl transition duration-200">
            Sign up
          </button>
        </div>
      </nav>

      <nav className="relative flex sm:hidden p-2 justify-between items-center bg-textColor-primary">
        <div className="flex flex-col">
          <p className="">Welcome!</p>
          <p className="">Jon doe</p>
        </div>
        <div className="">
          <button className="flex items-center text-primary">
            <Hamburger />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

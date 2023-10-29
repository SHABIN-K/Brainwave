import TabsPanel from "../ui/Tabs";

const Navbar = () => {
  return (
    <>
      <nav className="relative hidden sm:flex px-4 py-2 justify-between items-center bg-white">
        <a className="text-3xl font-bold leading-none" href="#">
          <h1 className="text-black">TOSS</h1>
        </a>
        <div className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 md:flex   lg:items-center ">
          <TabsPanel />
        </div>
        <div className="hidden sm:inline-block">
          <a
            className="md:ml-auto md:mr-3 py-2 px-6 bg-white hover:bg-gray-300 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
            href="#"
          >
            Sign In
          </a>
          <a
            className=" py-2 px-6 bg-black hover:bg-gray-800 text-sm text-white font-bold rounded-xl transition duration-200"
            href="#"
          >
            Sign up
          </a>
        </div>
      </nav>

      <nav className="relative flex sm:hidden px-4 py-2 justify-between items-center bg-white">
        <a className="text-3xl font-bold leading-none" href="#">
          <h1 className="text-black">T</h1>
        </a>
        <div className="flex sm:hidden">
          <button className="navbar-burger flex items-center text-black p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

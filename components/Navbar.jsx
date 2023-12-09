import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiAddToQueue, BiLogOut } from 'react-icons/bi';

const Nevbar = () => {
  const { data: session } = useSession();
  return (
    <header className="py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <Link
          href="/"
          className="group flex items-center rounded-full  text-gray-500 transition-all duration-300 ease-in-out hover:text-accent-400"
        >
          <h2 className=" relative text-xl font-medium tracking-wide">Toss</h2>
        </Link>
        <ul className=" flex items-center gap-2">
          {session?.user ? (
            <>
              <li>
                <Link
                  href={'/profile'}
                  className=" flex items-center gap-2 rounded-full bg-white py-2 pl-2 pr-4 text-sm text-gray-700  transition-all duration-300 ease-in-out hover:bg-accent-500 hover:text-gray-50 "
                >
                  <Image
                    src={session?.user?.image || ''}
                    alt="user avatar"
                    width={20}
                    height={20}
                    className=" rounded-full"
                  />
                  <p className=" hidden  md:block">{session?.user?.name}</p>
                </Link>
              </li>
              {session?.user.isAdmin && (
                <Link
                  href="/"
                  title="Go to admin page"
                  className=" flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-gray-700  transition-all duration-300 ease-in-out hover:bg-accent-500 hover:text-gray-50 "
                >
                  Admin
                </Link>
              )}
              {!session?.user.isAdmin && (
                <Link
                  href="/list/job"
                  title="List new Job"
                  className=" flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-gray-700  transition-all duration-300 ease-in-out hover:bg-accent-500 hover:text-gray-50 "
                >
                  <BiAddToQueue /> <p className=" hidden md:block">Add Post</p>
                </Link>
              )}
              <li>
                <button
                  type="button"
                  className=" flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-gray-700  transition-all duration-300 ease-in-out hover:bg-accent-500 hover:text-gray-50 "
                  title="Log out"
                  onClick={() => void signOut()}
                >
                  <BiLogOut />
                  <p className=" hidden md:block">Log Out</p>
                </button>
              </li>
            </>
          ) : (
            <li>
              <button
                type="button"
                className=" rounded-full bg-white px-4 py-2 text-gray-700  transition-all duration-300 ease-in-out hover:bg-accent-500 hover:text-gray-50 "
                onClick={() => void signIn('google')}
              >
                Sign In
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Nevbar;

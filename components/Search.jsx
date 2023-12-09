'use client';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { BiSearch, BiX } from 'react-icons/bi';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = async () => {
    toast('No Job with input found');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative mx-auto mt-2 flex w-full max-w-2xl items-center justify-center rounded-full bg-white p-2 shadow-2xl shadow-accent-100 "
    >
      <input
        type="text"
        value={searchInput}
        className="h-full w-full bg-transparent py-2 pl-10 text-xl placeholder:text-sm focus:outline-none"
        placeholder="Search jobs by title or company name"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <BiSearch size={24} className="absolute inset-y-0 left-4 h-full text-dark-500" />
      <div className=" relative">
        <button
          onClick={() => handleSearch()}
          className="mr-1 h-full w-fit rounded-full bg-darkGradient px-4 py-2 text-sm text-white"
        >
          Search
        </button>

        {searchInput && (
          <BiX
            size={24}
            title="Clean the search"
            onClick={() => {
              setSearchInput('');
            }}
            className="absolute inset-y-0 -left-7 h-full cursor-pointer text-dark-500 transition-all  duration-200 ease-in-out  hover:scale-110"
          />
        )}
      </div>
    </motion.div>
  );
};

export default Search;

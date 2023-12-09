import Link from 'next/link';
import React from 'react';

const LinkItem = ({ title }) => {
  return (
    <Link
      href="/search"
      className="relative flex w-fit flex-nowrap items-center gap-2 whitespace-nowrap rounded-3xl bg-white px-4 py-2.5 text-center text-sm shadow-xl shadow-accent-100/50 transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-accent-200/50 hover:ring-2 hover:ring-accent-200"
    >
      {title}
    </Link>
  );
};

const CategoryLinks = async () => {
  const categories = [
    { id: 1, name: 'supermarket' },
    { id: 3, name: 'fishmarket' },
    { id: 4, name: 'chicken stall' },
    { id: 5, name: 'bookstall' },
    { id: 6, name: 'Restaurent' },
    { id: 7, name: 'cafe' },
    { id: 8, name: 'textile shop' },
    { id: 9, name: 'workshop' },
    { id: 10, name: 'medical store' },
    { id: 11, name: 'coolbar' },
    { id: 14, name: 'chicken stall' },
    { id: 15, name: 'bookstall' },
    { id: 16, name: 'Restaurent' },
    { id: 17, name: 'cafe' },
    { id: 18, name: 'textile shop' },
    { id: 19, name: 'workshop' },
    { id: 20, name: 'medical store' },
    { id: 21, name: 'coolbar' },
  ];

  return (
    <div className="overflow-x-auto">
      <ul className="flex gap-6 p-4 py-8">
        <LinkItem title="All Jobs" />
        {categories?.map((category) => {
          return <LinkItem key={category.id} title={category.name} />;
        })}
      </ul>
    </div>
  );
};

export default CategoryLinks;

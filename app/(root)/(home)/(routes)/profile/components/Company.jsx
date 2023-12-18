'use client';

import { Tab } from '@headlessui/react';
import EditCompany from './EditCompany';

const Tabs = ['Company', 'Edit company'];
const Company = () => {
  return (
    <Tab.Group>
      <Tab.List className="flex w-full md:ml-[200px] space-x-1 sm:w-2/5">
        {Tabs.map((tab, index) => (
          <Tab
            key={index}
            className={({ selected }) =>
              `w-full py-2.5 text-base font-semibold text-gray-700 outline-none ${
                selected && 'border-b-4 border-accent-500 '
              }`
            }
          >
            {tab}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-3 mx-2 sm:mx-8">
        <Tab.Panel>
          <EditCompany />
        </Tab.Panel>
        <Tab.Panel>
          <EditCompany />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Company;

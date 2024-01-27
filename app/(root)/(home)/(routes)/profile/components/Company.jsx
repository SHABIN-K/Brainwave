"use client";

import { Tab } from "@headlessui/react";
import EditCompany from "./EditCompany";
import CompanyDetails from "./CompanyDetails";
import { useSession } from "next-auth/react";
import { useUSerCompany } from "@/lib/hooks/useCompany";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

const Tabs = ["Company", "Edit company"];
const Company = () => {
  const { data: session } = useSession();
  const { data, error } = useUSerCompany({
    userId: session?.user?.id,
  });
  const [company, setCompany] = useState([]);
  const post = useMemo(() => company, [company]);

  useEffect(() => {
    if (data) {
      setCompany(data);
    }
    if (error) {
      console.error(error);
      toast("Uh-oh!!!");
    }
  }, [error, data]);
  return (
    <Tab.Group>
      <Tab.List className="flex w-full space-x-1 sm:w-2/5 ">
        {Tabs.map((tab, index) => (
          <Tab
            key={index}
            className={({ selected }) =>
              `w-full py-2.5 text-base font-semibold text-gray-700 outline-none ${
                selected && "border-b-4 border-accent-500 "
              }`
            }
          >
            {tab}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-3 mx-2 sm:mx-8">
        <Tab.Panel>
          <CompanyDetails post={post} />
        </Tab.Panel>
        <Tab.Panel>
          <EditCompany post={post}/>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Company;

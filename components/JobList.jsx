"use client";
import { usePost } from "@/lib/hooks/usePost";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { BiBuildings, BiRupee, BiTimeFive } from "react-icons/bi";

const TextItem = ({ prefix, suffix, icon: Icon }) => {
  return (
    <div className="flex items-center gap-1 text-sm capitalize">
      <Icon size={16} className="text-accent-400" title={prefix || ""} />
      <span className="line-clamp-1 text-sm text-gray-500">{suffix}</span>
    </div>
  );
};

const JobList = () => {
  const { data, error } = usePost();
  const [postData, setPostData] = useState([]);
  const post = useMemo(() => postData, [postData]);

  useEffect(() => {
    if (data) {
      setPostData(data);
    }
    if (error) {
      console.error(error);
      toast("Uh-oh!!!");
    }
  }, [error, data]);

  return (
    <>
      {post.map((data, index) => {
        return (
          <div
            key={index}
            className={`relative z-10 grid items-center gap-2 rounded-2xl bg-white p-4 shadow-2xl shadow-accent-100/50 hover:shadow-accent-100 hover:ring-2 hover:ring-accent-200 
         "ring-2 ring-accent-200" : ""
      }`}
          >
            <Link
              href={`/job/`}
              className="grid grid-cols-[auto_1fr] grid-rows-[3,auto] items-center gap-2 gap-x-4"
              target={"_blank"}
            >
              <h2 className="line-clamp-2 font-medium capitalize ">
                Software tester
              </h2>
            </Link>
            <div className="col-span-1 flex flex-wrap items-center gap-2 md:col-span-1">
              <TextItem prefix="job type" suffix="full day" icon={BiTimeFive} />
              <TextItem
                prefix="Work Place"
                suffix="remote"
                icon={BiBuildings}
              />
              <div className="col-span-2 my-2 flex flex-wrap items-center gap-x-6 gap-y-1 md:col-span-1 md:my-[revert]">
                <TextItem prefix="Salary" suffix="20 lpa" icon={BiRupee} />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <p className="flex h-full max-h-6 w-fit items-center rounded-full px-4 py-1 text-xs capitalize text-gray-500 md:bottom-1 md:right-1">
                {/*<TimeAgoComponent createdAt= />*/}2 months ago
              </p>
              <p className="ml-auto flex h-full max-h-6 rounded-full px-4 py-1 text-end text-xs capitalize text-gray-500 md:bottom-1 md:right-1">
                by wipro
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default JobList;

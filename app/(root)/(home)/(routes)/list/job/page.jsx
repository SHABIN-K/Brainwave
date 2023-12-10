"use client";
import { useSession } from "next-auth/react";
import { toast } from "sonner";


const JobList = () => {
  const { data: session } = useSession();
  if (!session || !session.user) {
    toast.error("Please login to perform this action");
  }
  return (
    <main className=" mx-auto w-full max-w-7xl px-4">
      <h2 className=" pt-4 text-[clamp(1.3rem,6vw,2rem)] font-medium capitalize text-gray-900">
        Add New Job
      </h2>
    </main>
  );
};

export default JobList;

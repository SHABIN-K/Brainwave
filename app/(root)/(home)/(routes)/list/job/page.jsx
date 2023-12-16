"use client";
import PageHeading from "@/components/ui/PageHeading";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import UserJobListForm from "./component/UserJobListForm";




const JobList = () => {
  const { data: session } = useSession();
  if (!session || !session.user) {
    toast.error("Please login to perform this action");
  }
  return (
    <main className=" mx-auto w-full max-w-7xl px-4">
        <PageHeading
            title="List New Job"
            subtitle="Fill this form and wait for admin approval on approval job listing will
            be visible on website"
        />
        <UserJobListForm/>
      
    </main>
  );
};

export default JobList;

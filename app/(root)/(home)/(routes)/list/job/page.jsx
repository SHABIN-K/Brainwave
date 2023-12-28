"use client";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import PageHeading from "@/components/ui/PageHeading";
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
      <UserJobListForm user={session?.user.email} />
    </main>
  );
};

export default JobList;

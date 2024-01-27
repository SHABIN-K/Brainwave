import JobCardSkeleton from "@/components/skeleton/JobCardSkeleton";

const UserPostedJobs = ()=>{
  const skeleton = [...Array(5).keys()].map((i) => {
    return <JobCardSkeleton key={i} />;
  });

  return (
    <main className=" mx-auto grid h-full w-full max-w-7xl gap-6 px-4 pb-16 md:grid-cols-[auto_1fr] md:py-10 ">
    <div className=" top-11 z-10 grid h-fit gap-6 bg-light-500 md:sticky  md:max-w-[250px] "></div>
    <div className=" z-10">
      <ul className="grid gap-6 "></ul>
    </div>
  </main>
  );
};

export default UserPostedJobs;

import JobCardSkeleton from './skeleton/JobCardSkeleton';

const JobList = () => {
  const skeleton = Array.from({ length: 5 }, (_, i) => {
    return <JobCardSkeleton key={i} />;
  });

  return <ul className="grid gap-6 ">{skeleton}</ul>;
};

export default JobList;

import api from "~/utils/api";
import CompanyCardSkeleton from "./ui/CompanyCardSkeleton";

const JobList = () => {
  const skeleton = Array.from({ length: 5 }, (_, i) => {
    return <CompanyCardSkeleton key={i} />;
  });

  return <ul className="grid gap-6 ">{skeleton}</ul>;
};

export default api.withTRPC(JobList);

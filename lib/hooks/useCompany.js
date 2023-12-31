import useSWR from "swr";
import fetcher from "../fetcher";

const useUSerCompany = ({ userId }) => {
  const { data, error, isLoading } = useSWR(`api/company/${userId}`, fetcher);
  return { data, error, isLoading };
};
export { useUSerCompany };

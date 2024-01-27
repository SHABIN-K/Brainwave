import useSWR from "swr";
import fetcher from "../fetcher";

export const usePost = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/post", fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

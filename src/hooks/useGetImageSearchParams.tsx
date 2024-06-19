import { useSearchParams } from "next/navigation";

const useGetImageSearchParams = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const query = searchParams.get("query") || "";
  return {
    page: Number(page),
    query,
  };
};

export default useGetImageSearchParams;

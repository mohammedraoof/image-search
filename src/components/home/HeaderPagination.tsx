"use client";
import useGetImageSearchParams from "@/hooks/useGetImageSearchParams";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeaderPaginationProps {
  page: number;
  totalPages: number;
}

const HeaderPagination = (props: HeaderPaginationProps) => {
  const { page, totalPages } = props;
  const { query } = useGetImageSearchParams();
  const router = useRouter();
  return (
    <div className="flex gap-5">
      <div className="flex items-center justify-center gap-3">
        {/* Next and previous buttons */}
        <button
          className="p-1 text-sm bg-gray-100 border border-gray-200 rounded-sm disabled:bg-gray-200 disabled:border-gray-300"
          disabled={page === 1}
          onClick={() => {
            const previousPage = +page - 1;
            router.replace(`/?query=${query}&page=${previousPage}`);
          }}
        >
          <ChevronLeft className="size-5" />
        </button>
        {page}
        <button
          disabled={page >= totalPages}
          className="p-1 text-sm bg-gray-100 border border-gray-200 rounded-sm"
          onClick={() => {
            const nextPage = +page + 1;
            router.replace(`/?query=${query}&page=${nextPage}`);
          }}
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
      <form
        action={(e) => {
          const _page = e.get("page") as string;
          router.replace(`/?query=${query}&page=${_page}`);
        }}
        className="flex items-center justify-center gap-3"
      >
        <label htmlFor="page" className="text-xs">
          Go to page
        </label>
        <input
          id="page"
          type="number"
          className="p-1 text-sm border border-gray-200 rounded-sm w-[50px]"
          name="page"
          max={totalPages}
        />

        <button
          disabled={page >= totalPages}
          className="p-1 text-sm bg-gray-100 border border-gray-200 rounded-sm"
          onClick={() => {
            router.replace(`/?query=${query}&page=${page + 1}`);
          }}
        >
          <ChevronRight className="size-5" />
        </button>
      </form>
    </div>
  );
};

export default HeaderPagination;

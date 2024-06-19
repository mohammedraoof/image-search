/* eslint-disable jsx-a11y/alt-text */
"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { categories } from "@/constants/Categories";
import useGetImageSearchParams from "@/hooks/useGetImageSearchParams";
import { ChevronDown, Image, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import SearchByImageButton from "./SearchByImageButton";

const SearchBar = () => {
  const [selected, setSelected] = useState("all");

  const { query, page } = useGetImageSearchParams();

  const router = useRouter();

  const selectedLabel = useMemo(() => {
    return (
      categories.find((category) => category.value === selected)?.name ||
      "All Images"
    );
  }, [selected]);

  const handleSearch = (formData: FormData) => {
    const searchValue = formData.get("query");
    if (searchValue === query) return;
    router.replace(`/?query=${searchValue}&page=${1}`);
  };

  return (
    <div className="flex flex-col md:flex-row mb-3 md:mb-0 border-b sm:border-b-0 border-black">
      <div className="border border-black p-2 flex justify-between sm:block">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex w-full md:w-[130px] items-center  justify-between gap-2">
              <Image className="size-5" />
              <p className="text-sm">{selectedLabel}</p>
              <ChevronDown />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {categories.map((category) => (
              <DropdownMenuItem
                onClick={() => {
                  setSelected(category.value);
                }}
                key={category.value}
              >
                {category.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <SearchByImageButton className="flex sm:hidden" />
      </div>
      <form
        action={handleSearch}
        className="flex-grow border-black p-2 border-y-0 md:border-y border-x md:border-x-0 flex gap-2 items-center justify-center"
      >
        <Search />
        <input
          type="text"
          placeholder="Search"
          className="focus:border-none focus:outline-none w-full text-sm"
          name="query"
          defaultValue={query}
        />
      </form>
      <SearchByImageButton className="hidden sm:flex" />
    </div>
  );
};

export default SearchBar;

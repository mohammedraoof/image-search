import CategorySelector from "@/components/home/CategorySelector";
import HeaderPagination from "@/components/home/HeaderPagination";
import SearchBar from "@/components/home/SearchBar";
import { ImageService } from "@/services/Image.Service";
import { ImageSearchInput } from "@/types/ImageSearch";
import { Suspense } from "react";

interface HomeProps {
  searchParams: Partial<ImageSearchInput>;
}

export default async function Home(props: HomeProps) {
  const { query = "1", page = 1 } = props.searchParams || {};

  const images = await ImageService.imageSearch({
    query,
    limit: 12,
    page: Number(page),
  });

  return (
    <main className="">
      <SearchBar />
      <CategorySelector />
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-center">
              <p className="text-2xl">Loading...</p>
            </div>
          </div>
        }
      >
        <section>
          <div className="p-5 flex items-center justify-between">
            <h3 className="font-semibold text-sm">
              {query && <span className="capitalize">{query}</span>} Stock
              Photos And Images{" "}
              {images.total_results && (
                <span className="text-gray-400 text-xs">
                  ({images.total_results})
                </span>
              )}
            </h3>
            <HeaderPagination
              page={page}
              totalPages={Math.ceil(images.total_results / images.per_page)}
            />
          </div>
          <hr />
        </section>
      </Suspense>
    </main>
  );
}

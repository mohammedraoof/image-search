import CategorySelector from "@/components/home/CategorySelector";
import ImageList from "@/components/home/ImageList";
import Pagination from "@/components/home/Pagination";
import SearchBar from "@/components/home/SearchBar";
import { Button } from "@/components/ui/button";
import { ImageService } from "@/services/Image.Service";
import { ImageSearchInput } from "@/types/ImageSearch";
import Link from "next/link";
import { Suspense } from "react";

interface HomeProps {
  searchParams: Partial<ImageSearchInput>;
}

export default async function Home(props: HomeProps) {
  const { query = "1", page = 1 } = props.searchParams || {};

  const images = await ImageService.imageSearch({
    query,
    limit: 24,
    page: Number(page),
  });

  const lastPage = Math.ceil(images.total_results / images.per_page);

  return (
    <main>
      <SearchBar />
      <CategorySelector />
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
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
            <Pagination page={page} totalPages={lastPage} />
          </div>
          {/* Image Listing */}
          <ImageList images={images.photos} />

          {lastPage !== +page && (
            <div className="text-center p-5">
              <Link href={`/?query=${query}&page=${+page + 1}`}>
                <Button
                  size="lg"
                  className="bg-white text-black border border-black hover:bg-black hover:text-white w-[300px]"
                >
                  Next page
                </Button>
              </Link>
            </div>
          )}
          <hr />
          <div className="p-5 flex justify-between">
            <p>
              {query && (
                <span className="capitalize">Search Result For{query}</span>
              )}{" "}
              Stock Photos and images({images.total_results})
            </p>
            <Pagination page={page} totalPages={lastPage} />
          </div>
        </section>
      </Suspense>
    </main>
  );
}

import { ImageSearchInput, ImageSearchResponse } from "@/types/ImageSearch";

export class ImageService {
  public static async imageSearch(input: ImageSearchInput) {
    const { query, limit, page } = input;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}?query=${query}&per_page=${limit}&page=${page}`
    );

    return response.json() as Promise<ImageSearchResponse>;
  }
}

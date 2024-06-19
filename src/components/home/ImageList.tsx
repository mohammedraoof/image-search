import { Photo } from "@/types/ImageSearch";
import {
  CirclePlus,
  HardDriveDownload,
  Images,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import MasonryWrapper from "./MasonryWrapper";

/* eslint-disable @next/next/no-img-element */
interface Props {
  images: Photo[];
}

const ImageList = (props: Props) => {
  const { images } = props;

  return (
    <div className="p-5">
      <MasonryWrapper>
        {images.map((image) => (
          <div
            title={image.alt}
            key={image.id}
            className="max-h-[350px] relative group"
          >
            <img
              src={image.src.original}
              alt={image.alt}
              className="h-full w-full object-cover hover:cursor-pointer"
              loading="lazy"
            />
            <div className="hidden group-hover:block cursor-pointer absolute top-0 left-0 right-0 bottom-0 p-3">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <p className="truncate text-white text-sm">{image.alt}</p>
                </div>
                <div className="grid grid-cols-2">
                  <p className="text-white truncate text-xs mt-auto">
                    Photographer: {image.photographer}
                  </p>
                  <div className="w-full justify-end gap-2 hidden group-hover:flex">
                    <Button
                      size="sm"
                      className="bg-[rgba(3,255,123,1)] text-black"
                    >
                      <ShoppingBag className="size-4" />
                    </Button>
                    <Link passHref href={image.src.original} target="_blank">
                      <Button size="sm" className="bg-[rgba(0,0,0,.50)]">
                        <HardDriveDownload className="size-4" />
                      </Button>
                    </Link>
                    <Button size="sm" className="bg-[rgba(0,0,0,.50)]">
                      <CirclePlus className="size-4" />
                    </Button>
                    <Link
                      passHref
                      href={image.photographer_url}
                      target="_blank"
                    >
                      <Button size="sm" className="bg-[rgba(0,0,0,.50)]">
                        <Images className="size-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </MasonryWrapper>
    </div>
  );
};

export default ImageList;

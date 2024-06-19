import { Photo } from "@/types/ImageSearch";
import {
  CirclePlus,
  HardDriveDownload,
  Images,
  ShoppingBag,
} from "lucide-react";
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
          <div key={image.id} className="max-h-[350px] relative group">
            <img
              src={image.src.original}
              alt={image.photographer}
              className="h-full w-full object-cover hover:cursor-pointer"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2">
              <div className="w-full justify-end gap-2 hidden group-hover:flex">
                <Button size="sm" className="bg-[rgba(3,255,123,1)] text-black">
                  <ShoppingBag className="size-4" />
                </Button>
                <Button size="sm" className="bg-[rgba(0,0,0,.50)]">
                  <HardDriveDownload className="size-4" />
                </Button>
                <Button size="sm" className="bg-[rgba(0,0,0,.50)]">
                  <CirclePlus className="size-4" />
                </Button>
                <Button size="sm" className="bg-[rgba(0,0,0,.50)]">
                  <Images className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </MasonryWrapper>
    </div>
  );
};

export default ImageList;

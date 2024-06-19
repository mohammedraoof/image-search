"use client";
import { PropsWithChildren } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonryWrapper = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4, 1024: 5 }}
    >
      <Masonry gutter="10px">{children}</Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryWrapper;

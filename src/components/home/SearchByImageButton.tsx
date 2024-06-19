import { cn } from "@/lib/utils";
import { CameraIcon } from "lucide-react";

interface Props {
  className?: string | undefined;
}

const SearchByImageButton = (props: Props) => {
  const { className } = props;

  return (
    <button
      className={cn(
        "border border-black p-2 text-sm flex items-center justify-center gap-2",
        className
      )}
    >
      <CameraIcon />
      <p className="text-sm md:text-base">Search By Image</p>
    </button>
  );
};

export default SearchByImageButton;

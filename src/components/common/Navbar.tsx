import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mx-auto px-4 py-2 md:px-0 lg:px-8 bg-black text-white">
        <h1 className="md:text-4xl text-xl font-bold ">My Image Search</h1>
        <div className="flex gap-2 md:gap-5 items-center md:justify-center justify-between">
          <Link href="/">
            <div className="flex gap-1 items-center justify-center">
              <Heart />
              <span className="text-sm md:text-base">Light Boxes</span>
            </div>
          </Link>
          <Link href="/">
            <div className="flex gap-1 items-center justify-center">
              <ShoppingCart />
              <span className="text-sm md:text-base">Cart</span>
            </div>
          </Link>
          <Link passHref href="/">
            <button className="border border-white rounded-md p-1 px-4 py-1 text-white font-semibold text-sm ">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

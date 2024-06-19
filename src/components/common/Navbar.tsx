import Link from "next/link";
import CartIcon from "../icons/CartIcon";
import HeartIcon from "../icons/HeartIcon";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between mx-auto px-4 py-2 md:px-0 lg:px-8 bg-black text-white">
        <h1 className="md:text-4xl text-2xl font-bold ">My Image Search</h1>
        <div className="flex gap-5 items-center justify-center">
          <Link href="/">
            <div className="flex gap-1 items-center justify-center">
              <HeartIcon />
              Light Boxes
            </div>
          </Link>
          <Link href="/">
            <div className="flex gap-1 items-center justify-center">
              <CartIcon />
              Cart
            </div>
          </Link>
          <Link href="/">
            <button className="border border-white rounded-md px-4 py-1 text-white font-semibold">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

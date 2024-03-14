import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className="p-4">
      <nav className="flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src="/logo.svg" width={100} height={100} alt="logo" />
          </Link>
        </div>
        <div>
          {/* <button className="px-6 py-3 bg-blue-600 rounded-full text-white">
            Sign In
          </button> */}
          <CustomButton title="Sign In" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import React from "react";
import { CustomButton } from ".";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return <header className="p-4">
    <nav className="flex justify-between items-center">
      <Link href={`/`}>
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="logo"
        />
      </Link>
      <div>
        <CustomButton
          title="Sign In"
        />
      </div>
    </nav>
  </header>;
};

export default Navbar;

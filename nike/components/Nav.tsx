import React from "react";
import { navLinks } from "@/constants";

import Link from "next/link";
import { headerLogo } from "@/assets/images";
import Image from "next/image";

const Nav = () => {
  return (
    <section className="flex justify-between items-center py-8 px-8 bg-slate-300">
      <div>
        <Image src={headerLogo} width={100} height={100} alt="logo" />
      </div>
      <div className="flex items-center">
        {navLinks.map((item) => (
          <Link className="mx-8" href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex gap-2">
        <Link href="/">Sign In</Link>
        <span>/</span>
        <Link href="/">Explore Now</Link>
      </div>
    </section>
  );
};

export default Nav;

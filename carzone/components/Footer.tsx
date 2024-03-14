import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return <footer className="p-4">
    <div className="flex justify-evenly items-center">
      <div className="space-y-4">
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="logo"
        />
        <p className="font-light">CarZone 2024 <br />
          All Rights Reserved &copy;
        </p>
      </div>
      {footerLinks.map(footer => (
        <div key={footer.title} className="p-4 space-y-2">
          <h3 className="font-bold">{footer.title}</h3>
          {footer.links.map(link => (
            <div>
              <Link href={link.url}>{link.title}</Link>
            </div>
          ))}
        </div>
      ))}

    </div>
    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p>@2023 CarHub. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>;
};

export default Footer;

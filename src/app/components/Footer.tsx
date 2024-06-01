import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FacebookIcon, InstgramIcon, YoutubeIcon } from "../components/Icons";
import Logo from "../../../public/assets/logo/logo.png";

const Footer = () => {
  return (
    <footer className=" flex flex-col text-white bg-slate-900 px-28 xs:px-10 lg:px-8 text-sm">
      <div className="flex xs:flex-col justify-between items-center pb-16 xs:pb-8 pt-20 xs:pt-12 ">
        <div className="flex xs:flex-col items-center gap-y-3 ">
          <Link href="/">
            <Image
              priority
              src={Logo}
              height={17}
              width={100}
              alt="Brand Logo White"
            />
          </Link>
          <span className="border-r h-8 px-6 xs:px-0 lg:px-2 xs:origin-center xs:rotate-90 "></span>
          <span className="px-10 lg:px-4">Gift & Decoration Store</span>
        </div>
        <span className="flex xs:flex-col xs:items-center xs:pt-6 gap-4 gap-x-10 lg:gap-x-6 ">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/">Product</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contact Us</Link>
        </span>
      </div>
      <hr />
      <div className="flex xs:flex-col justify-between items-center gap-x-12 text-xs pt-5 pb-12 ">
        <div className="flex xs:gap-6 xs:flex-col xs:items-center gap-x-10 xs:order-2">
          <span className="xs:order-3">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </span>

          <div className="flex gap-4">
            <Link href="/" className="font-bold">
              Privacy Policy
            </Link>
            <Link href="/" className="font-bold">
              Terms of Use
            </Link>
          </div>
        </div>

        <div className="flex gap-x-6 xs:justify-center xs:pb-6 xs:pt-3 ">
          <Link href="https://www.instagram.com/" target={"_blank"}>
            <InstgramIcon />
          </Link>
          <Link href="https://www.facebook.com/" target={"_blank"}>
            <FacebookIcon />
          </Link>
          <Link href="https://www.youtube.com/" target={"_blank"}>
            <YoutubeIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

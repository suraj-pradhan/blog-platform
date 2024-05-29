import React from "react";
import Image from "next/image";
import logoImage from "../../../public/assets/logo/logo.png";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className="flex py-5 items-center text-sm justify-around">
        <div className="">
          <Image
            src={logoImage}
            alt="image of logo"
            width={160}
            height={20}
          ></Image>
        </div>
        <span className="flex gap-x-6 items-center">
          <Link href="/">Write</Link>
          <Link href="/">Sign in</Link>
          <Link href="/">
            <button className="rounded-md px-4 py-2 bg-slate-800 hover:bg-slate-950 text-white">
              Get Started
            </button>
          </Link>
        </span>
      </nav>
      <hr className="border-slate-800" />
    </>
  );
};

export default NavBar;

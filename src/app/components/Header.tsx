import React, { useState } from "react";
import Image from "next/image";
import logoImage from "../../../public/assets/logo/logo.png";
import Link from "next/link";
import { getLoggedInUser } from "@/lib/server/appwrite";

async function NavBar() {
  const user = await getLoggedInUser();
  console.log(user);
  let buttonValue = "Start Publishing";
  if (user) buttonValue = user.name;
  return (
    <>
      <nav className="flex py-4 items-center text-sm justify-around bg-slate-100">
        <span>
          <Link href="/">
            <Image
              src={logoImage}
              alt="image of logo"
              width={160}
              height={20}
            ></Image>
          </Link>
        </span>
        {/* <span className="flex gap-x-6">
          <Link href="/">Articles</Link>
          <Link href="/">Newsletter</Link>
          <Link href="/">Publish</Link>
        </span> */}
        <span className="flex gap-x-6 items-center"></span>
        <span className="flex gap-x-6 items-center">
          <Link href="/login">
            <button className="font-medium rounded-md px-4 py-2 border-2 border-slate-300 hover:bg-slate-900 hover:text-white ">
              Login
            </button>
          </Link>
          <Link href="/authentication">
            <button className="font-medium rounded-md px-4 py-2 border-2 border-slate-300 hover:bg-slate-900 hover:text-white ">
              {buttonValue}
            </button>
          </Link>
        </span>
      </nav>
      <hr className="border-slate-800" />
    </>
  );
}

export default NavBar;

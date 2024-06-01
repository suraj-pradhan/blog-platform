import React from "react";
import Image from "next/image";
import logoImage from "../../../public/assets/logo/logo.png";
import Link from "next/link";

const LogIn = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center border-2 rounded-md mt-14 px-4">
        <span className="mt-4 mb-16">
          <Link href="/">
            <Image
              src={logoImage}
              alt="image of logo"
              width={200}
              height={20}
            ></Image>
          </Link>
        </span>
        <span className="text-xl font-medium my-4">Log in or sign up</span>
        <button className="px-20 py-2 bg-slate-800 text-white rounded-md my-4">
          Continue with Google
        </button>
        <span className="my-3">or</span>
        <Link href="/">Continue with email address</Link>
        <span className="text-xs text-center my-4 ">
          By logging in or signing up using the options above, you agree to
          <br />
          Writesmith&apos;s Terms & Conditions and Privacy Policy
        </span>
      </div>
    </div>
  );
};

export default LogIn;

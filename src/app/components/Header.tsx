import Image from "next/image";
import logoImage from "../../../public/assets/logo/logo.png";
import Link from "next/link";
import { getLoggedInUser } from "@/lib/server/appwrite";

export default async function NavBar() {
  const user = await getLoggedInUser();
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
        <span className="flex gap-x-6 items-center">
          <Link href="/authentication/signup">
            <button className="font-medium rounded-md px-4 py-2 border-2 border-slate-300 hover:bg-slate-800 hover:text-white ">
              {!user ? "Signup" : user.name}
            </button>
          </Link>
          <Link href="/authentication/login">
            <button className="font-medium rounded-md px-4 py-2 border-2 border-slate-300 hover:bg-slate-800 hover:text-white ">
              {!user ? "Login" : "Logout"}
            </button>
          </Link>
        </span>
      </nav>
      <hr className="border-slate-800" />
    </>
  );
}

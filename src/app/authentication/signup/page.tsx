import { getLoggedInUser, createAdminClient } from "@/lib/server/appwrite";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ID } from "node-appwrite";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../../../public/assets/logo/logo.png";

export default async function SignUpPage() {
  const user = await getLoggedInUser();
  if (user) redirect("/account");

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-y-5 items-center mt-20
        max-w-96 border-2 border-slate-400 p-6 rounded"
        action={signUpWithEmail}
      >
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
        <span className="font-medium text-lg mt-4">Sign up for an account</span>
        <input
          className="border-2 border-slate-400 px-3 py-1 rounded-md"
          required
          id="email"
          name="email"
          placeholder="Email"
          type="email"
        />
        <input
          className="border-2 border-slate-400 px-3 py-1 rounded-md"
          required
          id="password"
          name="password"
          placeholder="Password"
          minLength={8}
          type="password"
        />
        <input
          className="border-2 border-slate-400 px-3 py-1 rounded-md"
          required
          id="name"
          name="name"
          placeholder="Name"
          type="text"
        />
        <button
          className="text-white w-60 bg-slate-700 px-3 py-1 rounded-md"
          type="submit"
        >
          Sign up
        </button>
        <Link href="/authentication/login">
          <span className="text-[13px]">Already have an account ? </span>
          <button className="text-[13px] text-blue-900 font-semibold hover:underline hover:underline-offset-2">
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}

async function signUpWithEmail(formData: any) {
  "use server";

  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");

  const { account } = await createAdminClient();

  await account.create(ID.unique(), email, password, name);
  const session = await account.createEmailPasswordSession(email, password);

  cookies().set("my-custom-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  console.log(session);

  redirect("/");
}

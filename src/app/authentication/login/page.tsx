import Link from "next/link";
import { redirect } from "next/navigation";
import { createAdminClient, getLoggedInUser } from "@/lib/server/appwrite";
import { cookies } from "next/headers";
import Image from "next/image";
import logoImage from "../../../../public/assets/logo/logo.png";

export default async function logInPage() {
  const user = await getLoggedInUser();
  if (user) redirect("/authentication/account");
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-y-6 items-center mt-20
      max-w-96 border-2 border-slate-400 p-6 rounded"
        action={signInWithEmail}
      >
        <Link href="/">
          <Image
            src={logoImage}
            alt="image of logo"
            width={160}
            height={20}
          ></Image>
        </Link>

        <span className="font-medium text-lg mt-4">Login to your account</span>
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
        <button
          className="text-white w-60 bg-slate-700 px-3 py-1 rounded-md"
          type="submit"
        >
          Login
        </button>
        <Link href="/authentication/signup">
          <span className="text-[13px]">Don&apos;t have an account ? </span>
          <button className="text-[13px] text-blue-900 font-semibold hover:underline hover:underline-offset-2">
            Sign up
          </button>
        </Link>
      </form>
    </div>
  );
}

async function signInWithEmail(formData: any) {
  "use server";

  const email = formData.get("email");
  const password = formData.get("password");

  const { account } = await createAdminClient();

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

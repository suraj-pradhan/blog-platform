import Link from "next/link";
import { redirect } from "next/navigation";
import { createAdminClient, getLoggedInUser } from "@/lib/server/appwrite";
import { cookies } from "next/headers";

export default async function logInPage() {
  const user = await getLoggedInUser();
  if (user) redirect("/account");
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-y-5 items-center mt-20
      max-w-96 border-2 border-slate-400 p-6 rounded"
        action={signInWithEmail}
      >
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
          className="text-white bg-slate-700 px-3 py-1 rounded-md"
          type="submit"
        >
          Login
        </button>
        <Link href="/signup">
          <button className="text-sm hover:underline hover:underline-offset-4">
            Create new account
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

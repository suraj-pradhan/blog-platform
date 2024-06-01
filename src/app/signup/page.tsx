import { getLoggedInUser, createAdminClient } from "@/lib/server/appwrite";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ID } from "node-appwrite";
import Link from "next/link";

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
          className="text-white text-md bg-slate-700 px-6 py-2 rounded-md"
          type="submit"
        >
          Sign up
        </button>
        <Link href="/login">
          <button className="text-sm hover:underline hover:underline-offset-4">
            Already have account ?
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

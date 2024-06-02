import { ID, Client, Databases } from "node-appwrite";
import config from "../../config/config";
import { redirect } from "next/navigation";

export default async function createPage() {
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-y-6 items-center mt-20
      max-w-96 border-2 border-slate-400 p-6 rounded"
        action={createBlog}
      >
        <input
          required
          className="border-2 border-slate-400 px-3 py-1 rounded-md"
          type="text"
          id="title"
        />
        <textarea
          required
          className="border-2 border-slate-400 px-3 py-1 rounded-md"
          name="text"
          id="description"
        />
        <input
          required
          className="border-2 border-slate-400 px-3 py-1 rounded-md"
          type="text"
          id="image"
        />

        <button
          className="text-white w-60 bg-slate-700 px-3 py-1 rounded-md"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
}

async function createBlog(formData: any) {
  "use server";
  const description = formData.get("description");
  const image = formData.get("image");
  const title = formData.get("title");

  const client = new Client()
    .setEndpoint(config.appwriteEndpoint)
    .setProject(config.appwriteProjectId);

  const databases = new Databases(client);

  const result = await databases.createDocument(
    config.appwriteDatabaseId,
    config.appwriteCollectionId,
    ID.unique(),
    { title, image, description }
  );

  console.log(Response);
  redirect("/");
}

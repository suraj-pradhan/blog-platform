"use client";
import { Client, Databases } from "node-appwrite";
import { StaticImageData } from "next/image";
import Image from "next/image";
import config from "../../config/config";
import macbook from "../../../public/assets/images/macbook.jpg";
import { useEffect, useState } from "react";

interface Props {
  img: StaticImageData;
  author: string;
  date: string;
  title: string;
  description: string;
}

const Article = ({ img, author, title, date, description }: Props) => {
  return (
    <div className="flex flex-col border-2 rounded-md border-slate-400 p-3 max-w-xs">
      <span className=" ">
        <span className="">
          <Image
            className="border-0 border-slate-400 rounded-md"
            src={img.src}
            width={300}
            height={100}
            alt="macbook-pro"
          />
        </span>
      </span>
      <span className="my-4 text-xs">Published on {date}</span>
      <span className="mb-2 text-lg font-semibold">{title}</span>
      <span className="text-xs text-gray-500">{description}</span>
      <span className="text-[13px] font-semibold mt-2">By {author}</span>
    </div>
  );
};

const BlogPosts = () => {
  const [title, setTitle] = useState("Hi");

  const client = new Client()
    .setEndpoint(config.appwriteEndpoint)
    .setProject(config.appwriteProjectId);

  const databases = new Databases(client);

  useEffect(() => {
    const getDatas = async () => {
      const result = await databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        "665cdd590021cdd133bb", // documentId
        [] // queries (optional)
      );
      setTitle(result.title);

      console.log(title);
    };
    getDatas();
  });

  return (
    <div className="flex items-center justify-center gap-4 my-10 mx-4 ">
      <Article
        img={macbook}
        date="31 May, 2024"
        author="Suraj Pradhan"
        title={title}
        description="New Macbook Pro with M3 chips has arrived with improved performance, all new unibody metal design and efficient cooling."
      />
    </div>
  );
};

export default BlogPosts;

"use client";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/app/types/post";

// post cards for blog page for the list of posts
// Post Card Component !
export default function PostCard({
  post: { slug, title, cover,desc},
}: {
  post: Post;
}) {
  return (
    <>
      <Link href={`/${slug}`}>
        <article className="mx-auto flex max-w-[25rem] flex-col overflow-hidden rounded-xl shadow-xl shadow-gray-400 transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl dark:shadow-black">
          <div className="relative h-60">
            <Image
              src={cover}
              alt="cover image"
              fill
              style={{ objectFit: "cover" }}
              placeholder="blur"
              width={400}
              height={240}
            />
          </div>
          <div className="flex h-48 flex-col p-4">
            <h3 className="line-clamp-2 h-16 text-2xl font-bold">{title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {desc}
            </p>
          </div>
        </article>
      </Link>
    </>
  );
}

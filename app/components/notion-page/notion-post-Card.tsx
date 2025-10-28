"use client";
import { Post } from "@/app/types/post";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({
  post: { slug, cover, blurUrl, title, desc /*, categories */ },
}: {
  post: Post;
}) {
  return (
    <Link href={`/${slug}`} className="group">
      <article className="relative mx-auto flex h-[28rem] max-w-[22rem] flex-col overflow-hidden rounded-2xl bg-slate-950 transition-all duration-500 hover:-translate-y-2 dark:bg-gray-900">
        {/* Image Container with Overlay */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={cover}
            alt="cover image"
            style={{ objectFit: "cover" }}
            placeholder="blur"
            blurDataURL={blurUrl}
            className="transition-transform duration-700 group-hover:scale-110"
            width={400}
            height={240}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
        </div>

        {/* Content Container */}
        <div className="flex flex-1 flex-col justify-between p-6">
          <h3 className="mb-3 line-clamp-3 text-xl font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {title}
          </h3>
          {/* title text's */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <div className="line-clamp-3">{desc}</div>
          </div>

          {/* Read More Link */}
          <div className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400">
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              Read more
            </span>
            <svg
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
      </article>
    </Link>
  );
}

"use client";
import { useRef } from "react";
import { Post } from "@/app/types/post";
import PostCard from "@/app/components/notion-page/notion-post-Card";

// Post Grid
export default function PostsGrid({ allPosts }: { allPosts: Post[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={rootRef}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            DevOps Insights by Sagar
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>
        {allPosts.length ? (
          <ul
            id="posts-grid"
            className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
          >
            {allPosts.map((post, index) => (
              <li
                key={post.slug}
                className="transform transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-slate-700 overflow-hidden backdrop-blur-sm bg-opacity-80 dark:bg-opacity-90">
                  <PostCard post={post} />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-20">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-12 max-w-md mx-auto border border-gray-200 dark:border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No Posts Found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We couldn't find any matching posts. Try adjusting your search
                criteria.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

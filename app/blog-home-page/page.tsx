'use client';
import { useRef } from 'react';
import { Post } from '@/app/types/post';
import PostCard from '../components/notion-page/notion-post-Card';

export default function PostsGrid({ allPosts }: { allPosts: Post[] }) {
//   const { posts, totalPages } = usePosts(allPosts);
  const rootRef = useRef<HTMLDivElement>(null);
  return (
    <section
      ref={rootRef}
      className="flex scroll-mt-12 flex-col items-center space-y-16"
    >
      {allPosts.length ? (
        <ul
          id="posts-grid"
          className="grid w-full grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-3"
        >
          {allPosts.map((post) => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 text-center text-lg">No matching posts found</p>
      )}
      {/* <Paginate totalPages={totalPages} elementToScroll={rootRef.current} /> */}
    </section>
  );
}

'use client';

import { useRef } from 'react';
// import Paginate from './paginate';
// import PostCard from './notion-post-Card';
import { Post } from '@/app/types/post';


export default function PostsGrid({ allPosts }: { allPosts: Post[] }) {
//   const { posts, totalPages } = usePosts(allPosts);
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={rootRef}
      className="flex scroll-mt-12 flex-col items-center space-y-16"
    >
        <h1 className=' text-zinc-950'>Posts categories you have to add</h1>
    </section>
  );
}

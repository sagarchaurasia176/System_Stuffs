// app/types/post.ts
export interface Post {
  id: string;
  slug: string;
  title: string;
  categories: string[];
  cover: string;
  published: boolean;
  blurUrl?: string;
  desc: string;
}


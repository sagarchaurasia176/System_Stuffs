import { Metadata } from "next";
import { getAllPostsFromNotion } from "../services/posts";


export async function generateStaticParams() {
  // removed incorrect assignment; no code needed here
  const allPosts = await getAllPostsFromNotion();
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const allPosts = await getAllPostsFromNotion();
  const post = allPosts.find((p) => p.slug === slug);

  return post
    ? {
        title: post.title,
        openGraph: {
          images: [
            {
              url: post.cover,
              width: 1200,
              height: 630,

              alt: post.title ?? "Cover image",
            },
          ],
        },
      }
    : {};
}
// ➡️This is basiscally a slug page that fetches the post data based on the slug from the URL
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NotionPage from "../components/home/page";
import { getRecordMap } from "../libs/notion";
import { getAllPostsFromNotion } from "../services/posts";

export default async function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const allPosts = await getAllPostsFromNotion();
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    throw new Error("Post not found");
  }

  if (!post.published) {
    return (
      <div className="mx-auto bg-slate-950 text-center">
        <h2 className="text-3xl font-bold">Post Not Found</h2>
        <Link href="/">
          <span className="mr-2">&larr;</span>
          <span>Go to list page</span>
        </Link>
      </div>
    );
  }
  const recordMap = await getRecordMap(post.id);
  return (
    <>
      <div className="flex flex-col items-center bg-slate-950 text-white">
        <div className="relative aspect-[3/2] w-[90vw] max-w-[900px]">
          <Image
            src={post.cover}
            alt="cover"
            placeholder="blur"
            blurDataURL={post.blurUrl}
            width={1000}
            height={667}
            className="rounded-md object-cover"
          />
        </div>
        <NotionPage post={post} recordMap={recordMap} />
      </div>
    </>
  );
}

export async function generateStaticParams() {
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

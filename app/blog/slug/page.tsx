// import NotionPage from "@/app/components/notion-page/notion-page";
// import { getRecordMap } from "@/app/libs/notion";
// import { getAllPostsFromNotion } from "@/app/services/posts";
// import { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// // import { Post } from "@/app/types/post";

// export default async function PostPage({ params: { slug } }: { params: { slug: string } }) {
//   const allPosts = await getAllPostsFromNotion();
//   const post = allPosts.find((p) => p.slug === slug);

//   if (!post) return notFound();
//   if (!post.published) {
//     return (
//       <article className="mx-auto mt-40 text-center">
//         <h2 className="mb-4 text-3xl font-bold">Post Not Found</h2>
//         <Link href="/"><span>&larr;</span> Go to list pag e</Link>
//       </article>
//     );
//   }

//   const recordMap = await getRecordMap(post.id);

//   return (
//     <article className="mt-4 flex flex-col items-center md:mt-8">
//       <div className="relative aspect-[3/2] w-[90vw] max-w-[900px]">
//         <Image
//           src={post.cover}
//           alt="cover"
//           fill
//           style={{ objectFit: "cover" }}
//           placeholder="blur"
//           blurDataURL={post.blurUrl}
//         />
//       </div>
//       <NotionPage post={post} recordMap={recordMap} />
//     </article>
//   );
// }

// export async function generateStaticParams() {
//   const allPosts = await getAllPostsFromNotion();
//   return allPosts.map((post) => ({ slug: post.slug }));
// }

// export async function generateMetadata({ params: { slug } }: { params: { slug: string } }): Promise<Metadata> {
//   const allPosts = await getAllPostsFromNotion();
//   const post = allPosts.find((p) => p.slug === slug);

//   return post
//     ? {
//         title: post.title,
//         openGraph: { images: [{ url: post.cover, width: 400, height: 300 }] },
//       }
//     : {};
// }

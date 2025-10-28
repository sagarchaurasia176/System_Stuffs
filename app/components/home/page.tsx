// app/components/notion-page.tsx
"use client";
import { useTheme } from "next-themes";
import { NotionRenderer } from "react-notion-x";
import { Block, ExtendedRecordMap } from "notion-types";
import useMounted from "@/app/hooks/useMounted";
import { Post } from "@/app/types/post";

// Notion Inside Page Component !

export default function NotionPage({
  post,
  recordMap,
}: {
  post: Post;
  recordMap: ExtendedRecordMap;
}) {
  const { theme } = useTheme();
  const mounted = useMounted();
  // ✅ Check if post exists BEFORE accessing properties
  if (!post) return <div className="loader ">Loading the post...</div>;
  return (
    <div className="w-full flex flex-col items-center  text-white bg-slate-950">
      {/* Notion Content */}
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false}
        darkMode={mounted ? theme === "white" : "dark"}
        showTableOfContents
        forceCustomImages
        disableHeader
        className="w-full max-w-3xl px-4 sm:px-6  prose-img:rounded-md text-white"
        components={{ nextImage: Image }}
        mapImageUrl={(url, block) => mapImageUrl(url as any, block) || ""}
      />
    </div>
  );
}

// map Image URL function to handle Notion image URLs
export function mapImageUrl(url: string, block: Block): string | null {
  if (!url) return null;

  // Allow inline base64 and Unsplash URLs
  if (
    url.startsWith("data:") ||
    url.startsWith("https://images.unsplash.com")
  ) {
    return url;
  }

  try {
    const u = new URL(url);

    // If it's already signed (AWS URL)
    if (
      u.hostname.endsWith(".amazonaws.com") &&
      u.searchParams.has("X-Amz-Signature")
    ) {
      return url;
    }
  } catch {
    // Ignore invalid URLs
  }

  // Fix relative URLs (from Notion CDN)
  if (url.startsWith("/images")) {
    url = `https://www.notion.so${url}`;
  }

  // Encode and rebuild the URL for Notion’s proxy
  const encodedUrl = encodeURIComponent(url);
  const notionBase = "https://www.notion.so";
  const notionImageUrl = new URL(`${notionBase}/image/${encodedUrl}`);

  let table = block.parent_table === "space" ? "block" : block.parent_table;
  if (["collection", "team"].includes(table)) table = "block";

  notionImageUrl.searchParams.set("table", table);
  notionImageUrl.searchParams.set("id", block.id);
  notionImageUrl.searchParams.set("cache", "v2");

  return notionImageUrl.toString();
}

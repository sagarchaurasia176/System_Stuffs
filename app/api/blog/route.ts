import { NextResponse } from 'next/server';
// import { getErrorMessage } from '@/utils/get-error-message';
import { getAllPostsFromNotion } from '@/app/services/posts';
import { getErrorMessage } from '@/app/utils/get-error-msg';

export async function GET() {
  try {
    const allPosts = await getAllPostsFromNotion();
    console.log("allPosts", allPosts);
    return NextResponse.json({ posts: allPosts });
  } catch (e) {
    return NextResponse.json({ error: getErrorMessage(e) }, { status: 500 });
  }
}

// import PostsGrid from "@/app/(blog-home-page)/page";
import { getAllPostsFromNotion } from "@/app/services/posts";
import PostsGrid from "../../(blog-home-page)/Blogs/page";

export default async function ResourcesPage() {   
    // this function is called on server side !
    const allPost = await getAllPostsFromNotion();
    
    return (
        <div className="text-white">        
            <PostsGrid allPosts={allPost} />
        </div>
    )}
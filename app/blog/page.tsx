import Link from "next/link";
import { PostCard } from "@/components/feature/blog/PostCard";
import { getPublishedPosts } from "@/lib/notion";

export default async function BlogPost() {
    const posts = await getPublishedPosts();
    return (
        <div className="w-full max-w-[1376px] mt-4 p-4 grid grid-cols-1 md:grid-cols-2 md:px-6 md:gap-6 lg:grid-cols-4 gap-4 pb-10">
            {posts.map((post) => (
                <Link
                    href={`/blog/${post.slug}`}
                    key={post.id}
                    className="h-full"
                >
                    <PostCard post={post} />
                </Link>
            ))}
        </div>
    );
}

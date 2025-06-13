import Header from "@/src/components/layouts/Header";
import Link from "next/link";
import { PostCard } from "@/src/components/feature/post/PostCard";
import { getPublishedPosts } from "@/src/lib/notion";

export default async function Home() {
    const posts = await getPublishedPosts();
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex flex-col items-center h-screen text-center overflow-y-auto">
                {/* 블로그 카드 그리드 */}
                <div className="w-full max-w-[500px] mt-4 p-4">
                    {/* 블로그 카드 반복 */}
                    {posts.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post.id}>
                            <PostCard post={post} />
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}

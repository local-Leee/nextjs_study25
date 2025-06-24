"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 px-4 py-2 border-b border-gray-200 flex justify-between items-center z-50 bg-background">
            <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold">
                    블로그
                </Link>
            </div>
            <div className="flex gap-4 justify-end">
                <Button asChild>
                    <Link href="/blog/write">글쓰기</Link>
                </Button>
            </div>
        </header>
    );
}

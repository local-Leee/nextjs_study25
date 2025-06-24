"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import { NotionPost } from "@/types/notion";

interface PostCardProps {
    post: NotionPost;
}

export function PostCard({ post }: PostCardProps) {
    return (
        <Card className="flex flex-col group bg-card/50 border-border/40 hover:border-primary/20 overflow-hidden border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg h-full">
            {post.coverImage && (
                <div className="relative aspect-[1/1] md:aspect-[1.5/1] lg:aspect-[1/1.5] overflow-hidden">
                    <div className="from-background/20 absolute inset-0 z-10 bg-gradient-to-t to-transparent" />
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={false}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
            )}
            <CardContent className="p-6 flex flex-col flex-1">
                <div className="mb-4 flex flex-wrap gap-2">
                    {post.tags?.map((tag) => (
                        <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20 font-medium transition-colors"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
                <h2 className="group-hover:text-primary mb-2 text-lg font-bold tracking-tight transition-colors text-left line-clamp-2 leading-relaxed">
                    {post.title}
                </h2>
                {post.description && (
                    <p className="text-muted-foreground line-clamp-2 leading-relaxed text-left">
                        {post.description}
                    </p>
                )}
                <div className="pt-4 text-xs text-gray-500 flex flex-col items-end mt-auto gap-x-4">
                    {post.author && (
                        <div className="flex items-center gap-1.5">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                        </div>
                    )}
                    {post.date && (
                        <div className="flex items-center gap-1.5 pt-1">
                            <Calendar className="h-4 w-4" />
                            <time>
                                {format(new Date(post.date), "PPP", {
                                    locale: ko,
                                })}
                            </time>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}

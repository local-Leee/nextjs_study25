export interface Post {
    id: string;
    title: string;
    description?: string;
    coverImage?: string;
    author?: string;
    date?: string;
    tags?: string[];
    modifiedDate?: string;
    slug: string;
    content?: string;
    createdTime?: string;
}

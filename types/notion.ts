export interface NotionPost {
    id: string;
    title: string;
    description?: string;
    coverImage?: string;
    tags?: string[];
    author?: string;
    date?: string;
}

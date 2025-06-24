import { Client } from "@notionhq/client"; // 노션에서 제공하는 클라이언트 라이브러리
import type { Post } from "@/types/post";
import type {
    PageObjectResponse,
    PersonUserObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

// 게시글 목록 조회
export const getPublishedPosts = async (): Promise<Post[]> => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
        filter: {
            property: "Status",
            select: {
                equals: "Published",
            },
        },
        sorts: [
            {
                property: "Date",
                direction: "descending",
            },
        ],
    });

    // console.log(response.results);

    return response.results
        .filter((page): page is PageObjectResponse => "properties" in page)
        .map((page) => {
            const { properties } = page;

            const getCoverImage = (cover: PageObjectResponse["cover"]) => {
                if (!cover) return "";

                switch (cover.type) {
                    case "external":
                        return cover.external.url;
                    case "file":
                        return cover.file.url;
                    default:
                        return "";
                }
            };

            return {
                id: page.id,
                title:
                    properties.Title.type === "title"
                        ? properties.Title.title[0]?.plain_text ?? ""
                        : "",
                description:
                    properties.Description.type === "rich_text"
                        ? properties.Description.rich_text[0]?.plain_text ?? ""
                        : "",
                coverImage: getCoverImage(page.cover),
                tags:
                    properties.Tags.type === "multi_select"
                        ? properties.Tags.multi_select.map((tag) => tag.name)
                        : [],
                author:
                    properties.Author.type === "people"
                        ? (
                              properties.Author
                                  .people[0] as PersonUserObjectResponse
                          )?.name ?? ""
                        : "",
                date:
                    properties.Date.type === "date"
                        ? properties.Date.date?.start ?? ""
                        : "",
                modifiedDate: page.last_edited_time,
                slug:
                    properties.Slug.type === "rich_text"
                        ? properties.Slug.rich_text[0]?.plain_text ?? page.id
                        : page.id,
            };
        });
};

// 게시글 등록 - 타입 정의
export interface CreatePostParams {
    title: string;
    tag: string;
    content: string;
}

// 파라미터로 타이틀, 태그, 컨텐츠를 입력받아 하나의 노션 페이지를 작성하는 함수
export const createPost = async ({ title, tag, content }: CreatePostParams) => {
    // notion.pages.create 메서드를 사용하여 새로운 페이지를 생성
    const response = await notion.pages.create({
        parent: {
            database_id: process.env.NOTION_DATABASE_ID!,
        },
        properties: {
            Title: {
                title: [
                    {
                        text: {
                            content: title,
                        },
                    },
                ],
            },
            Description: {
                rich_text: [
                    {
                        text: {
                            content: content,
                        },
                    },
                ],
            },
            Tags: {
                multi_select: [{ name: tag }],
            },
            Status: {
                select: {
                    name: "Published",
                },
            },
            Date: {
                date: {
                    start: new Date().toISOString(),
                },
            },
        },
    });

    return response;
};

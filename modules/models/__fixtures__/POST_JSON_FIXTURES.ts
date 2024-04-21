import { PostJson } from "../Post";

export const POST_JSON_FIXTURES: PostJson[] = [
  {
    id: "post-component-list",
    title: "포스팅에서 사용되는 컴포넌트 소개",
    thumbnail: "https://via.placeholder.com/150",
    description: "포스팅에서 사용되는 컴포넌트 리스트를 소개합니다.",
    tags: ["React", "TypeScript"],
    readability: 90,
    updatedAt: "2024년 1월 1일",
  },
  {
    id: "build-nextjs-static-site",
    title: "Next.js 정적 사이트 빌드하기",
    thumbnail: "https://via.placeholder.com/150",
    description: "Next.js로 정적 사이트를 빌드하는 방법을 소개합니다.",
    tags: ["Next.js", "React", "TypeScript"],
    readability: 0,
    updatedAt: "2024년 1월 2일",
  },
];

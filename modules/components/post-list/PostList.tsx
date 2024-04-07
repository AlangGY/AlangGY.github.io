"use client";

import { PostJson } from "@/modules/models/Post";
import { PostListItem } from "./PostListItem";
import { useRouter } from "next/navigation";
import { vstack } from "@/styled-system/patterns";

interface Props {
  posts: PostJson[];
}

export function PostList({ posts }: Props) {
  const router = useRouter();

  return (
    <ul className={containerStyle}>
      {posts.map((post) => (
        <PostListItem
          key={post.id}
          post={post}
          onClick={(post) => router.push(`/posts/${post.id}`)}
        />
      ))}
    </ul>
  );
}

const containerStyle = vstack({
  alignItems: "stretch",
  gap: {
    base: 4,
    sm: 8,
  },
});

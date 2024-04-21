import fs from "fs";
import { evaluatePost } from "./evaluate-post.js";

const getPostList = () => {
  // posts path: posts/*.mdx
  const files = fs.readdirSync(new URL("../posts", import.meta.url));
  const matchPost = /\.mdx$/;
  const posts = files.filter((file) => matchPost.test(file));
  return posts;
};

const createPostManifest = (posts) => {
  fs.writeFileSync(
    new URL("../posts/postInfos.json", import.meta.url),
    JSON.stringify(posts)
  );
};

const evaluationPromises = getPostList().map((post) => {
  const file = fs.readFileSync(new URL(`../posts/${post}`, import.meta.url));
  return evaluatePost(post, file.toString());
});

export const generatePostsInfo = async () => {
  return Promise.all(evaluationPromises).then((results) => {
    createPostManifest(results);
    console.log("\n Post manifest created");
  });
};

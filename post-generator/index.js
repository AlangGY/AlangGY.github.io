import { generatePostsInfo } from "./generate-posts-info.js";

generatePostsInfo().then(() => {
  process.exit(0);
});

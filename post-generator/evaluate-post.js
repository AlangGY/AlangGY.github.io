import fs from "fs";
import { openai } from "./openai.js";

const getEvaluatePrompt = () => {
  const file = fs.readFileSync(
    new URL("evaluate-post-prompt.txt", import.meta.url)
  );
  return file.toString();
};

const getMetaData = (postText) => {
  const title = postText.match(/title: "(.*)"/)[1];
  const description = postText.match(/description: "(.*)"/)[1];
  return { title, description };
};

export async function evaluatePost(post, postText) {
  const metaData = getMetaData(postText);
  const result = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: getEvaluatePrompt() },
      {
        role: "system",
        content: postText,
      },
    ],
  });
  const evaluationResult = result.choices[0].message.content;
  const evaluationResultJSON = JSON.parse(evaluationResult);
  process.stdout.write(evaluationResult);
  try {
    return {
      title: metaData.title,
      description: metaData.description,
      href: post.replace(/\.mdx$/, ""),
      updatedAt: Date.now(),
      ...evaluationResultJSON,
    };
  } catch (e) {
    console.log("Error parsing JSON");
    console.log(e);
    return null;
  }
}

import { OpenAI } from "langchain/llms/openai";

require("dotenv").config();

export const run = async () => {
  const llm = new OpenAI({ temperature: 0.9 });

  const res = await llm.call(
    "日本の首都は？"
  );
  console.log(res);
};
run();
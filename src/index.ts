import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";

require("dotenv").config();

export const run = async () => {
  const llm = new OpenAI({ temperature: 0.9 });

  const prompt = new PromptTemplate({
    inputVariables: ["country"],
    template: "{country}の首都は？"
  })

  const buildedPrompt = await prompt.format({ country: "アメリカ" });

  const res = await llm.call(buildedPrompt);
  console.log(res);
};
run();
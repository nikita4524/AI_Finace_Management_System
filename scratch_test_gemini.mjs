import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function testModel(modelName) {
  try {
    const model = genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContent("Hello!");
    console.log(`[${modelName}] Success:`, result.response.text());
  } catch (error) {
    console.error(`[${modelName}] Error:`, error.status, error.statusText);
  }
}

async function run() {
  await testModel("gemini-2.0-flash");
  await testModel("gemini-2.0-flash-lite-001");
  await testModel("gemini-flash-lite-latest");
}

run();

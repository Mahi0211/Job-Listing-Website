import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "../data/jobs.json");

// Function to read posts.json
export const readJobs = async () => {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading jobs.json", error);
    return [];
  }
};

// Function to write to jobs.json
export const writeJobs = async (jobs) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(jobs, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing to jobs.json", error);
  }
};

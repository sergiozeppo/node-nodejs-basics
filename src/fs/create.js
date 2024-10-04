import { writeFile } from "node:fs/promises";

const path = "./src/fs/files/fresh.txt";
const content = "I am fresh and young";

const create = async () => {
  try {
    await writeFile(path, content, { flag: "wx+" });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();

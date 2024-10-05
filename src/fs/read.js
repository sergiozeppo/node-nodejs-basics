import { promises as fs } from "fs";
import path from "node:path";
import { fileURLToPath } from "url";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);
const filesDir = path.join(dirName, "files");
const fileToRead = path.join(filesDir, "fileToRead.txt");

const read = async () => {
  try {
    console.log(await fs.readFile(fileToRead, "utf-8"));
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();

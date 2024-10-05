import { promises as fs } from "fs";
import path from "node:path";
import { fileURLToPath } from "url";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);
const filesDir = path.join(dirName, "files");
const fileToDelete = path.join(filesDir, "fileToRemove.txt");

const remove = async () => {
  try {
    await fs.rm(fileToDelete);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();

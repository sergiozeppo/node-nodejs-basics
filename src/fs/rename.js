import { promises as fs } from "fs";
import path from "node:path";
import { fileURLToPath } from "url";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);
const filesDir = path.join(dirName, "files");
const origFile = path.join(filesDir, "wrongFilename.txt");
const newFile = path.join(filesDir, "properFilename.md");

const rename = async () => {
  const origFileStats = await fs.stat(origFile).catch(() => false);
  const newFileStats = await fs.stat(newFile).catch(() => false);
  if (!origFileStats || newFileStats) {
    throw new Error("FS operation failed");
  } else fs.rename(origFile, newFile);
};

await rename();

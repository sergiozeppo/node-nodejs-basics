import { promises as fs } from "fs";
import path from "node:path";
import { fileURLToPath } from "url";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);
const filesDir = path.join(dirName, "files");

const list = async () => {
  try {
    console.log(await fs.readdir(filesDir));
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();

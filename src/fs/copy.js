import { promises as fs } from "fs";
import path from "node:path";
import { fileURLToPath } from "url";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

async function copyDir(source, destination) {
  await fs.mkdir(destination, { recursive: true });
  const entries = await fs.readdir(source, { withFileTypes: true });

  for (let entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const destinationPath = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      await copyDir(sourcePath, destinationPath);
    } else {
      await fs.copyFile(sourcePath, destinationPath);
    }
  }
}

async function copy() {
  const sourceFolder = path.join(dirName, "files");
  const destinationFolder = path.join(dirName, "files_copy");

  await fs.access(sourceFolder);
  try {
    await fs.access(destinationFolder);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code !== "ENOENT") {
      throw new Error("FS operation failed");
    }
  }

  await copyDir(sourceFolder, destinationFolder);

  console.log("Folder copied successfully!");
}

copy();

import { createHash } from "node:crypto";
import fs from "fs";
import path from "node:path";
import { fileURLToPath } from "url";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);
const fileToHash = path.join(dirName, "files/fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const hash = createHash("sha256");
  const fStream = fs.createReadStream(fileToHash);
  fStream.on("data", (chunk) => {
    hash.update(chunk);
  });
  fStream.on("end", () => {
    const result = hash.digest("hex");
    console.log(`SHA256-hash is: ${result}`);
  });
  fStream.on("error", (err) => {
    console.error(err);
  });
};

await calculateHash();

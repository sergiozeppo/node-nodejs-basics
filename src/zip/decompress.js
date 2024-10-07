import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { pipeline } from "stream";
import { createGunzip } from "zlib";
import { fileURLToPath } from "url";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);
const sourceFile = path.join(dirName, "files/archive.gz");
const destFile = path.join(dirName, "files/fileToCompress.txt");

const decompress = async () => {
  const sourceStream = createReadStream(sourceFile);
  const gUNzipStream = createGunzip();
  const destStream = createWriteStream(destFile);

  pipeline(sourceStream, gUNzipStream, destStream, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("File succesfully compressed at path: " + destFile);
    }
  });
};

await decompress();

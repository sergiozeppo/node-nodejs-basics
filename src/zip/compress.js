import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { pipeline } from "stream";
import { createGzip } from "zlib";
import { fileURLToPath } from "url";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);
const sourceFile = path.join(dirName, "files/fileToCompress.txt");
const destFile = path.join(dirName, "files/archive.gz");

const compress = async () => {
  const sourceStream = createReadStream(sourceFile);
  const gzipStream = createGzip();
  const destStream = createWriteStream(destFile);

  pipeline(sourceStream, gzipStream, destStream, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("File succesfully compressed at path: " + destFile);
    }
  });
};

await compress();

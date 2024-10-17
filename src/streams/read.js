import { createReadStream } from "fs";
import { stdout } from "process";

const read = async () => {
  const file = "./src/streams/files/fileToRead.txt";
  const readStream = createReadStream(file);
  readStream.on("data", (chunk) => {
    stdout.write(chunk + "\n");
  });
};

await read();

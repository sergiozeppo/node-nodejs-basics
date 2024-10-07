import { createWriteStream } from "fs";
import { stdin } from "process";

const write = async () => {
  const file = "./src/streams/files/fileToWrite.txt";
  const ws = createWriteStream(file);
  stdin.pipe(ws);
};

await write();

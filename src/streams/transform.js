import { Transform } from "stream";
import { stdin, stdout } from "process";

const transform = async () => {
  const ts = new Transform({
    transform(chunk, _, reversed) {
      const dataRev = chunk.toString().trim().split("").reverse().join("");
      reversed(null, dataRev + "\n");
    },
  });
  stdin.pipe(ts).pipe(stdout);
};

await transform();

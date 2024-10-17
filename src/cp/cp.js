import { fork } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);
const scriptPath = path.join(dirName, "./files/script.js");

const spawnChildProcess = async (args) => {
  const childProcess = fork(scriptPath, args, {
    silent: true,
  });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(["someArgument1", "someArgument2"]);

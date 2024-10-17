import { Worker } from "node:worker_threads";
import { cpus } from "os";
import path from "path";
import { fileURLToPath } from "url";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);
const workerPath = path.join(dirName, "/worker.js");
const startPoint = 10;

const performCalculations = async () => {
  const cores = cpus().length;
  const promises = [];

  for (let i = 0; i < cores; i++) {
    promises.push(createWorker(workerPath, i + startPoint));
  }

  const results = await Promise.all(promises);
  console.log(results);
};

const createWorker = (workerPath, workerData) => {
  return new Promise((resolve) => {
    const worker = new Worker(workerPath, { workerData });

    worker.on("message", (result) => {
      resolve({ status: "resolved", data: result });
    });

    worker.on("error", (err) => {
      console.error(`Worker error: ${err}`);
      resolve({ status: "error", data: null });
    });
  });
};

performCalculations();

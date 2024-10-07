import { env } from "node:process";

const parseEnv = () => {
  const result = [];
  for (const [key, value] of Object.entries(env)) {
    if (key.startsWith("RSS_")) {
      result.push(`${key}=${value}`);
    }
  }
  console.log(result.join("; "));
};

parseEnv();

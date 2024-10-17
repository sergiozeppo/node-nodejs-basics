import { argv } from "node:process";

const parseArgs = () => {
  const args = argv.slice(2);
  const result = [];
  args.forEach((value, index) => {
    if (index % 2 === 0) {
      if (value.startsWith("--")) {
        result.push(`${value.slice(2)} is ${args[index + 1]}`);
      }
    }
  });
  console.log(result.join(", "));
};

parseArgs();

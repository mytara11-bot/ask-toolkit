import { copyFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(projectRoot, "dist");
const indexFile = path.join(outputDirectory, "index.html");
const fallbackFile = path.join(outputDirectory, "404.html");

await access(indexFile, constants.R_OK);
await copyFile(indexFile, fallbackFile);
console.log("Prepared dist/404.html as the static hosting fallback.");

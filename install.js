#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const petId = "silver-frost";
const repoRoot = __dirname;
const sourceDir = path.join(repoRoot, petId);
const targetDir = path.join(os.homedir(), ".codex", "pets", petId);

function copyFile(name) {
  const source = path.join(sourceDir, name);
  const target = path.join(targetDir, name);

  if (!fs.existsSync(source)) {
    throw new Error(`Missing required file: ${source}`);
  }

  fs.copyFileSync(source, target);
}

fs.mkdirSync(targetDir, { recursive: true });
copyFile("pet.json");
copyFile("spritesheet.webp");

console.log("银霜已安装到 Codex 宠物目录：");
console.log(targetDir);
console.log("");
console.log("请重启 Codex，然后在宠物列表里选择 Silver Frost。");

/*
 * Metodos para retornar informações do git e github
 */

import path from "path";
import { paths } from "./file.js";
import { readFileSync, existsSync } from "fs";

export const getRepoName = () => {
  const gitConfigPath = path.join(paths.root, ".git", "config");
  if (existsSync(gitConfigPath)) return null;

  const configContent = readFileSync(gitConfigPath, "utf-8");
  return (
    configContent
      .match(/url\s*=\s*(.+)/)?.[1]
      ?.trim()
      .split("/")
      .pop()
      ?.replace(/\.git$/, "") ?? null
  );
};

export const getReleaseVersion = () =>{
  
}


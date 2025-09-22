#!/usr/bin/env node
import { input, select, confirm } from "@inquirer/prompts";

import type {
  ProjectData,
  ProjectImage,
  ProjectLink,
} from "./types/project.js";
import { existsFile, saveInfo, saveReadme } from "./utils/file.js";

export default async function create(): Promise<void> {
  if (existsFile("info") && existsFile("readme")) {
    console.log(
      "⚠️ README.md e docs/info.json já existem. Não sobrescrevendo."
    );
  } else {
    const jsonData = await askAll();
    saveInfo(jsonData);
    saveReadme(jsonData);
  }
}

async function askAll(): Promise<ProjectData> {
  return {
    title: await input({
      message: "Título do projeto:",
      validate: (v) => !!v || "Obrigatório",
    }),
    description: await input({
      message: "Descrição do projeto:",
    }),
    status: await select({
      message: "Status do projeto:",
      choices: ["not-started", "in-progress", "completed"],
    }),
    images: await askImages(),
    stacks: await askStacks(),
    links: await askLinks(),
  };
}

async function askStacks(): Promise<string[]> {
  const stacksInput = await input({
    message: "Stacks do projeto (separe por vírgula):",
  });
  const stacks = new Set(
    stacksInput
      .split(",")
      .map((s: string) => s.trim())
      .filter(Boolean)
  );
  return [...stacks];
}

async function askLinks(): Promise<ProjectLink[]> {
  const links: ProjectLink[] = [];

  const isAdding = await confirm({
    message: "Deseja adicionar links?",
    default: false,
  });
  let addMore = isAdding;

  while (addMore) {
    const name = await input({
      message: "Nome do link (ex.:Github):",
      validate: (v) => !!v || "Obrigatório",
    });

    const url = await input({
      message: "URL:",
      validate: (v) => v.startsWith("http") || "URL inválida",
    });

    const more = await confirm({
      message: "Adicionar outro link?",
      default: false,
    });

    links.push({ name, url });
    addMore = more;
  }
  return links;
}

async function askImages(): Promise<ProjectImage[]> {
  const images: ProjectImage[] = [];

  const isAdding = await confirm({
    message: "Deseja adicionar imagens?",
    default: false,
  });

  let addMore = isAdding;

  while (addMore) {
    const url = await input({
      message: "URL:",
      validate: (v) => v.startsWith("http") || "URL inválida",
    });

    const more = await confirm({
      message: "Adicionar outra imagem?",
      default: false,
    });

    images.push({ url });
    addMore = more;
  }

  return images;
}

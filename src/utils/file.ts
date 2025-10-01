/*
 * Informações sobre as pastas e arquivos que serão criados
 */
import fs from "fs";
import path from "path";
import type { ProjectData } from "../types/project.js";
import { writeFileSync } from "fs";
import { generateStackBadges } from "../constants/stacks.js";

const root = process.cwd();
const docsDir = path.join(root, "docs");

export const paths = {
  root: root,
  docsDir: docsDir,
  infoPath: path.join(docsDir, "info.json"),
  readmePath: path.join(root, "README.md"),
};

export function createDocsDir(): void {
  if (!fs.existsSync(paths.docsDir))
    fs.mkdirSync(paths.docsDir, { recursive: true });
}

export function existsFile(path: "readme" | "info"): boolean {
  switch (path) {
    case "readme":
      return fs.existsSync(paths.readmePath);

    case "info":
      return fs.existsSync(paths.infoPath);
    default:
      return false;
  }
}

export function saveInfo(jsonData: ProjectData): void {
  if (existsFile("info"))
    console.log("⚠️ docs/info.json já existe. Não sobrescrevendo.");
  else {
    createDocsDir();
    writeFileSync(paths.infoPath, JSON.stringify(jsonData, null, 2));
    console.log("📝 info.json criado.");
  }
}

export function saveReadme(jsonData: ProjectData): void {
  if (existsFile("readme")) {
    console.log("⚠️ README.md já existe. Não sobrescrevendo.");
  } else {
    const currentYear = new Date().getFullYear();
    const readmeContent = `# 🚀 ${jsonData.title}

  ## 📖 Visão Geral
  ${jsonData.description}

  ## 📋 Funcionalidades Principais
  - ✅ <FUNCIONALIDADE_1>
  - ✅ <FUNCIONALIDADE_2>
  - ✅ <FUNCIONALIDADE_3>

  ## 🛠️ Tecnologias Utilizadas
  ${generateStackBadges(jsonData.stacks)}

  ## 📦 Bibliotecas Principais  
  - [biblioteca](link) → descrição de utilidade  

  ## 📂 Estrutura do Projeto
  \`\`\`bash
  .
  ├── backend/      # Código do servidor
  ├── frontend/     # Interface do usuário
  ├── docs/         # Documentação
  └── README.md     # Este arquivo
  \`\`\`

  ## ⚙️ Instalação e Uso

  ### 1. Clone o repositório
  \`\`\`bash

  git clone "<REPO_URL>"

  \`\`\`

  ### 2. Instale as dependências
  \`\`\`bash
  npm install
  \`\`\`

  ### 3. Execute o projeto
  \`\`\`bash
  npm run dev
  \`\`\`

  > O servidor será iniciado em: [http://localhost:3000](http://localhost:3000)

  ## 🧪 Testes
  Rodar a suíte de testes:
  \`\`\`bash
  npm run test
  \`\`\`
  Lab-Fábrica de Software • ${currentYear}`
  ;

    writeFileSync(paths.readmePath, readmeContent.trim());
    console.log("📝 README.md criado.");
  }
}

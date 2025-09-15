import type { commandProps } from "../types/commandProps.js";


export const commandList: commandProps[] = [
  {
    name: "create",
    description: "Inicia um novo processo ou projeto.",
    enabled: true,
  },
  {
    name: "update",
    description: "Modifica um processo ou projeto existente.",
    enabled: false,
  },
  {
    name: "check",
    description: "Consulta o status ou detalhes de um projeto.",
    enabled: false,
  },
];

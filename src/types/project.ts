/*
 * Interfaces para pergutas sobre o projeto
 */

export interface ProjectLink {
  name: string;
  url: string;
}

export interface ProjectImage {
  url: string;
}

export interface ProjectData {
  image: ProjectImage[];
  title: string;
  description: string;
  status: "not-started" | "in-progress" | "completed";
  stacks: string[];
  links: ProjectLink[];
}

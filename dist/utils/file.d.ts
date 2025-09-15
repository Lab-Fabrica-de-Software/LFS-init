import type { ProjectData } from "../types/project.js";
export declare const paths: {
    root: string;
    docsDir: string;
    infoPath: string;
    readmePath: string;
};
export declare function createDocsDir(): void;
export declare function existsFile(path: "readme" | "info"): boolean;
export declare function saveInfo(jsonData: ProjectData): void;
export declare function saveReadme(jsonData: ProjectData): void;
//# sourceMappingURL=file.d.ts.map
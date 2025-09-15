export const mapStacks: Record<string, string> = {
  react: '![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)',
  angular: '![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)',
  typescript: '![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)',
  node: '![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)',
  java: '![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white)',
  'Spring Boot': '![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)',
  postgreSQL: '![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)',
  mongoDB: '![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)',
};

export function generateStackBadges(stacks: string[]): string {
  return stacks
    .map(
      (stack) =>
        mapStacks[stack.toLowerCase().trim()] ||
        `![${stack}](https://img.shields.io/badge/${encodeURIComponent(
          stack
        )}-lightgrey?style=for-the-badge)`
    )
    .join(" ");
}



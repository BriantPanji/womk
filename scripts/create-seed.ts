import { writeFileSync, existsSync } from "fs";
import { argv } from "process";
import path from "path";

const name = argv[2];

if (!name) {
  console.error("Nama seed harus diberikan, mis. `bun run create-seed userTambah`");
  process.exit(1);
}

const filename = `${name}.seed.ts`;
const filepath = path.join(process.cwd(), "prisma/seeds", filename);

if (existsSync(filepath)) {
    console.error("File seeder \"" + filepath + "\" sudah ada. Proses dibatalkan.");
    process.exit(1);
}

const seedName = name.charAt(0).toUpperCase() + name.slice(1);

const template = `import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

export async function seed${seedName}(count: number) {
    console.log("Seeding ${seedName}...");
    
}

export default seed${seedName};
`;

writeFileSync(filepath, template);

console.log("Seeder baru dibuat:", filepath);

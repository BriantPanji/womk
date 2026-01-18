import { existsSync } from "fs";
import { argv } from "process";
import path from "path";
import { execSync } from "child_process";
import Seed from "@p/seeds";

const name = argv[2];

if (!name) {
    if (!existsSync(path.join(process.cwd(), "prisma/seed.ts"))) {
        console.error("Seeder utama (seed.ts) tidak ditemukan. Pastikan file tersebut ada.");
        process.exit(1);
    }
    console.log("Seeder utama (seed.ts) dijalankan...");
    execSync("bun " + path.join(process.cwd(), "prisma/seed.ts"), { stdio: "inherit" });
    process.exit(0);
}

const filename = `${name}.seed.ts`;
const filepath = path.join(process.cwd(), "prisma/seeds", filename);

if (!existsSync(filepath)) {
    console.error("File seeder \"" + filepath + "\" tidak ditemukan. Proses dibatalkan.");
    process.exit(1);
}

let findFunc: keyof typeof Seed = Object.keys(Seed).find((key) => key.toLowerCase() === name.toLowerCase());

if (!findFunc) {
    console.error("Fungsi seeder \"" + name + "\" tidak ditemukan. Proses dibatalkan.");
    process.exit(1);
}

console.log("Seeder \"" + filepath + "\" dijalankan...");

await Seed[findFunc]()
.catch((e: Error) => {
    console.error("[E] Terjadi Error: " + e.stack);
    process.exit(1);
})
.finally(() => {
    console.log(`Seeding "${findFunc}" selesai dijalankan.`)
});

process.exit(0);

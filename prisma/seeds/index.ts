import { seedLingkungan } from "./lingkungan.seed";
import { seedRole } from "./role.seed";
import { seedStatusAccount } from "./statusAccount.seed";
import { seedUser } from "./user.seed";
import { seedUserRole } from "./userRole.seed";
import { seedWilayah } from "./wilayah.seed";
import { seedKelompokJabatan } from "./kelompokJabatan.seed";
import { seedJabatan } from "./jabatan.seed";
import { seedUserJabatan } from "./userJabatan.seed";

export {
  seedLingkungan,
  seedRole,
  seedStatusAccount,
  seedUser,
  seedUserRole,
  seedWilayah,
  seedKelompokJabatan,
  seedJabatan,
  seedUserJabatan,
};

const Seed = {
  lingkungan: seedLingkungan,
  role: seedRole,
  statusAccount: seedStatusAccount,
  user: seedUser,
  userRole: seedUserRole,
  wilayah: seedWilayah,
  kelompokJabatan: seedKelompokJabatan,
  jabatan: seedJabatan,
  userJabatan: seedUserJabatan,
};

export default Seed;

// import { readdirSync } from "fs";

// const Seed: Record<string, Function> = {};

// let seedFiles = readdirSync("./prisma/seeds");
// seedFiles = seedFiles.filter((file) => file.endsWith(".seed.ts"));

// for (const file of seedFiles) {
//   const filePath = `./${file}`;
//   const seedModule = await import(filePath);
//   if (seedModule.default) {
//     Seed[file.split(".")[0]] = seedModule.default;
//   }
// }


// export default Seed;

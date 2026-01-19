import Seed from "./seeds";



async function main() {
    console.log("Seeding dimulai...")
    
    await Seed.wilayah(7);
    await Seed.lingkungan(28);
    await Seed.statusAccount();
    await Seed.role(3);
    await Seed.user(10, 28, 4);
    await Seed.userRole();
    await Seed.kelompokJabatan();
    await Seed.jabatan();
    await Seed.userJabatan();
}

main()
  .catch((e) => {
    console.error("Seeder failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    console.log("Seeding selesai.");
    process.exit(0);
  });

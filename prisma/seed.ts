import seedLingkungan from "./seeds/lingkungan.seed";
import seedRole from "./seeds/role.seed";
import seedStatusAccount from "./seeds/statusAccount.seed";
import seedUser from "./seeds/user.seed";
import seedUserRole from "./seeds/userRole.seed";
import seedWilayah from "./seeds/wilayah.seed";


async function main() {
    console.log("Seeding dimulai...")

    await seedWilayah(7);
    await seedLingkungan(28);
    await seedStatusAccount();
    await seedRole(3);
    await seedUser(10, 28, 4);
    await seedUserRole();
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

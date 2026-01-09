import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedStatusAccount() {
    console.log("Seeding Status Account...")

    const accountStatus = ["aktif", "nonaktif", "pending", "suspensi"];

    await prisma.statusAccount.createMany({
        data: accountStatus.map((status) => ({
            name: status
        }))
    });
}

export default seedStatusAccount;

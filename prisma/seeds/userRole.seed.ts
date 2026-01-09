import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

export async function seedUserRole() {
    console.log("Seeding User Role...")

    const users = await prisma.user.findMany({
        select: {
            id: true
        }
    });
    const roles = await prisma.role.findMany();

    for (const user of users) {
        for (const role of roles) {
            await prisma.userRole.create({
                data: {
                    userId: user.id,
                    roleId: role.id,
                },
            });
        }
    }
}

export default seedUserRole;

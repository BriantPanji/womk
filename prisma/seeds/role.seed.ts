import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma: PrismaClient = new PrismaClient();

export async function seedRole(count: number) {
    console.log("Seeding Role...")

    for (let i = 0; i < count; i++) {
        await prisma.role.create({
            data: {
                name: faker.person.firstName()
            }
        })
    }
}

export default seedRole;

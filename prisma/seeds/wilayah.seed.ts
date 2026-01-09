import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

export async function seedWilayah(count: number = 7) {
    console.log("Seeding Wilayah...")

    for (let i = 0; i < count; i++) {
        await prisma.wilayah.create({
            data: {
                name: faker.person.fullName({firstName: "St."}).replace(/((D|(M(iss)?))rs?\. ?)/gi, ""),
                number: i+1
            }
        })
    }
}

export default seedWilayah;

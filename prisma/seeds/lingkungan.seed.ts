import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

export async function seedLingkungan(count: number = 28) {
    console.log("Seeding Lingkungan...")

    const wilayah = await prisma.wilayah.findMany({
        select: {
            id: true,
            number: true
        },
    });
    for (let i = 0; i < count; i++) {
        const wilayahIndex = Math.floor(i / 4) % wilayah.length;
        const selectedWilayah = wilayah[wilayahIndex];

        await prisma.lingkungan.create({
            data: {
                name: faker.person.fullName({ firstName: "St." }).replace(/((D|(M(iss)?))rs?\. ?)/gi, ""),
                number: i + 1,
                wilayahId: selectedWilayah?.id
            }
        })
    }
}

export default seedLingkungan;

import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

export async function seedUserJabatan(count: number = 20) {
    console.log("Seeding UserJabatan...");

    const users = await prisma.user.findMany({
        select: {
            id: true
        }
    });

    const jabatans = await prisma.jabatan.findMany({
        select: {
            id: true
        }
    });
    

    let startDate = faker.date.past();
    let endDate = faker.date.future();

    for (let i = 0; i < count; i++) {
        const user = users[Math.floor(Math.random() * users.length)];
        const jabatan = jabatans[Math.floor(Math.random() * jabatans.length)];

        await prisma.userJabatan.create({
            data: {
                userId: user.id,
                jabatanId: jabatan.id,
                startDate,
                endDate
            }
        });

        startDate = faker.date.past();
        endDate = faker.date.future();
    }
    
    
}

export default seedUserJabatan;

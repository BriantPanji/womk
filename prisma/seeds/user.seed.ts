import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

export async function seedUser(count: number, maxLingkungan: number, maxStatusAccount: number = 4) {
	console.log("Seeding User...")

	const lingkungans = await prisma.lingkungan.findMany({ select: { id: true } });
	const statusAccounts = await prisma.statusAccount.findMany({ select: { id: true } });

	if (lingkungans.length === 0 || statusAccounts.length === 0) {
		console.warn("Lingkungan or StatusAccount missing. Seeding users might fail if relations are required.");
	}

	for (let i = 0; i < count; i++) {
		await prisma.user.create({
			data: {
				fullName: faker.person.fullName(),
				username: faker.internet.username(),
				email: faker.internet.email(),
				password: faker.internet.password(),
				profilePhoto: faker.image.avatar(),
				whatsapp: faker.phone.number().slice(0, 15),
				instagram: faker.internet.username().slice(0, 44),
				lingkunganId: lingkungans.length > 0
					? faker.helpers.arrayElement(lingkungans).id
					: undefined!,
				statusAccountId: statusAccounts.length > 0
					? faker.helpers.arrayElement(statusAccounts).id
					: undefined!,
				updatedAt: faker.date.past(),
				googleId: faker.string.uuid(),
			}
		})
	}
}

export default seedUser;

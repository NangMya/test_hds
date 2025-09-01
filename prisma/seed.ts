import { PrismaClient } from '../lib/generated/prisma/index.js'; // 👈 Add `/index.js`
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();

// Initialize Prisma Client

const users = Array.from({ length: 1000 }, (_, i) => i + 1);

const roleDatas = ["Super Admin", "Admin", "Manager", "Supporter"];

async function main() {
  console.log("Start seeding...");

  const roles = await Promise.all(
    roleDatas.map(async (roleName) => {
      return prisma.roles.create({
        data: {
          name: roleName,
          access: {}
        },
      });
    })
  );

  // You can create a simple record like this:
  const hashedPassword = await bcrypt.hash("password", 10);
  const superAdminRole = roles.find((role) => role.name === "Super Admin");

   if (superAdminRole) {
        const user1 = await prisma.users.create({
            data: {
                name: 'Nang',
                email: 'nangmya@dkmads.com',
                password: hashedPassword,
                is_two_factor_enabled: true,
                role: {
                    connect: {
                        id: superAdminRole.id,
                    },
                },
            },
        });
        console.log(`Created user: ${user1.name} with role: ${superAdminRole.name}`);
    } else {
        console.error("Could not find 'Super Admin' role to assign.");
    }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


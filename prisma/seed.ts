import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

// Initialize Prisma Client
const prisma = new PrismaClient();

// Initialize Prisma Client

const users = Array.from({ length: 1000 }, (_, i) => i + 1);

const roleDatas = ['Super Admin', 'Super Manager', 'Admin', 'Manager', 'SEO'];

async function main() {
    console.log('Start seeding...');

    // You can create a simple record like this:
    const hashedPassword = await bcrypt.hash('password', 10);

    const user1 = await prisma.users.create({
        data: {
            name: 'Nang',
            email: 'nangmya@dkmads.com',
            password: hashedPassword,
            is_two_factor_enabled:true,
        },
    });

    console.log('Seeding finished.');
}


// async function main() {
//   console.log('Start seeding...');

//   for (const role of roleDatas) {
//     const createdRole = await prisma.roles.create({
//       data: {
//         name: role,
//         access: []
//       }
//     });

//     console.log(`${createdRole.name} is created!`);
//   }

//   for (const user of users) {
//     const createdUser = await prisma.users.create({
//       data: {
//         name: faker.person.fullName(),
//         email: faker.internet.email(),
//         role: {
//           connectOrCreate: {
//             where: { name: 'Super Admin' },
//             create: {
//               name: 'Super Admin',
//               access: []
//             }
//           }
//         }
//       }
//     });
//     console.log(`${createdUser.name} is created at ${user}-number`);
//   }
//   console.log('Finish seeding...');
// }

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
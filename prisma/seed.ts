import path from "path";
import { PrismaClient } from "../lib/generated/prisma/index.js"; // 👈 Add `/index.js`
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();
import fs from "fs/promises";

// Initialize Prisma Client

const users = Array.from({ length: 1000 }, (_, i) => i + 1);

const roleDatas = ["Super Admin", "Admin", "Manager", "Supporter"];

async function main() {
  console.log("Start seeding...");

  // role
  // const roles = await Promise.all(
  //   roleDatas.map(async (roleName) => {
  //     return prisma.roles.create({
  //       data: {
  //         name: roleName,
  //         access: {},
  //       },
  //     });
  //   })
  // );

  // User
  // const hashedPassword = await bcrypt.hash("password", 10);
  // const superAdminRole = roles.find((role) => role.name === "Super Admin");

  // if (superAdminRole) {
  //   const user1 = await prisma.users.create({
  //     data: {
  //       name: "Nang",
  //       email: "nangmya@dkmads.com",
  //       password: hashedPassword,
  //       is_two_factor_enabled: true,
  //       role: {
  //         connect: {
  //           id: superAdminRole.id,
  //         },
  //       },
  //     },
  //   });
  //   console.log(
  //     `Created user: ${user1.name} with role: ${superAdminRole.name}`
  //   );
  // } else {
  //   console.error("Could not find 'Super Admin' role to assign.");
  // }

  // info
  // const info = await prisma.infos.create({
  //   data: {
  //     name: "HDS",
  //     email: "info@hdsmediagroup.com",
  //     phone1: "(+855) 23 424 424",
  //     phone2: "(+855) 10 222 444",
  //     address:
  //       "#304, St.1970, Sangkat,Phnom Penh Thmey, Khan Sen Sok,Phnom Penh, Cambodia.",
  //     showreel_pc: "",
  //     showreel_mb: "",
  //     created_by: 1,
  //     updated_by: 1,
  //   },
  // });

  // Client 
  // const now = new Date();
  // const year = now.getFullYear().toString();
  // const month = (now.getMonth() + 1).toString().padStart(2, "0");
  // const day = now.getDate().toString().padStart(2, "0");
  // const initialImageDir = path.join(
  //   process.cwd(),
  //   "public",
  //   "images",
  //   "client"
  // );
  // const destinationDir = path.join(
  //   process.cwd(),
  //   "public",
  //   "uploads",
  //   "clients",
  //   year,
  //   month,
  //   day
  // );

  // try {
  //   const imageFiles = await fs.readdir(initialImageDir);
  //   await fs.mkdir(destinationDir, { recursive: true });

  //   for (const fileName of imageFiles) {
  //     const initialPath = path.join(initialImageDir, fileName);
  //     const destinationPath = path.join(destinationDir, fileName);

  //     await fs.copyFile(initialPath, destinationPath);

  //     await fs.unlink(initialPath);
  //     console.log(`Deleted original: ${initialPath}`);

  //     const clientName = path.parse(fileName).name;
  //     await prisma.clients.create({
  //       data: {
  //         name: clientName,
  //         logo: `/uploads/clients/${year}/${month}/${day}/${fileName}`,
  //         created_by: 1,
  //         updated_by: 1,
  //       },
  //     });
  //     console.log(`Saved new path to database for ${clientName}`);
  //   }
  //   await fs.rm(initialImageDir, { recursive: true });
  //   console.log(`Removed directory: ${initialImageDir}`);

  //   console.log("Seeder completed. All images moved and database updated.");
  // } catch (error) {
  //   console.error("An error occurred during seeding:", error);
  //   process.exit(1);
  // } finally {
  //   await prisma.$disconnect();
  // }


  // Department
  const departmentDatas = ["Development","Designer","Marketing","Custmer Service","Operatins","Finance"];
   const departments = await Promise.all(
    departmentDatas.map(async (department) => {
      return prisma.departments.create({
        data: {
          name: department,
          status:1,
          created_by: 1,
          updated_by:1
        },
      });
    })
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

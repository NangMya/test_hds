-- DropForeignKey
ALTER TABLE `members` DROP FOREIGN KEY `members_department_id_fkey`;

-- DropIndex
DROP INDEX `members_department_id_fkey` ON `members`;

-- AlterTable
ALTER TABLE `members` MODIFY `department_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `members` ADD CONSTRAINT `members_department_id_fkey` FOREIGN KEY (`department_id`) REFERENCES `departments`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

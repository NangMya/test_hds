/*
  Warnings:

  - You are about to drop the column `memeber_id` on the `awards` table. All the data in the column will be lost.
  - Added the required column `member_id` to the `awards` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `awards` DROP FOREIGN KEY `awards_memeber_id_fkey`;

-- DropIndex
DROP INDEX `awards_memeber_id_fkey` ON `awards`;

-- AlterTable
ALTER TABLE `awards` DROP COLUMN `memeber_id`,
    ADD COLUMN `member_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `awards` ADD CONSTRAINT `awards_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

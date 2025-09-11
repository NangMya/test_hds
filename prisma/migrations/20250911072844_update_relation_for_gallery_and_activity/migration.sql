/*
  Warnings:

  - You are about to drop the column `type_id` on the `galleries` table. All the data in the column will be lost.
  - Added the required column `activity_id` to the `galleries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `galleries` DROP COLUMN `type_id`,
    ADD COLUMN `activity_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `galleries` ADD CONSTRAINT `galleries_activity_id_fkey` FOREIGN KEY (`activity_id`) REFERENCES `hds_activities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

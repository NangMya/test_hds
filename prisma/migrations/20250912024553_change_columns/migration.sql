/*
  Warnings:

  - You are about to drop the column `department` on the `jobs` table. All the data in the column will be lost.
  - Added the required column `department_id` to the `jobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `jobs` DROP COLUMN `department`,
    ADD COLUMN `department_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `jobs` ADD CONSTRAINT `jobs_department_id_fkey` FOREIGN KEY (`department_id`) REFERENCES `departments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

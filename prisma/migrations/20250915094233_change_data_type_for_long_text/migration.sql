-- AlterTable
ALTER TABLE `hds_activities` MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `jobs` MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `our_works` MODIFY `description` TEXT NOT NULL,
    MODIFY `challenges` TEXT NOT NULL,
    MODIFY `strategy` TEXT NOT NULL,
    MODIFY `takeaway` TEXT NOT NULL;

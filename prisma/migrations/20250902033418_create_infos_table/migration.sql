-- CreateTable
CREATE TABLE `infos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone1` VARCHAR(191) NOT NULL,
    `phone2` VARCHAR(191) NULL,
    `address` VARCHAR(191) NOT NULL,
    `map` VARCHAR(191) NULL,
    `showreel_pc` VARCHAR(191) NULL,
    `showreel_mb` VARCHAR(191) NULL,
    `facebook_url` VARCHAR(191) NULL,
    `linkedin_url` VARCHAR(191) NULL,
    `instagram_url` VARCHAR(191) NULL,
    `youtube_url` VARCHAR(191) NULL,
    `telegram_url` VARCHAR(191) NULL,
    `tiktok_url` VARCHAR(191) NULL,
    `created_by` INTEGER NOT NULL,
    `updated_by` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `infos` ADD CONSTRAINT `infos_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `infos` ADD CONSTRAINT `infos_updated_by_fkey` FOREIGN KEY (`updated_by`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

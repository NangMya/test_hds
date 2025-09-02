-- CreateTable
CREATE TABLE `clients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NOT NULL,
    `created_by` INTEGER NOT NULL,
    `updated_by` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `clients_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `clients` ADD CONSTRAINT `clients_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `clients` ADD CONSTRAINT `clients_updated_by_fkey` FOREIGN KEY (`updated_by`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

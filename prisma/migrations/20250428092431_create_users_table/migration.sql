-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `two_factor_code` VARCHAR(191) NULL,
    `two_factor_code_expiry` DATETIME(3) NULL,
    `is_two_factor_enabled` BOOLEAN NULL,
    `reset_token` VARCHAR(191) NULL,
    `reset_token_expiry` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `messages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `message` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `our_works` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `title_en` VARCHAR(191) NOT NULL,
    `title_km` VARCHAR(191) NOT NULL,
    `description_en` VARCHAR(191) NOT NULL,
    `description_km` VARCHAR(191) NOT NULL,
    `challenges_en` VARCHAR(191) NOT NULL,
    `challenges_km` VARCHAR(191) NOT NULL,
    `strategy_en` VARCHAR(191) NOT NULL,
    `strategy_km` VARCHAR(191) NOT NULL,
    `takeaway_en` VARCHAR(191) NOT NULL,
    `takeaway_km` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `created_by` INTEGER NOT NULL,
    `updated_by` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jobs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `open_date` DATETIME(3) NOT NULL,
    `close_date` DATETIME(3) NOT NULL,
    `position_en` VARCHAR(191) NOT NULL,
    `position_km` VARCHAR(191) NOT NULL,
    `department_en` VARCHAR(191) NOT NULL,
    `department_km` VARCHAR(191) NOT NULL,
    `description_en` VARCHAR(191) NOT NULL,
    `description_km` VARCHAR(191) NOT NULL,
    `experiences_en` VARCHAR(191) NOT NULL,
    `experiences_km` VARCHAR(191) NOT NULL,
    `level_en` VARCHAR(191) NOT NULL,
    `level_km` VARCHAR(191) NOT NULL,
    `overview_en` VARCHAR(191) NOT NULL,
    `overview_km` VARCHAR(191) NOT NULL,
    `job_type_en` VARCHAR(191) NOT NULL,
    `job_type_km` VARCHAR(191) NOT NULL,
    `salary_en` VARCHAR(191) NOT NULL,
    `salary_km` VARCHAR(191) NOT NULL,
    `duties_en` VARCHAR(191) NOT NULL,
    `duties_km` VARCHAR(191) NOT NULL,
    `requirements_en` VARCHAR(191) NOT NULL,
    `requirements_km` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'open',
    `created_by` INTEGER NOT NULL,
    `updated_by` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `applicants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `experience` VARCHAR(191) NOT NULL,
    `expected_salary` VARCHAR(191) NOT NULL,
    `job_id` INTEGER NOT NULL,
    `file` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',
    `updated_by` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `our_works` ADD CONSTRAINT `our_works_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `our_works` ADD CONSTRAINT `our_works_updated_by_fkey` FOREIGN KEY (`updated_by`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jobs` ADD CONSTRAINT `jobs_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jobs` ADD CONSTRAINT `jobs_updated_by_fkey` FOREIGN KEY (`updated_by`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `applicants` ADD CONSTRAINT `applicants_job_id_fkey` FOREIGN KEY (`job_id`) REFERENCES `jobs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `applicants` ADD CONSTRAINT `applicants_updated_by_fkey` FOREIGN KEY (`updated_by`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

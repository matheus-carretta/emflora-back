-- CreateTable
CREATE TABLE `Operacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `valorUnitario` DOUBLE NOT NULL,
    `rendPrincipal` DOUBLE NOT NULL,
    `rendSuporte` DOUBLE NULL,
    `tipoOperacaoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Operacao` ADD CONSTRAINT `Operacao_tipoOperacaoId_fkey` FOREIGN KEY (`tipoOperacaoId`) REFERENCES `TipoOperacao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

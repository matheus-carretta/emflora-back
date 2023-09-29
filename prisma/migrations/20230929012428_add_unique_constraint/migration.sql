/*
  Warnings:

  - A unique constraint covering the columns `[codigo]` on the table `Operacao` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nome]` on the table `Operacao` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nome]` on the table `TipoOperacao` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Operacao_codigo_key` ON `Operacao`(`codigo`);

-- CreateIndex
CREATE UNIQUE INDEX `Operacao_nome_key` ON `Operacao`(`nome`);

-- CreateIndex
CREATE UNIQUE INDEX `TipoOperacao_nome_key` ON `TipoOperacao`(`nome`);

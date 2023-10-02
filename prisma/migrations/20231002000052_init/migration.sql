-- CreateTable
CREATE TABLE "TipoOperacao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "TipoOperacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operacao" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tipoOperacaoId" INTEGER NOT NULL,

    CONSTRAINT "Operacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TipoOperacao_nome_key" ON "TipoOperacao"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Operacao_codigo_key" ON "Operacao"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Operacao_nome_key" ON "Operacao"("nome");

-- AddForeignKey
ALTER TABLE "Operacao" ADD CONSTRAINT "Operacao_tipoOperacaoId_fkey" FOREIGN KEY ("tipoOperacaoId") REFERENCES "TipoOperacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

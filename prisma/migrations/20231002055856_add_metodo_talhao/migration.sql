-- CreateTable
CREATE TABLE "MetodoTalhao" (
    "id" SERIAL NOT NULL,
    "metodo" TEXT NOT NULL,

    CONSTRAINT "MetodoTalhao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MetodoTalhao_metodo_key" ON "MetodoTalhao"("metodo");

-- CreateTable
CREATE TABLE "fastfood" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "fastfood_pkey" PRIMARY KEY ("id")
);

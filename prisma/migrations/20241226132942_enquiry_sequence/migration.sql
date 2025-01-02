-- CreateTable
CREATE TABLE "sequenceState" (
    "id" SERIAL NOT NULL,
    "sequence" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sequenceState_pkey" PRIMARY KEY ("id")
);

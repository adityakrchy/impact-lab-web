/*
  Warnings:

  - You are about to drop the `sequenceState` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "sequenceState";

-- CreateTable
CREATE TABLE "SequenceState" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "sequence" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SequenceState_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SequenceState_date_key" ON "SequenceState"("date");

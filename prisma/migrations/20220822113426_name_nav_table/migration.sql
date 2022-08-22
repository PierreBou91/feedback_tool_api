/*
  Warnings:

  - You are about to drop the `Navigation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Navigation";

-- CreateTable
CREATE TABLE "navigation" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "target" TEXT,
    "rel" TEXT,

    CONSTRAINT "navigation_pkey" PRIMARY KEY ("id")
);

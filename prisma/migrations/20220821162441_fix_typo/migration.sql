/*
  Warnings:

  - You are about to drop the column `ref` on the `Navigation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Navigation" DROP COLUMN "ref",
ADD COLUMN     "rel" TEXT;

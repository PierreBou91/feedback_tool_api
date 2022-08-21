/*
  Warnings:

  - You are about to drop the column `email` on the `feedbacks` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `feedbacks` table. All the data in the column will be lost.
  - Added the required column `title` to the `feedbacks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "feedbacks" DROP COLUMN "email",
DROP COLUMN "message",
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "feedbackType" SET DEFAULT 'TBD';

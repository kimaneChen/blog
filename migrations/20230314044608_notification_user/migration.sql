/*
  Warnings:

  - Added the required column `userId` to the `BlogNotification` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BlogNotification" DROP CONSTRAINT "BlogNotification_blogId_fkey";

-- AlterTable
ALTER TABLE "BlogNotification" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "BlogNotification" ADD CONSTRAINT "BlogNotification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

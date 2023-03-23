/*
  Warnings:

  - You are about to drop the column `isChecked` on the `CommentNotification` table. All the data in the column will be lost.
  - Added the required column `readAt` to the `CommentNotification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CommentNotification" DROP COLUMN "isChecked",
ADD COLUMN     "readAt" TIMESTAMP(3) NOT NULL;

/*
  Warnings:

  - You are about to drop the column `replyToReplyId` on the `Reply` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Reply" DROP CONSTRAINT "Reply_replyToReplyId_fkey";

-- AlterTable
ALTER TABLE "Reply" DROP COLUMN "replyToReplyId",
ADD COLUMN     "replyToId" TEXT;

-- AddForeignKey
ALTER TABLE "Reply" ADD CONSTRAINT "Reply_replyToId_fkey" FOREIGN KEY ("replyToId") REFERENCES "Reply"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- DropForeignKey
ALTER TABLE "CommentNotification" DROP CONSTRAINT "CommentNotification_commentId_fkey";

-- AddForeignKey
ALTER TABLE "CommentNotification" ADD CONSTRAINT "CommentNotification_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

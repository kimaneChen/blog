/*
  Warnings:

  - You are about to drop the `TagsOnBlogs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TagsOnBlogs" DROP CONSTRAINT "TagsOnBlogs_blogId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnBlogs" DROP CONSTRAINT "TagsOnBlogs_tagId_fkey";

-- DropTable
DROP TABLE "TagsOnBlogs";

-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "content" JSONB,
ALTER COLUMN "description" DROP NOT NULL;

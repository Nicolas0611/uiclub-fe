/*
  Warnings:

  - You are about to drop the column `companyImageId` on the `DesignSystem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."DesignSystem" DROP CONSTRAINT "DesignSystem_companyImageId_fkey";

-- DropIndex
DROP INDEX "public"."DesignSystem_companyImageId_key";

-- AlterTable
ALTER TABLE "public"."DesignSystem" DROP COLUMN "companyImageId";

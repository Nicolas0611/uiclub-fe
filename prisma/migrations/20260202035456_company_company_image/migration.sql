/*
  Warnings:

  - You are about to drop the column `companyImageId` on the `Company` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Company" DROP CONSTRAINT "Company_companyImageId_fkey";

-- DropIndex
DROP INDEX "public"."Company_companyImageId_key";

-- AlterTable
ALTER TABLE "public"."Company" DROP COLUMN "companyImageId";

-- AlterTable
ALTER TABLE "public"."CompanyImage" ADD COLUMN     "companyId" INTEGER;

-- AddForeignKey
ALTER TABLE "public"."CompanyImage" ADD CONSTRAINT "CompanyImage_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

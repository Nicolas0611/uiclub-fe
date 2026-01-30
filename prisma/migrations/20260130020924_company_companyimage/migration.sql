/*
  Warnings:

  - A unique constraint covering the columns `[companyImageId]` on the table `Company` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."Company" ADD COLUMN     "companyImageId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Company_companyImageId_key" ON "public"."Company"("companyImageId");

-- AddForeignKey
ALTER TABLE "public"."Company" ADD CONSTRAINT "Company_companyImageId_fkey" FOREIGN KEY ("companyImageId") REFERENCES "public"."CompanyImage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

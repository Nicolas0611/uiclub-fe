/*
  Warnings:

  - A unique constraint covering the columns `[companyImageId]` on the table `DesignSystem` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."DesignSystem" ADD COLUMN     "companyImageId" TEXT;

-- CreateTable
CREATE TABLE "public"."CompanyImage" (
    "id" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "url" VARCHAR(255) NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "CompanyImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DesignSystem_companyImageId_key" ON "public"."DesignSystem"("companyImageId");

-- AddForeignKey
ALTER TABLE "public"."DesignSystem" ADD CONSTRAINT "DesignSystem_companyImageId_fkey" FOREIGN KEY ("companyImageId") REFERENCES "public"."CompanyImage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

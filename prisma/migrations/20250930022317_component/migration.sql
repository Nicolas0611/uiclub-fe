/*
  Warnings:

  - A unique constraint covering the columns `[companyId]` on the table `DesignSystem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `largeDescription` to the `DesignSystem` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."Types" AS ENUM ('Overlays', 'Data', 'Input', 'Status', 'Navigation', 'Loading', 'Messaging', 'Action', 'Images', 'Layout', 'Form');

-- AlterTable
ALTER TABLE "public"."Company" ALTER COLUMN "state" SET DEFAULT true;

-- AlterTable
ALTER TABLE "public"."DesignSystem" ADD COLUMN     "largeDescription" TEXT NOT NULL,
ALTER COLUMN "state" SET DEFAULT true;

-- CreateTable
CREATE TABLE "public"."Component" (
    "id" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "type" "public"."Types" NOT NULL,
    "link" VARCHAR(255) NOT NULL,
    "designSystemId" TEXT NOT NULL,

    CONSTRAINT "Component_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DesignSystem_companyId_key" ON "public"."DesignSystem"("companyId");

-- AddForeignKey
ALTER TABLE "public"."Component" ADD CONSTRAINT "Component_designSystemId_fkey" FOREIGN KEY ("designSystemId") REFERENCES "public"."DesignSystem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

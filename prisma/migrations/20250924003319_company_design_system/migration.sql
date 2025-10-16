-- CreateEnum
CREATE TYPE "public"."Popularity" AS ENUM ('HIGH', 'MEDIUM', 'LOW');

-- CreateTable
CREATE TABLE "public"."Company" (
    "id" SERIAL NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "state" BOOLEAN NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DesignSystem" (
    "id" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "state" BOOLEAN NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "popularity" "public"."Popularity" NOT NULL,
    "isUpdated" BOOLEAN NOT NULL,
    "shortDescription" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(50) NOT NULL,
    "isNew" BOOLEAN NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "DesignSystem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."DesignSystem" ADD CONSTRAINT "DesignSystem_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

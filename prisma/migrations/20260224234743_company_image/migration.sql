-- AlterTable
ALTER TABLE "public"."Component" ADD COLUMN     "componentImageId" TEXT;

-- CreateTable
CREATE TABLE "public"."ComponentImage" (
    "id" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "url" VARCHAR(255) NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "ComponentImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Component" ADD CONSTRAINT "Component_componentImageId_fkey" FOREIGN KEY ("componentImageId") REFERENCES "public"."ComponentImage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

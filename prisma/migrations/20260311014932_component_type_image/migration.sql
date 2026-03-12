-- AlterTable
ALTER TABLE "public"."ComponentType" ADD COLUMN     "componentImageId" TEXT;

-- AddForeignKey
ALTER TABLE "public"."ComponentType" ADD CONSTRAINT "ComponentType_componentImageId_fkey" FOREIGN KEY ("componentImageId") REFERENCES "public"."ComponentImage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "public"."ComponentImage" (
    "id" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "url" VARCHAR(255) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "componentId" TEXT NOT NULL,

    CONSTRAINT "ComponentImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."ComponentImage" ADD CONSTRAINT "ComponentImage_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "public"."Component"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

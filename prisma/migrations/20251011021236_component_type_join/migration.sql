-- CreateTable
CREATE TABLE "public"."ComponentType" (
    "id" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "type" "public"."Types" NOT NULL,
    "usageCount" INTEGER NOT NULL DEFAULT 0,
    "implementationsCount" INTEGER NOT NULL DEFAULT 0,
    "designSystemCount" INTEGER NOT NULL DEFAULT 0,
    "link" VARCHAR(255),

    CONSTRAINT "ComponentType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DesignSystemComponentType" (
    "designSystemId" TEXT NOT NULL,
    "componentTypeId" TEXT NOT NULL,

    CONSTRAINT "DesignSystemComponentType_pkey" PRIMARY KEY ("designSystemId","componentTypeId")
);

-- CreateTable
CREATE TABLE "public"."Figma" (
    "id" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "url" VARCHAR(200) NOT NULL,
    "companyId" INTEGER NOT NULL,
    "componentTypeId" TEXT NOT NULL,

    CONSTRAINT "Figma_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."DesignSystemComponentType" ADD CONSTRAINT "DesignSystemComponentType_designSystemId_fkey" FOREIGN KEY ("designSystemId") REFERENCES "public"."DesignSystem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."DesignSystemComponentType" ADD CONSTRAINT "DesignSystemComponentType_componentTypeId_fkey" FOREIGN KEY ("componentTypeId") REFERENCES "public"."ComponentType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Figma" ADD CONSTRAINT "Figma_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Figma" ADD CONSTRAINT "Figma_componentTypeId_fkey" FOREIGN KEY ("componentTypeId") REFERENCES "public"."ComponentType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

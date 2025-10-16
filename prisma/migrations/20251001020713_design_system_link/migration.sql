-- CreateTable
CREATE TABLE "public"."Link" (
    "id" SERIAL NOT NULL,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "figma" VARCHAR(200),
    "web" VARCHAR(200),
    "storybook" VARCHAR(200),
    "designSystemId" TEXT NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Link_designSystemId_key" ON "public"."Link"("designSystemId");

-- AddForeignKey
ALTER TABLE "public"."Link" ADD CONSTRAINT "Link_designSystemId_fkey" FOREIGN KEY ("designSystemId") REFERENCES "public"."DesignSystem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

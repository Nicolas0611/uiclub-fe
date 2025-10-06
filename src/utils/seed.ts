import {
  initialCompanyData,
  initialComponentData,
  initialDesignSystemData,
  initialDSImages,
  initialLinks,
} from "../constants/seed";
import { prisma } from "../lib/prisma";
async function main() {
  const companyNames = {
    Brainly: "Pencil" as const,
    Atlassian: "Design System" as const,
    Apple: "HIG" as const,
    Amazon: "Cloudscape" as const,
    Adobe: "Spectrum" as const,
    ActiveCampaign: "Camp" as const,
  } as Record<string, string>;

  // Borra primero las relaciones hijas
  await prisma.link.deleteMany();
  await prisma.component.deleteMany();

  // Luego las entidades padre
  await prisma.designSystem.deleteMany();
  await prisma.company.deleteMany();
  await prisma.companyImage.deleteMany();

  await prisma.company.createMany({
    data: initialCompanyData,
  });
  await prisma.companyImage.createMany({
    data: initialDSImages,
  });

  const companyDB = await prisma.company.findMany();
  const DSystemImagesDB = await prisma.companyImage.findMany();

  const companiesMap = companyDB.reduce((map, company) => {
    map[company.name] = company.id;
    return map;
  }, {} as Record<string, number>);

  const dsImagesMap = DSystemImagesDB.reduce((map, image) => {
    map[image.name] = image.id;
    return map;
  }, {} as Record<string, string>);

  const dbDesignSystemData = initialDesignSystemData.map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ id, company, ...ds }) => ({
      ...ds,
      companyId: companiesMap[company],
      companyImageId: dsImagesMap[company],
    })
  );

  await prisma.designSystem.createMany({
    data: dbDesignSystemData,
  });

  const designSystemDB = await prisma.designSystem.findMany();

  const designSystemMap = designSystemDB.reduce((map, designSystem) => {
    map[designSystem.name] = designSystem.id;
    return map;
  }, {} as Record<string, string>);

  const dbComponentData = initialComponentData.map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ id, relatedNames, companyName, ...rest }) => ({
      ...rest,
      designSystemId: designSystemMap[companyNames[companyName]],
    })
  );

  const dbLinkData = initialLinks.map(({ name, ...rest }) => ({
    ...rest,
    designSystemId: designSystemMap[companyNames[name]],
  }));

  await prisma.component.createMany({
    data: dbComponentData,
  });

  await prisma.link.createMany({
    data: dbLinkData,
  });

  console.log("Ejecutado Exitosamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();

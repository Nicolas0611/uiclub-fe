import {
  initialCompanyData,
  initialCompanyImages,
  initialComponentData,
  initialComponentImages,
  initialComponentTypes,
  initialDesignSystemData,
  initialDSComponentType,
  initialFigmaLink,
  initialLinks,
  initialUsers,
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
    Google: "Material Design" as const,
    GitHub: "Primer" as const,
  } as Record<string, string>;

  const initialCleanComponent = initialComponentTypes.map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ id, ...rest }) => rest,
  );

  // Borra primero las relaciones hijas
  await prisma.user.deleteMany();
  await prisma.component.deleteMany();
  await prisma.componentImage.deleteMany();
  await prisma.figma.deleteMany();
  await prisma.designSystemComponentType.deleteMany();
  await prisma.link.deleteMany();
  await prisma.companyImage.deleteMany();

  // Luego las entidades padre
  await prisma.designSystem.deleteMany();
  await prisma.company.deleteMany();
  await prisma.companyImage.deleteMany();
  await prisma.componentType.deleteMany();

  await prisma.user.createMany({
    data: initialUsers,
  });

  await prisma.company.createMany({
    data: initialCompanyData,
  });

  await prisma.componentType.createMany({
    data: initialCleanComponent,
  });

  const companyDB = await prisma.company.findMany();
  const componentTypeDB = await prisma.componentType.findMany();

  const companiesMap = companyDB.reduce(
    (map, company) => {
      map[company.name] = company.id;
      return map;
    },
    {} as Record<string, number>,
  );

  await prisma.companyImage.createMany({
    data: initialCompanyImages.map((image) => ({
      ...image,
      companyId: companiesMap[image.name],
    })),
  });

  const componentTypeMap = componentTypeDB.reduce(
    (map, component) => {
      map[component.name] = component.id;
      return map;
    },
    {} as Record<string, string>,
  );

  const dbDesignSystemData = initialDesignSystemData.map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ id, company, name, ...ds }) => ({
      ...ds,
      name,
      companyId: companiesMap[company],
    }),
  );

  await prisma.designSystem.createMany({
    data: dbDesignSystemData,
  });

  const designSystemDB = await prisma.designSystem.findMany();

  const designSystemMap = designSystemDB.reduce(
    (map, designSystem) => {
      map[designSystem.name] = designSystem.id;
      return map;
    },
    {} as Record<string, string>,
  );

  await prisma.componentImage.createManyAndReturn({
    data: initialComponentImages,
  });

  const componentImagesDB = await prisma.componentImage.findMany();

  const componentImageMap = componentImagesDB.reduce(
    (map, componentImage) => {
      map[componentImage.name] = componentImage.id;
      return map;
    },
    {} as Record<string, string>,
  );

  const dbComponentData = initialComponentData.map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ id, companyName, ...rest }) => ({
      ...rest,
      designSystemId: designSystemMap[companyNames[companyName]],
      componentImageId: componentImageMap[rest.name],
    }),
  );

  await prisma.component.createMany({
    data: dbComponentData,
  });

  const dbLinkData = initialLinks.map(({ name, ...rest }) => ({
    ...rest,
    designSystemId: designSystemMap[companyNames[name]],
  }));

  await prisma.link.createMany({
    data: dbLinkData,
  });

  const dbFigmaData = initialFigmaLink.map(
    ({ name, componentTypeName, ...rest }) => ({
      ...rest,
      companyId: companiesMap[name],
      componentTypeId: componentTypeMap[componentTypeName],
    }),
  );
  await prisma.figma.createMany({
    data: dbFigmaData,
  });

  await prisma.designSystemComponentType.createMany({
    data: initialDSComponentType.map(
      ({ designSystemName, componentTypeName }) => ({
        designSystemId: designSystemMap[designSystemName],
        componentTypeId: componentTypeMap[componentTypeName],
      }),
    ),
  });

  console.log("Ejecutado Exitosamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();

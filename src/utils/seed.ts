import {
  initialCompanyData,
  initialComponentData,
  initialDesignSystemData,
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

  await prisma.designSystem.deleteMany();
  await prisma.company.deleteMany();
  await prisma.component.deleteMany();

  await prisma.company.createMany({
    data: initialCompanyData,
  });

  const companyDB = await prisma.company.findMany();

  const companiesMap = companyDB.reduce((map, company) => {
    map[company.name] = company.id;
    return map;
  }, {} as Record<string, number>);

  const dbDesignSystemData = initialDesignSystemData.map(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ id, company, ...ds }) => ({
      ...ds,
      companyId: companiesMap[company],
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
  await prisma.component.createMany({
    data: dbComponentData,
  });
  console.log("Ejecutado Exitosamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();

import { prisma } from "../lib/prisma";
async function main() {
  await prisma.company.deleteMany();

  console.log("Ejecutado Exitosamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();

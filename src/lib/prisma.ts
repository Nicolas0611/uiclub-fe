import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Counter to track instantiations
let instanceCount = 0;

export const prisma =
  globalForPrisma.prisma ||
  (() => {
    instanceCount++;
    console.log(`🔵 Creating NEW PrismaClient instance #${instanceCount}`);

    return new PrismaClient({
      log: [
        { level: "query", emit: "event" },
        { level: "error", emit: "stdout" },
        { level: "warn", emit: "stdout" },
      ],
    });
  })();

// Log whenever prisma is accessed
console.log(
  `✅ Prisma instance accessed. Total instances created: ${instanceCount}`
);

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

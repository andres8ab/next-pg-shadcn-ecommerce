import { PrismaClient } from '@prisma/client';
import sampleData from '@/lib/sample-data';

const prisma = new PrismaClient();

const main = async () => {
  try {
    // Delete existing data
    await prisma.product.deleteMany();

    // Insert sample data
    const resProducts = await prisma.product.createMany({
      data: sampleData.products,
    });

    console.log({ resProducts });

  } catch (error) {
    console.error(error);
    throw new Error('Failed to seed database');
  } finally {
    await prisma.$disconnect();
  }
}

main();
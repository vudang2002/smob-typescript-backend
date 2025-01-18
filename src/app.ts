import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 5000;

async function start() {
  try {
    await prisma.$connect();
    console.log('Database is connected!');
  } catch (error) {
    console.error(
      "Couldn't conenct to the database: ",
      (error as Error).message,
    );
    await prisma.$disconnect();
    process.exit(1);
  }

  app.get('/health', async (req, res) => {
    res.send('OK');
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

start();

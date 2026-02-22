//fix the dotenv wala problem it is not able to be exported from the dotenv 
//waise export hoja raha hai magr dotenv se nahi ho pa rah hai woh fix karna hai

import 'dotenv/config';

import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';  

const connectionString = 'postgresql://neondb_owner:npg_HYmIVeZ8Nhd2@ep-lively-block-aiyv5t0d-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

const datasource={
    url: process.env.DATABASE_URL
  }

console.log(datasource.url + " as");

const pool = new Pool({ connectionString });

const adapter = new PrismaPg(pool);  

export const client = new PrismaClient({ adapter });

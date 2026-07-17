import { PrismaClient } from "./generated/prisma/client.js";
import {PrismaPg} from "@prisma/adapter-Pg"

const adapter=new PrismaPg({
    connectionString:process.env.DATABASE_URL
})

export const prisma=new PrismaClient({
    adapter,
})

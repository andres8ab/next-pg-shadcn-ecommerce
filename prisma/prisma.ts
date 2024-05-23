import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default prisma

// const users = await prisma.user.findMany()
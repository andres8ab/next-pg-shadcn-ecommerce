'use server'

import prisma from "@/prisma/prisma"
import { Product } from "@prisma/client"

export async function getLatestProducts(): Promise<Product[]> {
    const data = await prisma.product.findMany({
        orderBy: [{ createdAt: 'desc' }],
        take: 4,
    })

    return data
}
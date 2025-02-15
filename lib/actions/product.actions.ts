'use server'

import { desc } from 'drizzle-orm'
import { eq } from 'drizzle-orm/sql'

import db from '@/db/drizzle'
import { products } from '@/db/schema'

export async function getLatestProducts() {
  const data = await db.query.products.findMany({
    orderBy: [desc(products.createdAt)],
    limit: 6,
  })
  return data
}

export async function getProductBySlug(slug: string) {
  return await db.query.products.findFirst({
    where: eq(products.slug, slug),
  })
}
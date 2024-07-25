import {
    boolean,
    integer,
    numeric,
    pgTable,
    text,
    json,
    timestamp,
    uniqueIndex,
    uuid,
  } from 'drizzle-orm/pg-core'

  import { CartItem } from '@/types'
  
  // PRODUCTS
  export const products = pgTable(
    'product',
    {
      id: uuid('id').defaultRandom().primaryKey().notNull(),
      name: text('name').notNull(),
      slug: text('slug').notNull(),
      category: text('category').notNull(),
      images: text('images').array().notNull(),
      brand: text('brand').notNull(),
      description: text('description').notNull(),
      stock: integer('stock').notNull(),
      price: numeric('price', { precision: 12, scale: 2 }).notNull().default('0'),
      rating: numeric('rating', { precision: 3, scale: 2 })
        .notNull()
        .default('0'),
      numReviews: integer('numReviews').notNull().default(0),
      isFeatured: boolean('isFeatured').default(false).notNull(),
      banner: text('banner'),
      createdAt: timestamp('createdAt').defaultNow().notNull(),
    },
    (table) => {
      return {
        productSlugIdx: uniqueIndex('product_slug_idx').on(table.slug),
      }
    }
  )

  // CARTS
export const carts = pgTable('cart', {
  id: uuid('id').notNull().defaultRandom().primaryKey(),
  userId: uuid('userId').references(() => users.id, {
    onDelete: 'cascade',
  }),
  sessionCartId: text('sessionCartId').notNull(),
  items: json('items').$type<CartItem[]>().notNull().default([]),
  itemsPrice: numeric('itemsPrice', { precision: 12, scale: 2 }).notNull(),
  shippingPrice: numeric('shippingPrice', {
    precision: 12,
    scale: 2,
  }).notNull(),
  taxPrice: numeric('taxPrice', { precision: 12, scale: 2 }).notNull(),
  totalPrice: numeric('totalPrice', { precision: 12, scale: 2 }).notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
})
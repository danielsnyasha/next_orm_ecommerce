import { cwd } from 'node:process'
import { loadEnvConfig } from '@next/env'

import { drizzle } from 'drizzle-orm/node-postgres'
import { Client } from 'pg'

import * as schema from './schema'
import sampleData from '@/lib/sample-data'

// Load environment variables from .env file
loadEnvConfig(cwd())

const main = async () => {
  try {
    // Log the connection URL for debugging purposes
    console.log('Connecting to database with URL:', process.env.POSTGRES_URL)
    const client = new Client({
      connectionString: process.env.POSTGRES_URL,
      ssl: {
        rejectUnauthorized: false
      }
    })

    await client.connect()
    console.log('Connected to database successfully')

    const db = drizzle(client)

    await db.delete(schema.products).execute()

    const resProducts = await db
      .insert(schema.products)
      .values(sampleData.products)
      .returning()
    console.log({ resProducts })
    await client.end()
  } catch (error) {
    console.error('Error details:', error)
    throw new Error('Failed to seed database')
  }
}

main()

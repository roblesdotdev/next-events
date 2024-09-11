import { PrismaClient } from '@prisma/client'
import { singleton } from './singleton'
import { createClient } from '@libsql/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'

const MODE = process.env.NODE_ENV

export const db = singleton('db', () => {
  if (MODE === 'development') return new PrismaClient()

  const libsql = createClient({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  })

  const adapter = new PrismaLibSQL(libsql)
  return new PrismaClient({ adapter })
})

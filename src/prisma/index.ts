import { PrismaClient } from '@prisma/client';

const db =
    (process.env.NODE_ENV !== 'production')
        ? (!global.db)
            ? new PrismaClient()
            : global.db
        : new PrismaClient()

export default db

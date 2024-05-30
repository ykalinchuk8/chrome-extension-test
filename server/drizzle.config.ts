import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: './src/db/schemas/schema.ts',
    out: './src/db/migrations',
    dialect: 'mysql',
    dbCredentials: {
        url: 'file:./test.db',
    }
});
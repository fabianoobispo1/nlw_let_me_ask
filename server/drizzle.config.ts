import { defineConfig } from 'drizzle-kit';
import { env } from './src/env.ts';

export default defineConfig({
  dialect: 'postgresql',
  casing: 'snake_case',
  schema: './src/database/schema/**.ts',
  out: './src/database/migrations',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});


//npx drizzle-kit generate
//npx drizzle-kit migrate
//npx drizzle-kit studio
//npx drizzle-seed
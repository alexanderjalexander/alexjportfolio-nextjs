import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();

if (!process.env.DATABASE_URL) {
    throw new Error('process.env.DATABASE_URL is missing.');
}

export default {
    schema: "./src/db/schema.ts",
    out: "./src/db/migrations",
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!,
    },
    strict: true,
} satisfies Config;
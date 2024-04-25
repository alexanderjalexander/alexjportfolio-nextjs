import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http"

neonConfig.fetchConnectionCache = false;

// Consider using driver over websockets for interactive transactions
// https://neon.tech/docs/serverless/serverless-driver#use-the-driver-over-websockets
export async function getDatabase() {
    if (!process.env.DATABASE_URL) {
        throw new Error('process.env.DATABASE_URL is missing.');
    }
    
    const sql = neon(process.env.DATABASE_URL!);
    const db = drizzle(sql);
    
    return db;
}

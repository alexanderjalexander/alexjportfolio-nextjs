import { neon } from "@neondatabase/serverless";
import type { NeonQueryFunction } from "@neondatabase/serverless";
import { drizzle as drizzle_psql }  from "drizzle-orm/node-postgres";
import { drizzle as drizzle_neon }  from "drizzle-orm/neon-http";
import { Pool } from "pg";

// Consider using driver over websockets for interactive transactions
// https://neon.tech/docs/serverless/serverless-driver#use-the-driver-over-websockets
export async function getDatabase() {
  if (!process.env.DATABASE_URL) {
    throw new Error("process.env.DATABASE_URL is missing.");
  }

  let db;

  if (
    process.env.NODE_ENV === 'production' ||
    process.env.DATABASE_URL!.toLowerCase().includes("neon")
  ) {
    const sql: NeonQueryFunction<boolean, boolean> = neon(
      process.env.DATABASE_URL!,
    );
    db = drizzle_neon(sql);
  } else {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL!,
    });
    db = drizzle_psql(pool);
  }

  return db;
}

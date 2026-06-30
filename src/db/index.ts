import { neon } from "@neondatabase/serverless";
import type { NeonQueryFunction } from "@neondatabase/serverless";
import { drizzle as drizzleNeon } from "drizzle-orm/neon-http";
import { drizzle as drizzlePg } from 'drizzle-orm/node-postgres';

// Consider using driver over websockets for interactive transactions
// https://neon.tech/docs/serverless/serverless-driver#use-the-driver-over-websockets
export async function getDatabase() {
  if (process.env.HOMELAB_DATABASE_URL) {
    return drizzlePg({
      connection: {
        connectionString: process.env.HOMELAB_DATABASE_URL,
        ssl: false,
      }
    });
  }

  if (process.env.NEON_DATABASE_URL) {
    const sql: NeonQueryFunction<boolean, boolean> = neon(
      process.env.NEON_DATABASE_URL!,
    );
    return drizzleNeon(sql);
  }

  throw new Error(
    "No database configured. Set HOMELAB_DATABASE_URL (preferred) or NEON_DATABASE_URL or both in .env to have your DB up and running."
  );
}

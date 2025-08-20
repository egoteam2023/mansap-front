import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function setup() {
  try {
    console.log("⏳ Checking groups table...");
    await sql`
      CREATE TABLE IF NOT EXISTS groups (
        id SERIAL PRIMARY KEY,
        group_id VARCHAR(50) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `;
    console.log("✅ Table groups is ready");
  } catch (err) {
    console.error("❌ Setup failed", err);
  }
}

export default sql;

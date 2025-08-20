import 'dotenv/config'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

export async function addGroup(groupId: string) {
  try {
    await sql`
      INSERT INTO groups (group_id) VALUES (${groupId})
      ON CONFLICT (group_id) DO NOTHING;
    `
    console.log(`Group ${groupId} added ✅`)
  } catch (err) {
    console.error('Error adding group ❌', err)
  }
}

// Удалить группу
export async function removeGroup(groupId: string) {
  try {
    await sql`DELETE FROM groups WHERE group_id = ${groupId};`
    console.log(`Group ${groupId} removed ❌`)
  } catch (err) {
    console.error('Error removing group ❌', err)
  }
}

// Получить все группы
export async function getGroups() {
  try {
    const datas = await sql`SELECT group_id FROM groups;`
    return datas.map((row) => row.group_id)
  } catch (err) {
    console.error('Error fetching groups ❌', err)
    return []
  }
}

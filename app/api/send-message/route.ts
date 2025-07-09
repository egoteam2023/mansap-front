import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import axios from 'axios'

const BOT_TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN
const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { fullName, phone } = body
  let chatIds = new Set()

  if (!fullName || !phone) {
    return NextResponse.json({ error: 'Заполните все поля' }, { status: 400 })
  }

  const text = `
👤 Имя: ${fullName} хочет получить планировки!
📧 Номер телефона: ${phone}.
  `
  try {
    const updates = await axios.get(
      `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`,
    )
    updates.data.result.forEach((update: any) => {
      if (update.my_chat_member) {
        const chatId = update.my_chat_member.chat.id
        chatIds.add(chatId)
      }
    })
  } catch (error: any) {
    console.error(
      'Ошибка Telegram при получении групп:',
      error?.response?.data || error.message,
    )
    return NextResponse.json({ error: 'Ошибка при отправке' }, { status: 500 })
  }

  try {
    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text,
    })

    for (const groupId of chatIds) {
      await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: groupId,
        text,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Ошибка Telegram:', error?.response?.data || error.message)
    return NextResponse.json({ error: 'Ошибка при отправке' }, { status: 500 })
  }
}

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import axios from 'axios'

const BOT_TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN
const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { fullName, phone } = body

  if (!fullName || !phone) {
    return NextResponse.json({ error: 'Заполните все поля' }, { status: 400 })
  }

  const text = `
👤 Имя: ${fullName} хочет получить больше информации!
📧 Email: ${phone}.
  `

  try {
    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text,
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Ошибка Telegram:', error?.response?.data || error.message)
    return NextResponse.json({ error: 'Ошибка при отправке' }, { status: 500 })
  }
}

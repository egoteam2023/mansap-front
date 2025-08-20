import { NextResponse } from 'next/server'
import { addGroup } from '@/db/db'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    let chatId: string | undefined

    if (body.message) {
      chatId = body.message.chat.id.toString()
    }

    if (body.my_chat_member) {
      chatId = body.my_chat_member.chat.id.toString()
      // const status = body.my_chat_member.new_chat_member.status

      // if (status === 'member') {
      //   await addGroup(chatId)
      //   console.log('Сохранили chat_id:', chatId)
      // } else if (status === 'left' || status === 'kicked') {
      //   await removeGroup(chatId)
      //   console.log('Удалил chat_id:', chatId)
      // }
    }
    if (chatId) {
      await addGroup(chatId)
    }

    return NextResponse.json({ ok: true })
  } catch (error: any) {
    console.error('Ошибка в webhook:', error.message)
    return NextResponse.json({ error: 'Webhook error' }, { status: 500 })
  }
}

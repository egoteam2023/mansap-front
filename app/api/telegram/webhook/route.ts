// app/api/telegram/webhook/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let chatId: string | undefined;
    let type: string | undefined;

    if (body.message) {
      chatId = body.message.chat.id.toString();
      type = body.message.chat.type;
    }

    if (body.my_chat_member) {
      chatId = body.my_chat_member.chat.id.toString();
      type = body.my_chat_member.chat.type;
    }

    if (chatId) {
      // Создаём запись, если такой chat_id ещё нет
      await prisma.chat.upsert({
        where: { chatId },
        update: {},
        create: { chatId, type: type || "private" },
      });
      console.log("Сохранили chat_id:", chatId);
    }

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Ошибка в webhook:", error.message);
    return NextResponse.json({ error: "Webhook error" }, { status: 500 });
  }
}

// Функция для получения всех chat_id
export async function getAllChatIds() {
  const chats = await prisma.chat.findMany();
  return chats.map(c => c.chatId);
}

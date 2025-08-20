// app/api/sendMessage/route.ts
import { NextResponse } from "next/server";
import axios from "axios";
import { getGroups } from "@/db/db";

const BOT_TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN!;
const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID!;

export async function POST(req: Request) {
  const body = await req.json();
  const { fullName, phone } = body;

  if (!fullName || !phone) {
    return NextResponse.json({ error: "Заполните все поля" }, { status: 400 });
  }

  const text = `
👤 Имя: ${fullName} хочет получить планировки!
📧 Номер телефона: ${phone}.
  `;

  try {
    // Отправляем в основной чат
    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text,
    });

    // Отправляем во все сохранённые чаты
    const chatIds = await getGroups();
    for (const id of chatIds) {
      try {
        await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          chat_id: id,
          text,
        });
      } catch (err: any) {
        console.error(`Ошибка отправки в чат ${id}:`, err?.response?.data || err.message);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Ошибка Telegram:", error?.response?.data || error.message);
    return NextResponse.json({ error: "Ошибка при отправке" }, { status: 500 });
  }
}

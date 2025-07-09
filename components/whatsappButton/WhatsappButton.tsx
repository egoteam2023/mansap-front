'use client'

import Image from 'next/image'
import Link from 'next/link'
import style from './WhatsappButton.module.scss'

const PHONE = process.env.NEXT_PUBLIC_WH_NUMBER || '0123456789'
const MESSAGE =
  process.env.NEXT_PUBLIC_WH_MESSAGE ||
  'Здравствуйте, я хочу узнать больше информации о вашем продукте'

const WhatsappButton = () => {
  return (
    <Link
      className="fixed right-5 bottom-5 sm:right-10 sm:bottom-10 w-10 h-10 sm:w-20 sm:h-20 cursor-pointer z-[10000]"
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
    >
      <Image
        width="182"
        height="182"
        src="/whatsapp.png"
        alt="whats app button"
        className={style.chatbotButton}
      />
    </Link>
  )
}

export default WhatsappButton

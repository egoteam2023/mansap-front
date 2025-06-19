import Image from 'next/image'
import styles from './slogan.module.scss'

export function Slogan() {
  return (
    <section id='about-us' className="container font-philosopher">
      <div className="flex gap-10 justify-between items-center">
        <div className="">
          <Image
            width={190}
            height={72}
            src="/Vector1.svg"
            alt="logo"
            priority
          />
        </div>
        <div className="">
          <p className="text-white italic text-4xl text-center">
            Приватные кабинеты для лиц принимающих важные решения
          </p>
        </div>
        <div className="">
          <Image
            width={190}
            height={72}
            src="/Vector2.svg"
            alt="logo"
            priority
          />
        </div>
      </div>
    </section>
  )
}

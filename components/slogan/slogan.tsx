import Image from 'next/image'
import styles from './slogan.module.scss'
import { SlideInSection } from '../animation/SlideInSection'

export function Slogan() {
  return (
    <section id="about-us" className="container font-philosopher">
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
          <SlideInSection offset={30} side="bottom">
            <p className="text-white italic text-4xl text-center">
              Приватные кабинеты для лиц принимающих важные решения
            </p>
          </SlideInSection>
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

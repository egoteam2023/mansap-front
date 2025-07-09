import Image from 'next/image'
import styles from './slogan.module.scss'
import { SlideInSection } from '../animation/SlideInSection'

export function Slogan() {
  return (
    <section id="about-us" className="container font-philosopher px-4 py-8">
      <div className="flex items-center gap-10 sm:flex-row sm:justify-between sm:gap-8 lg:gap-20">
        <div className="flex-shrink-0">
          <Image
            width={190}
            height={72}
            src="/Vector1.svg"
            alt="logo"
            priority
            className="w-[50px] sm:w-[100px]"
          />
        </div>
        <SlideInSection offset={30} side="bottom" className="sm:w-[40%]">
          <p className="text-white text-center italic text-xl sm:text-3xl lg:text-4xl">
            Приватные кабинеты для лиц принимающих важные решения
          </p>
        </SlideInSection>
        <div className="flex-shrink-0">
          <Image
            width={190}
            height={72}
            src="/Vector2.svg"
            alt="logo"
            priority
            className="w-[50px] sm:w-[100px]"
          />
        </div>
      </div>
    </section>
  )
}

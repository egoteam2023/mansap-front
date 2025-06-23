'use client'
import Image from 'next/image'
import styles from './hero.module.scss'
import { Carousel } from 'antd'
import { heroData } from './hero.data'
import { useRef } from 'react'
import { CarouselRef } from 'antd/es/carousel'
import { SlideInSection } from '../animation/SlideInSection'

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <SlideInSection side="bottom">
        <div className={styles.heroTitle}>
          <Image
            width={400}
            height={180}
            src="/logo.svg"
            alt="logo"
            priority
            className="w-[250px] md:w-full"
          />
        </div>
      </SlideInSection>
    </section>
  )
}

const HeroSlider: React.FC = () => {
  const carouselRef = useRef<CarouselRef>(null)
  const goToNext = () => {
    carouselRef.current?.next()
  }
  return (
    <>
      <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <Carousel
          ref={carouselRef}
          arrows={false}
          dotPosition="right"
          dots={false}
          autoplay={true}
          draggable={false}
          autoplaySpeed={3500}
          speed={1000}
          infinite={true}
        >
          {heroData.map((item, index) => (
            <Image
              key={index}
              src={item}
              className={styles.heroSliderImage}
              alt="hero image"
              width={700}
              height={500}
            />
          ))}
        </Carousel>
      </div>
      <button onClick={goToNext} className={styles.heroSliderNextBtn} />
    </>
  )
}

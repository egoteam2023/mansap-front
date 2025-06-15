'use client'
import { useRef } from 'react'
import Image from 'next/image'
import styles from './service.module.scss'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/es/carousel'
import { servicesData } from './services.data'

function Services() {
  const carouselRef = useRef<CarouselRef>(null)
  const goToNext = () => {
    carouselRef.current?.next()
  }

  return (
    <section>
      <Carousel
        ref={carouselRef}
        arrows={false}
        dotPosition="bottom"
        dots={false}
        autoplay={true}
        draggable={false}
        autoplaySpeed={3500}
        speed={1000}
        infinite={true}
      >
        {servicesData.map((item, index) => (
          <div key={`service_${index}`}>
            <div
              style={{
                background: `url('${item.image}') center center / cover no-repeat`,
              }}
              className={styles.serviceSlider}
            >
              <div className={styles.serviceSliderText}>
                <p className={styles.serviceSliderTitle}>{item.title}</p>
                <p className={styles.serviceSliderDescription}>
                  {item.description}
                </p>
              </div>
              <button
                onClick={goToNext}
                className={styles.serviceSliderNextBtn}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  )
}
{
  /* <div className="slider-container relative overflow-hidden">
        <Slider
          ref={(slider) => {
            sliderRef.current = slider
          }}
          className='!h-auto'
          {...settings}
        >
          {(servicesList as IService[]).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </Slider>
        <div
          style={{
            textAlign: 'center',
            position: 'absolute',
            bottom: '40px',
            right: '60px',
            display: 'flex',
            gap: '20px',
          }}
        >
          <button
            className="button  bg-slate-300 flex items-center justify-center p-3 duration-300 hover:bg-yellow"
            onClick={previous}
          >
            <Image src={rightIcon} alt="prev" width={30} height={30} />
          </button>
          <button
            className="button  bg-slate-300 flex items-center justify-center p-3 duration-300 hover:bg-yellow"
            onClick={next}
          >
            <Image src={leftIcon} alt="next" width={30} height={30} />
          </button>
        </div>
      </div> */
}
export default Services

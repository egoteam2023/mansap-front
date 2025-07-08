'use client'
import SectionTitle from '../ui/section-title'
import dynamic from 'next/dynamic'

const LocationMap = dynamic(() => import('@/components/location/map'), {
  ssr: false,
})

export default function Location() {
  return (
    <section id="location" className="container relative">
      <div
        className="absolute inset-0 bg-top bg-cover opacity-30  -bottom-40"
        style={{ backgroundImage: `url('/Vector4.svg')` }}
      ></div>
      <div className="flex flex-col gap-10">
        <SectionTitle title="Локация" />
        <LocationMap
          lat={42.853148}
          lng={74.610213}
          address="г. Бишкек, Байтик Баатыра, 25"
          key={`map-${42.853148}-${74.610213}`}
        />
        {/* <SlideInSection side="left">
            <div className="flex flex-col gap-5 text-white font-manrope w-[300px]">
              <p className="text-base">
                Ваш тихий и рабочий уголок будет находиться в центре делового
                квартала BFT.
              </p>
              <p className="text-lg">
                На 11 этаже Блока “А”. Советская/Медерова
              </p>
              <Button variant="primary-red" className="text-lg hidden md:block">
                Узнать цену
              </Button>
            </div>
          </SlideInSection>з
          <SlideInSection side="right">
            <div className="flex flex-col items-center gap-5">
              <Image
                src="/location.svg"
                alt="location image"
                width={500}
                height={500}
                className="md:w-full w-[300px] h-auto"
              />
              <Button
                variant="primary-red"
                className="text-lg w-full sm:hidden"
              >
                Узнать цену
              </Button>
            </div>
          </SlideInSection> */}
      </div>
    </section>
  )
}

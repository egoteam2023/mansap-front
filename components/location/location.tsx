import Image from 'next/image'
import Button from '../ui/button'
import SectionTitle from '../ui/section-title'

export default function Location() {
  return (
    <section id="location" className="container relative">
      <div
        className="absolute inset-0 bg-top bg-cover opacity-30  -bottom-40"
        style={{ backgroundImage: `url('/Vector4.svg')` }}
      ></div>
      <div className="flex flex-col gap-10">
        <SectionTitle title="Локация" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between gap-6 items-center ">
          <div className="flex flex-col gap-5 text-white font-manrope w-[300px]">
            <p className="text-base">
              Ваш тихий и рабочий уголок будет находиться в центре делового
              квартала BFT.
            </p>
            <p className="text-lg">На 11 этаже Блока “А”. Советская/Медерова</p>
            <Button variant="primary-red" className="text-lg hidden md:block">
              Узнать цену
            </Button>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/location.svg"
              alt="location image"
              width={500}
              height={500}
              className="md:w-full w-[300px] h-auto"
            />
            <Button variant="primary-red" className="text-lg w-full sm:hidden">
              Узнать цену
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import Button from '../ui/button'

export default function Location() {
  return (
    <section className="container relative">
      <div
        className="absolute inset-0 bg-top bg-cover opacity-30  -bottom-40"
        style={{ backgroundImage: `url('/Vector4.svg')` }}
      ></div>
      <div className="relative z-10 flex justify-between gap-2 items-center ">
        <div className="flex flex-col gap-5 text-white font-manrope w-[300px]">
          <p className="text-base">
            Ваш тихий и рабочий уголок будет находиться в центре делового
            квартала BFT.
          </p>
          <p className="text-lg">На 11 этаже Блока “А”. Советская/Медерова</p>
          <Button variant="primary-red" className="text-lg">
            Узнать цену
          </Button>
        </div>
        <div>
          <Image
            src="/location.svg"
            alt="location image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
export function Hero() {
  return (
    <section
      id="hero"
      className="w-full h-screen relative pt-20 overflow-hidden"
    >
      <div className="flex gap-2 justify-center items-center h-hero-sm lg:h-hero-md xl:h-hero-lg">
        <div className="container flex flex-col gap-5 justify-center items-center h-hero-sm lg:h-hero-md xl:h-hero-lg">
          <Image width={400} height={180} src="/logo.svg" alt="logo" />
          <div className="flex flex-col gap-1 text-slate-300 text-xl font-extralight w-[300px] text-center tracking-[3%]">
            <p className="">приватные кабинеты</p>
            <span className="text-slate-500">
              для лиц принимающих важные решения
            </span>
          </div>
        </div>
        <div className="">
          <Image
            className="absolute -right-10 top-20 "
            src="/hero-image.png"
            alt="hero image"
            width={700}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}

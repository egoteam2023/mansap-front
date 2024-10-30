import Logo from '@/assets/logo.svg'
import Image from 'next/image'
export function Hero() {
  return (
    <section className="w-full h-screen ">
      <div className="container flex flex-col gap-5 justify-center items-center h-hero-sm lg:h-hero-md xl:h-hero-lg">
        <Image width={500} height={250} src={Logo.src} alt="logo" />
        <p className='text-white'>Наш слоганНаш слоганНаш слоганНаш слоган</p>
      </div>
    </section>
  )
}
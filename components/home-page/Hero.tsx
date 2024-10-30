import Logo from '@/assets/logo.svg'
import Image from 'next/image'
export function Hero() {
  return (
    <section className="w-full h-screen bg-black">
      <div className="container flex justify-center items-center h-hero-sm lg:h-hero-md xl:h-hero-lg">
        <Image width={460} height={250} src={Logo.src} alt="logo" />
      </div>
    </section>
  )
}

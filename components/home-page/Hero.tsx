'use client'
import Logo from '@/assets/logo.svg'
export function Hero() {
  return (
    <section className="w-full bg-black ">
      <div className="container flex justify-center items-center h-hero-sm lg:h-hero-md xl:h-hero-lg">
        <img src={Logo.src} alt="logo" />
      </div>
    </section>
  )
}

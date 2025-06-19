import Feedback from '@/components/feedback/Feedback'
import Gallery from '@/components/gallery/Gallery'
import { Hero } from '@/components/hero/Hero'
import Services from '@/components/services/Services'
import Founders from '@/components/founders/Founders'
import { Slogan } from '@/components/slogan/slogan'
import Location from '@/components/location/location'

export default function Home() {
  return (
    <main className="pt-14">
      <div className="flex flex-col gap-10 sm:gap-14 md:gap-20 lg:gap-24 xl:gap-28">
        <Hero />
        <Slogan />
        <Services />
        <Gallery />
        <Location />
        <Founders />
        <Feedback />
      </div>
    </main>
  )
}

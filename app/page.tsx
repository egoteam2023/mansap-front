import Feedback from '@/components/feedback/Feedback'
import Gallery from '@/components/gallery/Gallery'
import { Hero } from '@/components/hero/Hero'
import OurProducts from '@/components/our-products/OurProducts'
import Services from '@/components/services/Services'
import Founders from '@/components/founders/Founders'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <section className="bg-white mt-[60px] lg:mt-[80px] py-20">
        <Founders />
      </section>
      {/* <OurProducts/> */}
      <Feedback />
    </main>
  )
}

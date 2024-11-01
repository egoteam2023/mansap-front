import Feedback from '@/components/feedback/Feedback'
import Gallery from '@/components/gallery/Gallery'
import { Hero } from '@/components/home-page/Hero'
import OurProducts from '@/components/our-products/OurProducts'
import Services from '@/components/services/Services'
import Founders from '@/components/founders/Founders'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services/>
      <Gallery/>
      <Founders />
      <OurProducts/>
      <Feedback/>
    </main>
  )
}

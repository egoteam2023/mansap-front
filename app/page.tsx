import Feedback from '@/components/feedback/Feedback'
import Gallery from '@/components/gallery/Gallery'
import { Hero } from '@/components/home-page/Hero'
import OurProducts from '@/components/our-products/OurProducts'
import Services from '@/components/services/Services'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services/>
      <Gallery/>
      <OurProducts/>
      <Feedback/>
      <h1>О НАС</h1>
      <h1>ЧТО МЫ ПРЕДЛАГАЕМ?</h1>
      <h1>ОТ СОЗДАТЕЛЕЙ</h1>
      <h1>ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</h1>
    </main>
  )
}

import { Gallery } from '@/components/gallery/Gallery'
import { Hero } from '@/components/home-page/Hero'

export default function Home() {
  return (
    <main className="mainBg flex flex-col gap-5">
      <Hero />
      {/* <h1>Конференц залы</h1> */}
      <Gallery />
      <h1>ЧТО МЫ ПРЕДЛАГАЕМ?</h1>
      <h1>ОТ СОЗДАТЕЛЕЙ</h1>
      <h1>ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</h1>
    </main>
  )
}

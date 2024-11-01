import Image from 'next/image'
import logo from '@/assets/logo.svg'
import FeedbackForm from './Form'

function Feedback() {
  return (
    <section id="feedback" className="relative px-10 h-[800px] flex items-center justify-start">
      <Image
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        width={400}
        height={120}
        src={logo}
        alt="mansap"
      />
      <FeedbackForm/>
    </section>
  )
}

export default Feedback

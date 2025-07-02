'use client'
import { servicesData } from './services.data'
import ServiceCard from './service-card'
import { SlideInSection } from '../animation/SlideInSection'

function Services() {
  return (
    <section id="benifits">
      <div className="flex flex-col gap-10">
        {servicesData.length > 0 &&
          servicesData.map((service, index) => {
            const even = index === 0 || index % 2 === 0
            if (even) {
              return (
                <SlideInSection side="left" key={index}>
                  <ServiceCard data={service} />
                </SlideInSection>
              )
            } else {
              return (
                <SlideInSection side="right" key={index}>
                  <ServiceCard data={service} />
                </SlideInSection>
              )
            }
          })}
      </div>
    </section>
  )
}

export default Services

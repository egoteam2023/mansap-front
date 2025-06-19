'use client'
import { servicesData } from './services.data'
import ServiceCard from './service-card'

function Services() {
  return (
    <section>
      <div className="flex flex-col gap-10">
        {servicesData.length > 0 &&
          servicesData.map((service, index) => (
            <ServiceCard data={service} key={index} />
          ))}
      </div>
    </section>
  )
}

export default Services

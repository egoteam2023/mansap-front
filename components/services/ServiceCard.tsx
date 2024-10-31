import React from 'react'
import { IService } from './type'
import Button from '../ui/button'

function ServiceCard({ service }: { service: IService }) {
  return (
    <div>
      <div className="h-[600px] flex items-start w-full ">
        <div className="hidden w-5/12 h-full bg-white lg:flex items-center px-10 md:px-16 lg:px-20 xl:px-24">
          <div>
            <h2 className="mb-10 text-sm font-semibold">Что мы предлагаем?</h2>
            <h3 className="mb-7 text-4xl font-bold">{service.title}</h3>
            <p className="mb-8 text-xs font-light">{service.description}</p>
            <Button variant="primary-yellow" className="">
              Узнать подробнее
            </Button>
          </div>
        </div>
        <div
          className={`relative w-full h-full`}
          style={{
            background: `url('${service.image}') center center/cover no-repeat`,
          }}
        >
          <div className="lg:hidden h-full text-white z-10 bg-none flex items-center px-10 md:px-16 lg:px-20 xl:px-24">
            <div>
              <h2 className="mb-10 text-sm font-semibold">
                Что мы предлагаем?
              </h2>
              <h3 className="mb-7 text-5xl font-bold">{service.title}</h3>
              <p className="mb-8 text-xs font-light">{service.description}</p>
              <Button variant="primary-yellow" className="">
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard

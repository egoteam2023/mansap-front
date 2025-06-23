import React from 'react'
import { IGallery } from './type'

function GalleryCard({ gallery }: { gallery: IGallery }) {
  return (
    <div
      className={`relative h-[350px] md:h-custom460 lg:h-[500px] group w-full`}
      style={{
        background: `url('${gallery.image}') center center/cover no-repeat`,
      }}
    ></div>
  )
}

export default GalleryCard

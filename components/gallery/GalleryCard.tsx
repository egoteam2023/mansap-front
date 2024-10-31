import React from 'react'
import { IGallery } from '@/type';

function GalleryCard({ gallery, idx }: { gallery: IGallery; idx: number }) {
  return (
    <div
      className={`relative h-[380px] md:h-custom460 lg:h-[500px] group`}
      style={{
        background: `url('${gallery.image}') center center/cover no-repeat`,
      }}
    >
      <div className="bg-white flex items-center justify-center text-black font-bold absolute top-0 right-0 h-[45px] w-[45px]">
        {idx + 1}
      </div>
      <div className="absolute inset-0 bg-black/50 flex items-center flex-col gap-4 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white font-bold text-lg">{gallery.title}</span>
        <span className="text-white font-semibold text-lg">{gallery.description}</span>
      </div>
    </div>
  )
}

export default GalleryCard

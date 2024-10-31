import Image, { StaticImageData } from 'next/image'
import React from 'react'
import test from '@/assets/Mask group-2.png'
interface IGalleryCardProps {
  imageUrl: StaticImageData
  number: number
}

export default function GalleryCard({ imageUrl, number }: IGalleryCardProps) {
  return (
    <div className="flex flex-col items-center h-full">
      <p className="text-lg font-medium mb-4">{number}</p>
      <Image
        src={imageUrl}
        alt="gallery image"
        layout="responsive"
        width={300}
        height={450}
        className="rounded-sm object-cover"
      />
      <div
        className="h-72 w-56 bg-white "
        style={{
          backgroundImage: `url(${test.src})`,
        }}
      >
        ds
      </div>
    </div>
  )
}

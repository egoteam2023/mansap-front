'use client'
import dynamic from 'next/dynamic'

const Location = dynamic(() => import('@/components/location/location'), {
  ssr: false,
})

export default function RootLocation() {
  return <Location />
}

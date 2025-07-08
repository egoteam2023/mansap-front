'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useRef, useState } from 'react'

type Props = {
  lat: number
  lng: number
  address: string
}

const customIcon = new L.Icon({
  iconUrl: '/Subtract.png',
  iconSize: [32, 42],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
})

export default function LocationMap({ lat, lng, address }: Props) {
  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-md">
      <MapContainer
        center={[lat, lng]}
        zoom={16}
        style={{ height: '100%', width: '100%' }}
        trackResize={false}
      >
        <TileLayer url="https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}" />
        <Marker position={[lat, lng]} icon={customIcon}>
          <Popup>{address}</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

import { InfoWindow, Marker } from '@react-google-maps/api'
import React, { useState } from 'react'

export default function MarkerWithInfo ({ name, lat, lng }) {
  const [isOpen, setIsOpen] = useState(false)

  const position = { lat, lng }

  const options = {
    pixelOffset: new window.google.maps.Size(0, -40)
  }

  const toggle = () => {
    setIsOpen((open) => !open)
  }

  return (
    <>
      <Marker position={position} onClick={toggle} />

      {
        isOpen && (
          <InfoWindow position={position} options={options} onCloseClick={toggle}>
            <div>{name}</div>
          </InfoWindow>
        )
      }
    </>
  )
}

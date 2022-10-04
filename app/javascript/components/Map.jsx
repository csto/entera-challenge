import { GoogleMap, LoadScriptNext } from '@react-google-maps/api'
import React from 'react'
import MarkerWithInfo from './MarkerWithInfo'

export default function Map ({ colleges = [] }) {
  const apiKey = document.querySelector('meta[name="maps_api_key"]')?.content

  return (
    <LoadScriptNext googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={styles.container}
        center={{
          lat: 37.0902,
          lng: -95.7129,
        }}
        zoom={4}
      >
        {
          colleges.map((college) => {
            if (!college.lat || !college.lng) return null

            return (
              <MarkerWithInfo
                key={college.id}
                name={college.name}
                lat={college.lat}
                lng={college.lng}
              />
            )
          })
        }
      </GoogleMap>
    </LoadScriptNext>
  )
}

const styles = {
  container: {
    width: '100%',
    maxWidth: 900,
    height: 600
  }
}

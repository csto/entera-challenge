import React from 'react'

export default function Results ({ search, size, loading }) {
  if (!search) return null

  return (
    <div style={styles.results}>
      {
        loading
          ?
          <div>Loading...</div>
          :
          <div>Showing <b>{size}</b> results for <b>{search}</b>.</div>
      }
    </div>
  )
}

const styles = {
  results: {
    height: 30
  }
}

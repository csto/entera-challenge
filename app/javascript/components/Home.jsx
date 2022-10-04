import React, { useState } from 'react'
import useColleges from '../hooks/useColleges'
import Map from './Map'
import Results from './Results'
import Search from './Search'

export default function Home () {
  const [search, setSearch] = useState(null)
  const { colleges, error, loading } = useColleges(search)

  if (error) return <div>An error occured. {error.message}</div>

  return (
    <div style={styles.container}>
      <h1>College Search</h1>
      <Search setSearch={setSearch} />
      <Results search={search} size={colleges.length} loading={loading} />
      <Map colleges={colleges} />
    </div>
  )
}

const styles = {
  container: {
    paddingLeft: 40,
    paddingRight: 40
  }
}

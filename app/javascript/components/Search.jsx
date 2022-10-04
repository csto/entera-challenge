import React, { useState } from 'react'

export default function Search ({ setSearch }) {
  const [searchInput, setSearchInput] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()

    setSearch(searchInput)
    setSearchInput('')
  }

  const onChange = (event) => {
    setSearchInput(event.target.value)
  }

  return (
    <form onSubmit={onSubmit} style={styles.form}>
      <input type="text" value={searchInput} onChange={onChange} />
      <button type="submit">Search</button>
    </form>
  )
}

const styles = {
  results: {
    marginLeft: 10,
  },
  form: {
    marginBottom: 40
  }
}

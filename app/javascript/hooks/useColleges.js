import { useCallback, useEffect, useState } from 'react'
import CollegeApiService from '../services/CollegeApiService'

export default function useColleges(search) {
  const [results, setResults] = useState({ colleges: [], error: null, loading: true })

  const fetchColleges = useCallback(async () => {
    setResults({ colleges: [], error: null, loading: true })
    const response = await CollegeApiService.getColleges({ search })
    setResults({ ...response, loading: false })
  }, [search])

  useEffect(() => {
    if (!search) return

    fetchColleges()
  }, [search, fetchColleges])

  return results
}

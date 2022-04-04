import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState<any>([])
  const [errorMessage, setErrorMessage] = useState<string>('')

  const searchApi = async (searchTerm: string) => {
    try {
      const response = await yelp.get('/search', {
        params: { limit: 50, term: searchTerm, location: 'san jose' },
      })
      setResults(response.data.businesses)
    } catch (err) {
      setErrorMessage('Something went wrong')
    }
  }

  useEffect(() => {
    searchApi('pasta')
  }, [])

  return [searchApi, results, errorMessage]
}

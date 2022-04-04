import React, { FC, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen: FC = () => {
  const [term, setTerm] = useState<string>('')
  const [results, setResults] = useState<any>([])
  const [errorMessage, setErrorMessage] = useState<string>('')

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: { limit: 50, term, location: 'san jose' },
      })
      setResults(response.data.businesses)
    } catch (err) {
      setErrorMessage('Something went wrong')
    }
  }

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})

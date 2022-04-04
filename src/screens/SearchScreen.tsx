import React, { FC, useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen: FC = () => {
  const [term, setTerm] = useState<string>('')
  const [searchApi, results, errorMessage] = useResults()

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})

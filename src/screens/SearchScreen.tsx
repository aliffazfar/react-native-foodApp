import React, { FC, useState, useEffect } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen: FC = () => {
  const [term, setTerm] = useState<string>('')
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = (price: any) => {
    return results.filter((result: { price: any }) => {
      return result.price === price
    })
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$$')}
          title='Cost Effective'
        />
        <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
        <ResultsList results={filterResultsByPrice('$')} title='Big Spender' />
      </ScrollView>
    </>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})

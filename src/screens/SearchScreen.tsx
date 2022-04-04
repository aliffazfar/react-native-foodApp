import React, { FC } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen: FC = () => {
  return (
    <View>
      <SearchBar />
      <Text>Search Screen</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})

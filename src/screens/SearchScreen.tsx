import React, { FC, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen: FC = () => {
  const [term, setTerm] = useState<string>('')

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm: React.SetStateAction<string>) =>
          setTerm(newTerm)
        }
      />
      <Text>Search Screen</Text>
      <Text>{term}</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})

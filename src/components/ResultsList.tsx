import React, { FC } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

interface ResultProp {
  title: string
  results: any
}

const ResultsList: FC<ResultProp> = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default ResultsList

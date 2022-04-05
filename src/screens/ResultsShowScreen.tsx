import React, { FC, useState, useEffect } from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

interface ResultProp {
  navigation: any
}

const ResultsShowScreen: FC<ResultProp> = ({ navigation }) => {
  const [result, setResult] = useState<any>(null)

  const id = navigation.getParam('id')

  const getResult = async (id: any) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }
  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />
        }}
      />
    </View>
  )
}

export default ResultsShowScreen

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
  },
})

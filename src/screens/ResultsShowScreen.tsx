import React, { FC, useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
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

  return (
    <View>
      <Text>Rsults shows</Text>
    </View>
  )
}

export default ResultsShowScreen

const styles = StyleSheet.create({})

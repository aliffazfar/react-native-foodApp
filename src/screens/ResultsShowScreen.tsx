import React, { FC } from 'react'
import { Text, View, StyleSheet } from 'react-native'

interface ResultProp {
  navigation: any
}

const ResultsShowScreen: FC<ResultProp> = ({ navigation }) => {
  const id = navigation.getParam('id')
  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
}

export default ResultsShowScreen

const styles = StyleSheet.create({})

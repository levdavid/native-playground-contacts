import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Contact } from './types'

const styles = StyleSheet.create({
  row: { padding: 20 },
})

const Row = (props: Contact) => (
  <View style={styles.row}>
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </View>
)

export default Row

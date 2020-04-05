import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import Constants from 'expo-constants'
import { Contact } from './types'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        minWidth: 100,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
    },
})

const AddContactForm = (props: { onSubmit: (contact: Contact) => void; }) => {
    const [name, setName] = React.useState("")
    const [phone, setPhone] = React.useState("")

    // handleSubmit = () => {
    //     this.props.onSubmit(this.state)
    // }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Name"
            />
            <TextInput
                keyboardType="numeric"
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                placeholder="Phone"
            />
            <Button title="Submit" onPress={() => console.log(`user tried to submit name=${name}, phone=${phone}`)} />
        </View>
    )
}

export default AddContactForm
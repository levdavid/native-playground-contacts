import React, { useEffect } from 'react'
import { Button, StyleSheet, TextInput, View, KeyboardAvoidingView } from 'react-native'
import Constants from 'expo-constants'
import { Contact } from './types'
import { number } from 'prop-types'

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

const isValidNumber = (number: string): boolean => {
    return (+number >= 0 && number.length === 10)
}

const AddContactForm = (props: { onSubmit: (contact: Contact) => void; }) => {
    const [name, setName] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [isValidForm, setIsValidForm] = React.useState(false)

    const handleSubmit = () => { props.onSubmit({ name: name, phone: phone }); }

    const handlePhoneChange = (newNumber: string) => {
        if (+newNumber >= 0 && newNumber.length <= 10)
            setPhone(newNumber)
    }

    useEffect(() => {
        setIsValidForm(isValidNumber(phone) && name.length > 0)
    }, [phone, name])

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
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
                onChangeText={handlePhoneChange}
                placeholder="Phone"
            />
            <TextInput
                keyboardType="numeric"
                style={styles.input}
                value={phone}
                onChangeText={handlePhoneChange}
                placeholder="Phone"
            />
            <TextInput
                keyboardType="numeric"
                style={styles.input}
                value={phone}
                onChangeText={handlePhoneChange}
                placeholder="Phone"
            />
            <TextInput
                keyboardType="numeric"
                style={styles.input}
                value={phone}
                onChangeText={handlePhoneChange}
                placeholder="Phone"
            />
            <TextInput
                keyboardType="numeric"
                style={styles.input}
                value={phone}
                onChangeText={handlePhoneChange}
                placeholder="Phone"
            />

            <Button title="Submit" onPress={handleSubmit} disabled={!isValidForm} />
        </KeyboardAvoidingView>
    )
}

export default AddContactForm
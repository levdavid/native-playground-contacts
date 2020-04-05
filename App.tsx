import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SectionListContacts from './SectionListContacts';
import { Contact } from './types';
import AddContactForm from './AddContactForm';
import contacts, { compareNames } from './contacts'
import Constants from 'expo-constants'

const App = () => {
  const [showContacts, setShowContacts] = useState(true)
  const [contactList, setContactList] = useState(contacts)
  const [showForm, setShowForm] = useState(false)

  const toggleContacts = () => {
    setShowContacts(!showContacts)
  }

  function addContact(newContact: Contact) {
    setContactList([...contactList, newContact])
  }

  if (showForm) return <AddContactForm onSubmit={addContact} />

  return (
    <View style={styles.container}>
      <Button title="toggle contacts" onPress={toggleContacts} />
      <Button title="add contact" onPress={() => setShowForm(true)} />
      {showContacts && <SectionListContacts contacts={contactList} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App
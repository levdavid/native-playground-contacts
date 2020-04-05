import React from 'react'
import { SectionList, Text, SectionListData } from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'
import { contactProps, Section, Contact, contactSections } from './types'

const renderItem = ({ item }: { item: Contact }) => <Row {...item} />

const renderSectionHeader = ({ section }: { section: SectionListData<Contact>; }) => <Text>{section.title}</Text>

const SectionListContacts = (props: contactProps) => {

  const init_sections: contactSections = {};
  const contactsByLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase()
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    }
  }, init_sections)

  const sections = Object.keys(contactsByLetter).sort().map(letter => ({
    data: contactsByLetter[letter],
    title: letter,
  }))

  return <SectionList
    sections={sections}
    renderItem={renderItem}
    renderSectionHeader={renderSectionHeader}
    style={{
      width: '100%',
      paddingLeft: 5,
    }} />
}

SectionListContacts.propTypes = {
  contacts: PropTypes.array,
}

export default SectionListContacts

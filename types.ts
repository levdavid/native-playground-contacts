export interface Contact {
    name: string,
    phone: string
}

export interface contactProps {
    contacts: Contact[]
}

export interface Section {
    data?: Contact[]
    title: string
}

export type contactSections = {
    [key: string]: Contact[]
}


export interface AcademicEducation {
    title: string
    description: string
    period: string
}

export interface AdditionalEducation {
    title: string
    content: string
}

export interface Event {
    title: string
    date: string
    time: string
    place: string
    price: string
    image: string
    media: EventMedia[] | null 
}

export interface EventMedia {
    title: string
    url: string
}

export interface HomeSection {
    title: string
    media: string | undefined
    content: string
}

export interface PersonalPage {
    profile?: Profile
    academicEducation?: AcademicEducation[]
    additionalEducation?: AdditionalEducation[]
    works?: Work[]
    err?: string
}

export interface Profile {
    name: string
    tags: string[]
    picture: string
    instagram: string
    phone: string
    email: string
}

export interface SocialMedia {
    title: string
    link: string
}

export interface Work {
    title: string
    media: string
    imageCredit: string | undefined
    content: string
    displayType: string | undefined
}

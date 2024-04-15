export interface Work {
    title: string
    media: string
    imageCredit: string | undefined
    content: string
    displayType: string | undefined
}

export interface SocialMedia {
    title: string
    link: string
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

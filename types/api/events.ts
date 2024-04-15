export interface ApiResponse {
    object: string
    results: Result[]
    next_cursor: any
    has_more: boolean
    type: string
    page_or_database: PageOrDatabase
    request_id: string
}

export interface Result {
    object: string
    id: string
    created_time: string
    last_edited_time: string
    created_by: CreatedBy
    last_edited_by: LastEditedBy
    cover: any
    icon: any
    parent: Parent
    archived: boolean
    in_trash: boolean
    properties: Properties
    url: string
    public_url: any
}

export interface CreatedBy {
    object: string
    id: string
}

export interface LastEditedBy {
    object: string
    id: string
}

export interface Parent {
    type: string
    database_id: string
}

export interface Properties {
    media: Media
    image: Image
    dateTime: DateTime
    price: Price
    place: Place
    title: Title
}

export interface Media {
    id: string
    type: string
    relation: Relation[]
    has_more: boolean
}

export interface Relation {
    id: string
}

export interface Image {
    id: string
    type: string
    rich_text: RichText[]
}

export interface RichText {
    type: string
    text: Text
    annotations: Annotations
    plain_text: string
    href: string
}

export interface Text {
    content: string
    link: Link
}

export interface Link {
    url: string
}

export interface Annotations {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
}

export interface DateTime {
    id: string
    type: string
    date: Date
}

export interface Date {
    start: string
    end: any
    time_zone: any
}

export interface Price {
    id: string
    type: string
    rich_text: RichText2[]
}

export interface RichText2 {
    type: string
    text: Text2
    annotations: Annotations2
    plain_text: string
    href: any
}

export interface Text2 {
    content: string
    link: any
}

export interface Annotations2 {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
}

export interface Place {
    id: string
    type: string
    rich_text: RichText3[]
}

export interface RichText3 {
    type: string
    text: Text3
    annotations: Annotations3
    plain_text: string
    href: any
}

export interface Text3 {
    content: string
    link: any
}

export interface Annotations3 {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
}

export interface Title {
    id: string
    type: string
    title: Title2[]
}

export interface Title2 {
    type: string
    text: Text4
    annotations: Annotations4
    plain_text: string
    href: any
}

export interface Text4 {
    content: string
    link: any
}

export interface Annotations4 {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
}

export interface PageOrDatabase { }

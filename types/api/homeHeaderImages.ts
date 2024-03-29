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
    image: Image
    name: Name
  }
  
  export interface Image {
    id: string
    type: string
    files: File[]
  }
  
  export interface File {
    name: string
    type: string
    file: File2
  }
  
  export interface File2 {
    url: string
    expiry_time: string
  }
  
  export interface Name {
    id: string
    type: string
    title: Title[]
  }
  
  export interface Title {
    type: string
    text: Text
    annotations: Annotations
    plain_text: string
    href: any
  }
  
  export interface Text {
    content: string
    link: any
  }
  
  export interface Annotations {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
  }
  
  export interface PageOrDatabase {}
  
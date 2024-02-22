import { notionClient } from '@/services/notion'


export const filterPublished = {
    property: 'status',
    select: {
        equals: 'Publicar',
    }
}

interface sortByOrder {
    property: string
    direction: 'ascending' | 'descending'
}

export const sortByOrder: sortByOrder = {
    property: 'order',
    direction: 'ascending'
}

export async function getApiData(DATABASE_ID: string, filter?:any, sorts?:any) {
    return await notionClient.databases.query({
        database_id: DATABASE_ID,
        filter: filter ? filter : undefined,
        sorts: sorts ? [ sorts ] : []
    })
}

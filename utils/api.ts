import { notionClient } from '@/services/notion'


export const filterPublished = {
    property: 'status',
    select: {
        equals: 'Publicar',
    }
}

interface Sort {
    property: string
    direction: 'ascending' | 'descending'
}

export const sortByOrder: Sort = {
    property: 'order',
    direction: 'ascending'
}

export const sortByDateTime: Sort = {
    property: 'dateTime',
    direction: 'descending'
}

export async function getApiData(DATABASE_ID: string, filter?:any, sorts?:any) {
    if (!DATABASE_ID) return null
    return await notionClient.databases.query({
        database_id: DATABASE_ID,
        filter: filter ? filter : undefined,
        sorts: sorts ? [ sorts ] : []
    })
}

export function checkAndConvertYoutubeWatchToEmbed(link: string) {
    if (link.includes('youtube')) return link.replace('watch?v=', 'embed/')
    else return link
}

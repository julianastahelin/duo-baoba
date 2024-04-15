import { Event, EventMedia } from '@/types'
import { Events, EventMedias } from '@/types/api'
import { convertDateFromIsoToDayMonthYear, convertTimeFromIsoToHourMinute } from '@/utils'
import { filterPublished, getApiData, sortByDateTime } from '@/utils/api'

import { notionClient } from '.'
import { eventsDatabase } from './databases'


export async function getEvents(): Promise<Event[]> {
    const EVENTS_DATABASE_ID = eventsDatabase
    const response = await getApiData(EVENTS_DATABASE_ID, filterPublished, sortByDateTime)
    
    const typedEvents = response as unknown as Events.ApiResponse
    
    return await Promise.all(typedEvents.results.map(async (result) => {
        return {
            title: result.properties.title.title[0]?.plain_text || '',
            date: convertDateFromIsoToDayMonthYear(result.properties.dateTime.date?.start)?.split(',').join(' - ') || '',
            time: convertTimeFromIsoToHourMinute(result.properties.dateTime.date?.start) || '',
            place: result.properties.place.rich_text[0]?.plain_text || '',
            price: result.properties.price.rich_text[0]?.plain_text || '',
            image: result.properties.image.rich_text[0]?.href || '',
            media: await getEventMedias(result.properties.media.relation)
        }
    }))
}

async function getEventMedias(relations: Events.Relation[]): Promise<EventMedia[]> {
    return await Promise.all(relations.map(async (item) => {
        const mediaResponse = await notionClient.pages.retrieve({ page_id: item.id })
        const typedMediaResponse = mediaResponse as unknown as EventMedias.ApiResponse

        return {
            title: typedMediaResponse.properties.title.title[0].plain_text,
            url: typedMediaResponse.properties.url.rich_text[0].href
        }
    }))
}

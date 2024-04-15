import { HomeSectionsResponse } from '@/types/api'
import { HomeSection } from '@/types'
import { checkAndConvertYoutubeWatchToEmbed, filterPublished, getApiData, sortByOrder } from '@/utils/api'

import { HomePageDatabases } from './databases'


export async function getHomeSections(): Promise<HomeSection[]> {
    const DATABASE_ID = HomePageDatabases['homeSections']
    const response = await getApiData(DATABASE_ID, filterPublished, sortByOrder)
    const typedHomeSections = response as unknown as HomeSectionsResponse.ApiResponse

    return typedHomeSections.results.map((result) => {
        return {
            title: result.properties.title.title[0].plain_text,
            media: result.properties.media.url
                ? checkAndConvertYoutubeWatchToEmbed(result.properties.media.url)
                : undefined,
            content: result.properties.content.rich_text[0].plain_text,
        }
    })
}

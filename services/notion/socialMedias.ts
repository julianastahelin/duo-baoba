import { SocialMediasResponse } from '@/types/api'
import { SocialMedia } from '@/types'
import { filterPublished, getApiData, sortByOrder } from '@/utils/api'

import { HomePageDatabases } from './databases'


export async function getSocialMedias(): Promise<SocialMedia[]> {
    const DATABASE_ID = HomePageDatabases['socialMedias']
    const response = await getApiData(DATABASE_ID, filterPublished, sortByOrder)
    const typedSocialMedias = response as unknown as SocialMediasResponse.ApiResponse

    return typedSocialMedias.results.map((result) => {
        return {
            title: result.properties.title.title[0].plain_text,
            link: result.properties.link.url,
        }
    })
}

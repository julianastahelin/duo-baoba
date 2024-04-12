import { HomeHeaderImages, HomeHeaderText, HomeSections, SocialMedias } from '@/types/api'
import { checkAndConvertYoutubeWatchToEmbed, filterPublished, getApiData, sortByOrder } from '@/utils/api'

import { HomePageDatabases } from './databases'
import { SocialMedia } from '@/types'


export async function getHomePage() {
    const homeSections = await getHomeSections()
    const socialMedias = await getSocialMedias()

    return { homeSections, socialMedias }
}

export async function getHomeHeader() {
    const TEXT_DATABASE_ID = HomePageDatabases['headerText']
    const textResponse = await getApiData(TEXT_DATABASE_ID)
    const typedHomeHeader = textResponse as unknown as HomeHeaderText.ApiResponse

    const IMAGES_DATABASE_ID = HomePageDatabases['headerImages']
    const imagesResponse = await getApiData(IMAGES_DATABASE_ID)
    const typedImages = imagesResponse as unknown as HomeHeaderImages.ApiResponse

    return {
        text: {
            title: typedHomeHeader.results[0].properties.title.title[0].text.content,
            tags: typedHomeHeader.results[0].properties.tags.multi_select.map((tag) => tag.name)
        },
        images:
            typedImages.results.map((person) => {
                return {
                    name: person.properties.name.title[0].plain_text,
                    image: person.properties.image.files[0].file.url,
                }
            })
    }
}

export async function getHomeSections() {
    const DATABASE_ID = HomePageDatabases['homeSections']
    const response = await getApiData(DATABASE_ID, filterPublished, sortByOrder)
    const typedHomeSections = response as unknown as HomeSections.ApiResponse

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

export async function getSocialMedias(): Promise<SocialMedia[]> {
    const DATABASE_ID = HomePageDatabases['socialMedias']
    const response = await getApiData(DATABASE_ID, filterPublished, sortByOrder)
    const typedSocialMedias = response as unknown as SocialMedias.ApiResponse

    return typedSocialMedias.results.map((result) => {
        return {
            title: result.properties.title.title[0].plain_text,
            link: result.properties.link.url,
        }
    })
}

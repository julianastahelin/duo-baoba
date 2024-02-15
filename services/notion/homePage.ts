import { HomeHeaderImages, HomeHeaderText, HomeSections, SocialMedias } from '@/types/api'
import { fetchAndConvertToMarkdown } from '@/utils/api'

import { notionClient } from '.'
import { HomePageDatabases } from './databases'


export async function getHomePage() {
    const header = await getHomeHeader()
    const homeSections = await getHomeSections()
    const socialMedias = await  getSocialMedias()

    return { header, homeSections, socialMedias }
}

export async function getHomeHeader() {
    const textResponse = await notionClient.databases.query({
        database_id: HomePageDatabases['headerText']
    })
    const typedHomeHeader = textResponse as unknown as HomeHeaderText.ApiResponse

    const imagesResponse = await notionClient.databases.query({
        database_id: HomePageDatabases['headerImages']
    })
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
    const response = await notionClient.databases.query({
        database_id: HomePageDatabases['homeSections']
    })
    const typedHomeSections = response as unknown as HomeSections.ApiResponse
    return await Promise.all(typedHomeSections.results.map(async (result) => {
        const content = await fetchAndConvertToMarkdown(result.id)

        return {
            title: result.properties.title.title[0].plain_text,
            image: result.properties.image.files[0]?.file?.url,
            content: content
        }
    }))
}

export async function getSocialMedias() {
    const response = await notionClient.databases.query({
        database_id: HomePageDatabases['socialMedias']
    })
    const typedSocialMedias = response as unknown as SocialMedias.ApiResponse

    return typedSocialMedias.results.map((result) => {
        return {
            title: result.properties.title.title[0].plain_text,
            link: result.properties.link.url,
        }
    })
}

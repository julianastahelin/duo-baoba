import { AcademicEducation, AdditionalEducation, Profile, Work } from '@/types/api'
import { checkAndConvertYoutubeWatchToEmbed, filterPublished, getApiData, sortByOrder } from '@/utils/api'

import { PersonalDatabaseKeys, personalDatabases } from './databases'


export async function getPersonalPage(person: string) {
    const profile = await getProfile(person)
    const academicEducation = await getAcademicEducation(person)
    const additionalEducation = await getAdditionalEducation(person)
    const works = await getWorks(person)

    return { profile, academicEducation, additionalEducation, works }
}

function getDatabaseId(person: string, database: PersonalDatabaseKeys) {
    const personObject = personalDatabases.find((item) => item.person === person)
    if (personObject)
        return personObject.ids[database as PersonalDatabaseKeys]
}

export async function getProfile(person: string) {
    const DATABASE_ID = getDatabaseId(person, 'profile')
    const response = await getApiData(DATABASE_ID as string)
    const typedProfile = response as unknown as Profile.ApiResponse

    return {
        name: typedProfile.results[0].properties.name.title[0].text.content,
        tags: typedProfile.results[0].properties.tags.multi_select.map((tag) => tag.name),
        picture: typedProfile.results[0].properties.picture.url
    }
}

export async function getAcademicEducation(person: string) {
    const DATABASE_ID = getDatabaseId(person, 'academicEducation')
    const response = await getApiData(DATABASE_ID as string, filterPublished, sortByOrder)
    const typedEducation = response as unknown as AcademicEducation.ApiResponse

    return typedEducation.results.map((result) => {
        return {
            title: result.properties.title.title[0].plain_text,
            description: result.properties.description.rich_text[0].plain_text,
            period: result.properties.period.rich_text[0].plain_text,
        }
    })
}

export async function getAdditionalEducation(person: string) {
    const DATABASE_ID = getDatabaseId(person, 'additionalEducation')
    const response = await getApiData(DATABASE_ID as string, filterPublished, sortByOrder)
    const typedAdditionalEducation = response as unknown as AdditionalEducation.ApiResponse

    return typedAdditionalEducation.results.map((result) => {
        return {
            title: result.properties.title.title[0].plain_text,
            content: result.properties.content.rich_text[0].plain_text
        }
    })
}

export async function getWorks(person: string) {
    const DATABASE_ID = getDatabaseId(person, 'work')
    const response = await getApiData(DATABASE_ID as string, filterPublished, sortByOrder)
    const typedWorks = response as unknown as Work.ApiResponse

    return typedWorks.results.map((result) => {
        return {
            title: result.properties.title.title[0].plain_text,
            media: checkAndConvertYoutubeWatchToEmbed(result.properties.media.url as string),
            imageCredit: result.properties.imageCredit.rich_text.length
                ? result.properties.imageCredit.rich_text[0].plain_text
                : undefined,
            content: result.properties.content.rich_text[0].plain_text
        }
    })
}

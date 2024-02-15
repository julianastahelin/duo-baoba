import { AcademicEducation, AdditionalEducation, Profile, Work } from '@/types/api'
import { fetchAndConvertToMarkdown } from '@/utils/api'

import { notionClient } from '.'
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
    const response = await notionClient.databases.query({
        database_id: DATABASE_ID as string
    })
    const typedProfile = response as unknown as Profile.ApiResponse

    return {
        name: typedProfile.results[0].properties.name.title[0].text.content,
        tags: typedProfile.results[0].properties.tags.multi_select.map((tag) => tag.name),
        picture: typedProfile.results[0].properties.picture.files[0].file.url
    }
}

export async function getAcademicEducation(person: string) {
    const DATABASE_ID = getDatabaseId(person, 'academicEducation')
    const response = await notionClient.databases.query({
        database_id: DATABASE_ID as string
    })
    const typedEducation = response as unknown as AcademicEducation.ApiResponse

    return typedEducation.results.map((result) => {
        return {
            title: result.properties.title.title[0].plain_text,
            description: result.properties.description.rich_text[0].plain_text,
            period: result.properties.period.rich_text[0].plain_text,
            publish: result.properties.enabled.checkbox
        }
    })
}

export async function getAdditionalEducation(person: string) {
    const DATABASE_ID = getDatabaseId(person, 'additionalEducation')
    const response = await notionClient.databases.query({
        database_id: DATABASE_ID as string
    })
    const typedAdditionalEducation = response as unknown as AdditionalEducation.ApiResponse

    return await Promise.all(typedAdditionalEducation.results.map(async (result) => {
        const content = await fetchAndConvertToMarkdown(result.id)

        return {
            title: result.properties.title.title[0].plain_text,
            content: content
        }
    }))
}

export async function getWorks(person: string) {
    const DATABASE_ID = getDatabaseId(person, 'work')
    const response = await notionClient.databases.query({
        database_id: DATABASE_ID as string
    })
    const typedWorks = response as unknown as Work.ApiResponse

    return await Promise.all(typedWorks.results.map(async (result) => {
        const content = await fetchAndConvertToMarkdown(result.id)

        return {
            title: result.properties.title.title[0].plain_text,
            image: result.properties.cover.files[0].file?.url,
            imageCredit: result.properties.imageCredit.rich_text[0].plain_text,
            content: content
        }
    }))
}

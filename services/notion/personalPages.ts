import {
    AcademicEducationResponse,
    AdditionalEducationResponse,
    ProfileResponse,
    WorksResponse
} from '@/types/api'
import type {
    AcademicEducation,
    AdditionalEducation,
    PersonalPage,
    Profile,
    Work
} from '@/types'
import { checkAndConvertYoutubeWatchToEmbed, filterPublished, getApiData, sortByOrder } from '@/utils/api'

import { PersonalDatabaseKeys, personalDatabases } from './databases'


function getDatabaseId(person: string, database: PersonalDatabaseKeys) {
    const personObject = personalDatabases.find((item) => item.person === person)
    if (personObject)
        return personObject.ids[database as PersonalDatabaseKeys]
}

function isValidPerson(person: string): boolean {
    return personalDatabases.find((item) => item.person === person)
        ? true : false
}

export async function getPersonalPage(person: string): Promise<PersonalPage> {
    if (!isValidPerson(person)) return { err: 'Pessoa não encontrada' }

    const profile = await getProfile(person)
    const academicEducation = await getAcademicEducation(person)
    const additionalEducation = await getAdditionalEducation(person)
    const works = await getWorks(person)

    return { profile, academicEducation, additionalEducation, works }
}

export async function getProfile(person: string): Promise<Profile> {
    const DATABASE_ID = getDatabaseId(person, 'profile')
    const response = await getApiData(DATABASE_ID as string)
    console.log(response)
    const typedProfile = response as unknown as ProfileResponse.ApiResponse
    const validProfile = typedProfile.results.filter(result => result.properties.name.title.length)

    return {
        name: validProfile[0].properties.name.title[0].text.content,
        tags: validProfile[0].properties.tags.multi_select.map((tag) => tag.name),
        picture: validProfile[0].properties.picture.url,
        instagram: validProfile[0].properties.instagram.rich_text[0].href,
        phone: validProfile[0].properties.phone.phone_number,
        email: validProfile[0].properties.email.email
    }
}

export async function getAcademicEducation(person: string): Promise<AcademicEducation[]> {
    const DATABASE_ID = getDatabaseId(person, 'academicEducation')
    const response = await getApiData(DATABASE_ID as string, filterPublished, sortByOrder)
    const typedEducation = response as unknown as AcademicEducationResponse.ApiResponse

    return typedEducation.results.map((result) => {
        return {
            title: result.properties.title.title[0].plain_text,
            description: result.properties.description.rich_text[0].plain_text,
            period: result.properties.period.rich_text[0].plain_text,
        }
    })
}

export async function getAdditionalEducation(person: string): Promise<AdditionalEducation[]> {
    const DATABASE_ID = getDatabaseId(person, 'additionalEducation')
    const response = await getApiData(DATABASE_ID as string, filterPublished, sortByOrder)
    const typedAdditionalEducation = response as unknown as AdditionalEducationResponse.ApiResponse

    return typedAdditionalEducation.results.map((result) => {
        return {
            title: result.properties.title.title[0].plain_text,
            content: result.properties.content.rich_text[0].plain_text
        }
    })
}

export async function getWorks(person: string): Promise<Work[]> {
    const DATABASE_ID = getDatabaseId(person, 'work')
    const response = await getApiData(DATABASE_ID as string, filterPublished, sortByOrder)
    const typedWorks = response as unknown as WorksResponse.ApiResponse

    return typedWorks.results.map((result) => {
        return {
            title: result.properties.title.title[0].plain_text,
            media: checkAndConvertYoutubeWatchToEmbed(result.properties.media.url as string),
            imageCredit: result.properties.imageCredit.rich_text.length
                ? result.properties.imageCredit.rich_text[0].plain_text
                : undefined,
            content: result.properties.content.rich_text[0]?.plain_text,
            displayType: result.properties.displayType.select?.name
        }
    })
}

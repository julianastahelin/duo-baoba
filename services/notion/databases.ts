interface HomePageDatabases_ids {
    headerText: string
    headerImages: string
    homeSections: string
    socialMedias: string
}

export const HomePageDatabases: HomePageDatabases_ids = {
    headerText: process.env.HOME_HEADER_TEXT_DATABASE_ID as string,
    headerImages: process.env.HOME_HEADER_IMAGES_DATABASE_ID as string,
    homeSections: process.env.HOME_SECIONS_DATABASE_ID as string,
    socialMedias: process.env.HOME_SOCIAL_MEDIAS_DATABASE_ID as string,
}

interface PersonalDatabases_ids {
    profile: string
    academicEducation: string
    additionalEducation: string
    work: string
}

export type PersonalDatabaseKeys = keyof PersonalDatabases_ids

interface PersonalDatabase {
    person: string
    ids: PersonalDatabases_ids
}

export const personalDatabases: PersonalDatabase[] = [
    {
        person: 'mayara',
        ids: {
            profile: process.env.MAYARA_PROFILE_DATABASE_ID as string,
            academicEducation: process.env.MAYARA_ACADEMIC_EDUCATION_DATABASE_ID as string,
            additionalEducation: process.env.MAYARA_ADDITIONAL_EDUCATION_DATABASE_ID as string,
            work: process.env.MAYARA_WORK_DATABASE_ID as string,
        },
    },
    {
        person: 'david',
        ids: {
            profile: process.env.DAVID_PROFILE_DATABASE_ID as string,
            academicEducation: process.env.DAVID_ACADEMIC_EDUCATION_DATABASE_ID as string,
            additionalEducation: process.env.DAVID_ADDITIONAL_EDUCATION_DATABASE_ID as string,
            work: process.env.DAVID_WORK_DATABASE_ID as string,
        }
    }
]

type EventsDatabase_id = string

export const eventsDatabase:EventsDatabase_id = process.env.EVENTS_DATABASE_ID as string

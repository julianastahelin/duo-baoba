import { Client } from '@notionhq/client'


export const notionClient = new Client({ auth: process.env.NOTION_API_KEY })

export { getHomeSections } from './homePage'
export { getPersonalPage } from './personalPages'
export { getSocialMedias } from './socialMedias'

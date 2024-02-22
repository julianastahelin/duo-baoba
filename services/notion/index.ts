import { Client } from '@notionhq/client'


export const notionClient = new Client({ auth: process.env.NOTION_API_KEY })

export { getHomePage } from './homePage'
export { getPersonalPage } from './personalPages'

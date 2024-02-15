import { notionToMarkdown } from '@/services/notion'


export async function fetchAndConvertToMarkdown(id: string) {
    const mdblocks = await notionToMarkdown.pageToMarkdown(id)
    const mdString = notionToMarkdown.toMarkdownString(mdblocks)

    return mdString.parent
}

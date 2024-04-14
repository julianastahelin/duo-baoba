import urlMetadata from 'url-metadata'

interface WebsiteData {
    domain: string
    postTitle: string
    postDescription: string
    favicon: {
        rel: string
        type: string | undefined
        href: string
        sizes: string
    }[]
    siteIcon?: string
}


export async function getMetadata(url:string) {
    try {
      const metadata = await urlMetadata(url)
      const websiteData: WebsiteData = {
        domain: url.split('/').filter((item, index) => index === 0 || index === 2).join('//').concat('/'),
        postTitle: metadata['og:title'],
        postDescription: metadata['og:description'],
        favicon: metadata.favicons.filter((icon: any) => icon.rel === 'icon'),
        siteIcon: metadata.imgTags.length ? metadata.imgTags[0].src : '',
      }
      return websiteData
    } catch (err) {
      console.log(err)
      return null
    }
}

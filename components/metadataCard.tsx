import { getMetadata } from '@/services/metadataScraper'

export async function MetadataCard({ url, title }: { url: string, title:string }) {
    
    const metadata = await getMetadata(url)

    return (
        <div className='flex flex-col p-2 gap-2 h-full w-full rounded-lg opacity-100'>
            <a href={url} target='_blank' className='break-words text-wrap'>
                {metadata
                    ? <>
                        <p className='font-bold hover:underline'>{metadata.postTitle}</p>
                        <p className='font-thin text-sm'>{metadata.postDescription.length < 71 ? metadata.postDescription : `${metadata.postDescription.slice(0, 70)}...` }</p>
                        <div className='flex gap-2 items-center pt-2'>
                            {metadata.favicon.length
                                ? <img src={metadata.favicon[0].href} className='h-6 w-6' />
                                : metadata.siteIcon
                                    ? <img src={metadata.siteIcon} className='h-6 w-6' />
                                    : ''
                            }
                            <p className='font-bold text-xs'>{metadata.domain}</p>
                        </div>
                    </>
                    : <span className='hover:underline hover:opacity-80'><strong>{title}</strong> - {url}</span>
                }
            </a>
        </div>
    )
}
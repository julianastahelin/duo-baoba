import Markdown from 'react-markdown'


export default function StyledMarkdown({
    markdown,
    className
}: {
    markdown: string
    className?: string
}) {
    return (
        <Markdown
            components={{
                h1: ({ node, ...props}) => <h1 className='text-xl font-bold' {...props} />,
                h2: ({ node, ...props}) => <h2 className='text-lg font-semibold' {...props} />
            }}
            className={className}
        >
            {markdown}
        </Markdown>
    )
}

import Markdown from 'react-markdown'


export function StyledMarkdown({
    markdown,
    className
}: {
    markdown: string
    className?: string
}) {
    return (
        <Markdown
            className={className}
            components={{
                h1: ({ node, ...props }) => <h1 className='text-xl font-bold' {...props} />,
                h2: ({ node, ...props }) => <h2 className='text-lg font-semibold' {...props} />,
                a(props) {
                    const { node, ...rest } = props
                    return <a {...rest} target='_blank' className='underline' />
                },
                br: ({node, ...props}) => <br {...props} />
            }}
        >
            {markdown}
        </Markdown>
    )
}

import { Suspense } from 'react'

type ResponsiveIFrameProps = {
    src: string
    id?: string
}

export function Video({ src, id }: ResponsiveIFrameProps) {
    return (
        <Suspense fallback={<p>Carregando vídeo...</p>}>
            <div className='relative pb-[56.25%] w-full'>
                <iframe
                    id={id}
                    src={src}
                    allowFullScreen
                    loading='lazy'
                    className='absolute top-0 left-0 w-full h-full'
                />
            </div>
        </Suspense>
    )
}

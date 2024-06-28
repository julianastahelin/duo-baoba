'use client'
import { useEffect, useState } from 'react'

import { fetchAndSetImageSrc } from '@/services/cloudfare'


interface ImageComponentProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fileName: string
}

export function ImageComponent({fileName, ...props}: ImageComponentProps) {
    const [imageSrc, setImageSrc] = useState<string>()

    useEffect(() => {
        fetchAndSetImageSrc(fileName, setImageSrc)
    }, [fileName])

    return <img src={imageSrc} {...props} />
}

import { Dispatch, SetStateAction } from 'react'

export interface FileUrlResponse {
  url?: string
  error?: string
}

export async function getFileUrl(fileName: string): Promise<FileUrlResponse> {
  try {
    const res = await fetch(`/api/cloudfare?fileName=${fileName}`)
    const blob = await res.blob()
    return { url: URL.createObjectURL(blob) }
  } catch (e) {
    console.error(e)
    return { error: 'Failed to retreive file.' }
  }
}

export async function fetchAndSetImageSrc(fileName: string, setImageSrc: Dispatch<SetStateAction<string | undefined>>) {
  const res = await getFileUrl(fileName)
  if (res.url) setImageSrc(res.url)
}

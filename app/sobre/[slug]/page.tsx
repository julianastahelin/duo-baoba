import Image from 'next/image'
import { Suspense } from 'react'

import StyledMarkdown from '@/components/styledMarkdown'
import { getPersonalPage } from '@/services/notion'


export default async function About({
    params
}: {
    params: { slug: string }
}) {
    const { profile, academicEducation, additionalEducation, works } = await getPersonalPage(params.slug)

    return (
        <section className='flex flex-col items-center justify-center p-10'>
            <Image src={`/assets/img/${profile.picture}`} height={400} width={700} alt='profile picture' />
            <div className='flex flex-col items-center p-4'>
                <h1 className='text-2xl font-bold'>{profile.name}</h1>
                <p>· {profile.tags.join(' · ')} ·</p>
            </div>

            <div className='flex flex-col p-5'>
                <h2 className='text-xl font-bold justify-self-center'>· Formação ·</h2>
                {academicEducation.map((course, index) => {
                    return (
                        <div key={course.title + index} className='p-4'>
                            <p>{course.period}</p>
                            <p><span className='font-bold'>{course.title}</span> - {course.description}</p>
                        </div>
                    )
                })}
            </div>

            {additionalEducation.length
                ?
                additionalEducation.map((item, index) => {
                    return (
                        <div key={item.title + index}>
                            <h2 className='text-xl font-bold justify-self-center'>· {item.title} ·</h2>
                            <StyledMarkdown markdown={item.content} />
                        </div>
                    )
                })
                : ''
            }

            <div className='flex flex-col p-5'>
                <h2 className='text-xl font-bold justify-self-center'>· Trabalhos ·</h2>
                {works.map((work, index) => {
                    return (
                        <div key={work.title + index} className='p-4'>
                            <p><span className='font-bold'>{work.title}</span></p>
                            {work.media?.includes('youtube')
                                ? <Suspense fallback={<p>Carregando vídeo...</p>}>
                                    <iframe
                                        src={work.media}
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                </Suspense>
                                : <Image src={`/assets/img/${work.media}`} alt='Work image' height={300} width={500} />
                            }
                            {work.imageCredit
                                ? <span>Foto: {work.imageCredit}</span>
                                : ''
                            }
                            <StyledMarkdown markdown={work.content} />
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

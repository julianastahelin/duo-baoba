import Image from 'next/image'

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
            <Image src={profile.picture} height={400} width={700} alt='profile picture' />
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
                            <Image src={work.image as string} alt='Work image' height={300} width={500} />
                            <span>Foto: {work.imageCredit}</span>
                            <StyledMarkdown markdown={work.content} />
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { AnimatedFooter, AnimatedHeader, AnimatedH1, AnimatedParagraph, AnimatedSection, AnimatedDiv } from '@/components/animated-ui'
import { PersonalContact } from '@/components/personalContact'
import { StyledMarkdown } from '@/components/styledMarkdown'
import { WorkDetails } from '@/components/workDetails'
import { getPersonalPage } from '@/services/notion'
import { joinStringsFromArray, stringsToKebabCase } from '@/utils'


interface PageProps {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: PageProps) {
    const { profile } = await getPersonalPage(params.slug)
    if (profile) {
        const lowerCaseTags = profile.tags.map(tag => tag.toLowerCase())
        const profileTags = joinStringsFromArray(lowerCaseTags)
        const description = `${profile.name} é ${profileTags}. Atua em Florianópolis/SC e compõe o Duo Baobá.`
        return {
            title: `Portfólio - ${profile.name}`,
            description: description,
            alternates: {
                canonical: `/sobre/${params.slug}`
            },
            openGraph: {
                title: `Portfólio - ${profile.name} | Duo Baobá`,
                description: description,
                type: 'website',
                url: `https://duobaoba.vercel.app/sobre/${params.slug}`,
                siteName: 'Duo Baobá - Música instrumental brasileira',
                locale: 'pt_BR',
                images: [
                    {
                        url: `/assets/img/${profile.picture}`,
                        alt: `Foto de perfil de ${profile.name}`
                    },
                ],
            },
        }
    }
}

export default async function About({ params }: PageProps) {
    const { profile, academicEducation, additionalEducation, works, err } = await getPersonalPage(params.slug)

    if (err) redirect('/not-found')

    if (profile && academicEducation && additionalEducation && works)
        return (
            <>
                <div></div>
                <AnimatedHeader
                    style={{ '--image-url': `url(/assets/img/${profile.picture})` } as React.CSSProperties}
                    className='pt-24 md:pt-20 mb-20 w-full md:min-h-screen bg-primary md:bg-[image:var(--image-url)] md:bg-no-repeat md:bg-cover md:bg-right lg:bg-center flex flex-col justify-center md:justify-between items-center lg:items-start gap-10'
                >
                    <div></div>
                    <div className='flex flex-col gap-4 lg:gap-8 text-primary-foreground md:text-secondary-foreground text-shadow-sm md:text-shadow items-center p-3 text-center  lg:pl-32 xl:pl-48'>
                        <AnimatedH1 className='text-4xl tracking-[2px] md:text-6xl lg:text-[80px] font-bold md:tracking-[5px]'>{profile.name}</AnimatedH1>
                        <AnimatedParagraph className='text-base tracking-[1px] md:text-xl lg:text-3xl font-light md:tracking-[4px]'>· {profile.tags.join(' · ')} ·</AnimatedParagraph>
                    </div>
                    <Image src={`/assets/img/${profile.picture}`} className='w-full min-w-52 md:hidden' width={300} height={500} alt={`Profile picture of ${profile.name}`} />
                    <div className='h-16 w-full bg-tertiary opacity-80 hidden md:flex md:justify-self-end'></div>
                </AnimatedHeader>

                <main>
                    <AnimatedSection index={1} className='flex flex-col items-center justify-center py-12 gap-10 md:gap-16 text-primary-foreground'>
                        <h2 className='text-3xl md:text-4xl lg:text-6xl font-medium text-wrap justify-self-center tracking-[2px] md:tracking-[5px]'>· Formação ·</h2>
                        <ul className='flex flex-col sm:flex-row gap-5 md:gap-10 items-center w-3/4'>
                            {academicEducation.map((course, index) => {
                                return (
                                    <li key={course.title + index} className='flex flex-col gap-2 items-center text-center w-3/4 sm:w-full'>
                                        <p className='font-bold text-2xl md:text-3xl lg:text-4xl'>{course.title}</p>
                                        <div className='font-medium text-base md:text-lg lg:text-xl'>
                                            <p>{course.description}</p>
                                            <p>{course.period}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        {additionalEducation.length
                            ?
                            <div className='flex flex-col gap-10 justify-center items-center text-center text-primary-foreground w-4/5'>
                                {additionalEducation.map((item, index) => {
                                    return (
                                        <div key={item.title + index} className='flex flex-col gap-6 max-w-3xl'>
                                            <p className='font-bold text-2xl md:text-3xl lg:text-4xl text-wrap justify-self-center'>{item.title}</p>
                                            <StyledMarkdown markdown={item.content} />
                                        </div>
                                    )
                                })}
                            </div>
                            : ''
                        }
                    </AnimatedSection>
                    <AnimatedSection index={2} className='flex flex-col items-center justify-center'>
                        <h2 className='text-3xl md:text-4xl lg:text-6xl font-medium text-wrap justify-self-center tracking-[2px] md:tracking-[5px] text-primary-foreground py-6'>· Trabalhos ·</h2>
                        <div className='grid grid-cols-xs sm:grid-cols-sm min-[500px]:grid-cols-xs2 md:grid-cols-md xl:grid-cols-xl gap-2 sm:gap-4 p-3 xl:py-6 items-center justify-center bg-quaternary box-shadow-large w-full'>
                            {works.map((work, index) => {
                                return (
                                    <Link key={work.title + index}
                                        href={`/sobre/${params.slug}#${(index + 1)}-${work.title}`}
                                        style={{
                                            '--image-url': work.media.includes('youtube')
                                                ? `url(/assets/img/${stringsToKebabCase([params.slug, work.title])}.png)`
                                                : `url(/assets/img/${work.media})`
                                        } as React.CSSProperties}
                                        className='bg-[image:var(--image-url)] bg-cover bg-center aspect-square object-contain w-full flex flex-col justify-end py-2 sm:py-5 px-2 sm:px-6 box-shadow-large hover:scale-[1.02] hover:opacity-95 transition-all ease-in-out duration-400'>
                                        <p className='text-tertiary-foreground font-medium text-xs sm:text-xl md:text-3xl lg:text-4xl text-shadow-sm'>{work.title}</p>
                                    </Link>
                                )
                            })}
                        </div>
                        {works.map((work, index) => {
                            return (
                                <AnimatedDiv
                                    y={15}
                                    delay={0}
                                    key={work.title + index}
                                    className='w-full'
                                >
                                    <WorkDetails work={work} id={`${(index + 1)}-${work.title}`} />
                                </AnimatedDiv>
                            )
                        })}
                    </AnimatedSection>
                </main>

                <AnimatedFooter className='box-shadow-large'>
                    <PersonalContact profile={profile} />
                </AnimatedFooter>
            </>
        )
}

import Image from 'next/image'

import { AnimatedDiv, AnimatedFooter, AnimatedH1, AnimatedHeader, AnimatedParagraph, AnimatedSection } from '@/components/animated-ui'
import { StyledMarkdown } from '@/components/styledMarkdown'
import { Video } from '@/components/video'
import { SocialMedias } from '@/components/socialMedias'
import { getHomeSections, getSocialMedias } from '@/services/notion'


export default async function Home() {
  const homeSections = await getHomeSections()
  const socialMedias = await getSocialMedias()

  return (
    <>
      <AnimatedHeader className="flex flex-col gap-5 p-8 pt-28 md:p-0 md:items-center md:h-screen md:justify-center md:bg-[url('/assets/img/home-header-img.png')] md:bg-cover md:bg-center text-primary-foreground md:text-secondary-foreground text-shadow-sm md:text-shadow">
        <div className='tracking-[5px] md:z-10'>
          <AnimatedH1 className='flex flex-col gap-2 items-center'>
            <span className='text-3xl md:text-4xl lg:text-6xl font-light'>
              Duo
            </span>
            {' '}
            <span className='font-bold text-6xl md:text-7xl lg:text-9xl'>
              Baobá
            </span>
          </AnimatedH1>
          <AnimatedParagraph className='font-light text-base md:text-xl lg:text-3xl text-center'>· Flauta · Violão ·</AnimatedParagraph>
        </div>
        <AnimatedDiv delay={0.3} duration={0.7} scale={1.1}>
          <Image src='/assets/img/home-header-img.png' className='w-full min-w-52 pb-16 md:hidden' width={300} height={500} alt='Foto do Duo Baobá - Mayara e David' title='Foto do Duo Baobá - Mayara e David' />
          </AnimatedDiv>
      </AnimatedHeader>
      <AnimatedDiv className='bg-tertiary py-5 w-full' delay={1.2} />

      <main className='flex flex-col items-center justify-center py-16 md:py-32 gap-12 text-center text-primary-foreground'>
        {
          homeSections.map((section, index) => (
            <AnimatedSection
              index={index}
              className='flex flex-col gap-5 w-5/6 md:w-3/5 items-center'
              key={section.title + index}
            >
              <h2 className='text-2xl sm:text-5xl tracking-[4px] md:tracking-8px font-bold'>· {section.title} ·</h2>
              <StyledMarkdown markdown={section.content} className='text-sm sm:text-xl font-light' />
              {section.media
                ? section.media.includes('youtube')
                  ? <div className='w-full py-2 md:py-6'>
                    <Video src={`${section.media}?autoplay=1&mute=1`} />
                  </div>
                  : <Image src={`/assets/img/${section.media}`} alt={`${section.title}`} height={300} width={500} className='py-12' />
                : ''
              }
            </AnimatedSection>
          ))
        }
      </main>

      <AnimatedFooter className='flex flex-col items-center p-10 gap-7 text-primary-foreground'>
        <h3 className='text-center text-lg md:text-3xl tracking-[2px] md:tracking-[5px]'>Acompanhe nossas redes sociais!</h3>
        <SocialMedias socialMedias={socialMedias} />
      </AnimatedFooter>
    </>
  )
}

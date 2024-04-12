import Image from 'next/image'
import { Suspense } from 'react'

import { StyledMarkdown } from '@/components/styledMarkdown'
import { getHomePage } from '@/services/notion'
import { SocialMedias } from '@/components/socialMedias'


export default async function Home() {
  const { homeSections, socialMedias } = await getHomePage()

  return (
    <main className='pt-16'>

      <header className="flex flex-col gap-5 p-8 md:p-0 md:items-center md:h-screen md:justify-center md:bg-[url('/assets/img/home-header-img.png')] md:bg-cover md:bg-center text-primary-foreground md:text-secondary-foreground text-shadow-sm md:text-shadow">
        <div className='tracking-[5px] md:z-10'>
          <h1 className='flex flex-col gap-2 items-center'>
            <span className='text-3xl md:text-4xl lg:text-6xl font-light'>
              Duo
            </span>
            <span className='font-bold text-6xl md:text-7xl lg:text-9xl'>
              Baobá
            </span>
          </h1>
          <p className='font-light text-base md:text-xl lg:text-3xl text-center'>· Flauta · Violão ·</p>
        </div>
        <Image src='/assets/img/home-header-img.png' className='w-full min-w-52 md:hidden' width={300} height={500} alt='Picture of Mayara and David' />
      </header>
      <div className='bg-tertiary py-5 w-full'></div>

      <section className='flex flex-col items-center justify-center py-16 md:py-32 gap-12 text-center text-primary-foreground'>
        {
          homeSections.map((section, index) => {
            return (
              <div key={section.title + index} className='flex flex-col gap-5 w-5/6 md:w-3/5 items-center'>
                <h2 className='text-2xl sm:text-5xl tracking-[4px] md:tracking-8px font-bold'>· {section.title} ·</h2>
                <StyledMarkdown markdown={section.content} className='text-sm sm:text-xl font-light' />
                {section.media
                  ? section.media.includes('youtube')
                    ? <Suspense fallback={<p>Carregando vídeo...</p>}>
                      <iframe
                        src={`${section.media}?autoplay=1&mute=1`}
                        allowFullScreen
                        loading='lazy'
                        className='py-12 w-full aspect-square xl:aspect-video'
                      />
                    </Suspense>
                    : <Image src={`/assets/img/${section.media}`} alt='Work image' height={300} width={500} className='py-12' />
                  : ''
                }
              </div>
            )
          })
        }
      </section>

      <footer className='flex flex-col items-center p-10 gap-7 text-primary-foreground'>
        <p className='text-center text-lg md:text-3xl tracking-[2px] md:tracking-[5px]'>Acompanhe nossas redes sociais!</p>
        <SocialMedias socialMedias={socialMedias} />
      </footer>

    </main>
  )
}

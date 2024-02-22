import Image  from 'next/image'

import StyledMarkdown from '@/components/styledMarkdown'
import { getHomePage } from '@/services/notion'


export default async function Home() {
  const { homeSections, socialMedias } = await getHomePage()

  return (
    <main>
      <section className='flex justify-between items-end w-full h-screen'>
        <Image src='/assets/img/mayara-home.png' className='w-80' width={300} height={500} alt='Profile picture of Mayara' />
        <div className='flex flex-col gap-2 h-full justify-center'>
          <h1 className='flex flex-col gap-2 items-center'>
            <span>
              Duo
            </span>
            <span className='font-extrabold text-3xl'>
              Baobá
            </span>
          </h1>
          <p className='flex gap-2'>· Flauta · Violão ·</p>
        </div>
        <Image src='/assets/img/david-home.png' className='w-80' width={300} height={500} alt='Profile picture of David' />
      </section>
      <section className='flex flex-col items-center justify-center p-20 gap-6 text-center'>
        {
          homeSections.map((section, index) => {
            return (
              <div key={section.title + index}>
                <h2 className='text-2xl font-bold'>{section.title}</h2>
                <StyledMarkdown markdown={section.content} />
                {
                  section.image
                    ? <img src={section.image} alt='Image' className='w-80' />
                    : ''
                }
              </div>
            )
          })
        }
      </section>
      <footer className='flex flex-col items-center p-10'>
        <p className='text-bold text-lg'>Acompanhe nossas redes sociais!</p>
        <div className='flex gap-2 font-semibold'>
          {
            socialMedias.map((media, index) => {
              return (
                <a href={media.link} key={media.title + index}>{media.title}</a>
              )
            })
          }
        </div>
      </footer>
    </main>
  )
}

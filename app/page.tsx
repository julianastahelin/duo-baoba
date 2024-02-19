import StyledMarkdown from '@/components/styledMarkdown'
import { getHomePage } from '@/services/notion'


export default async function Home() {
  const { header, homeSections, socialMedias } = await getHomePage()

  return (
    <main>
      <section className='flex justify-between items-end w-full h-screen'>
        <img src={header.images.find(person => person.name === 'Mayara')?.image} className='w-80' />
        <div className='flex flex-col gap-2 h-full justify-center'>
          <h1 className='flex flex-col gap-2 items-center'>
            <span>
              {header.text.title.split(' ')[0]}
            </span>
            <span className='font-extrabold text-3xl'>
              {header.text.title.split(' ')[1]}
            </span>
          </h1>
          <p className='flex gap-2'>· {header.text.tags.map((tag, index) => <span key={tag + index}> {tag} ·</span>)}</p>
        </div>
        <img src={header.images.find(person => person.name === 'David')?.image} className='w-80' />
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

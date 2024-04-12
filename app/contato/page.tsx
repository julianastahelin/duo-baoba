import { getHomePage } from "@/services/notion"
import { SocialMedias } from "@/components/socialMedias"


export default async function ContactPage() {

    const { socialMedias } = await getHomePage()

    return (
        <main className='pt-16 flex flex-col-reverse sm:flex-row h-screen overflow-hidden'>
            <div
                style={{ backgroundImage: `url(/assets/img/duo-2.jpg)` }}
                className='h-[60vh] sm:h-[100vh] w-full sm:w-1/2 md:w-2/3 bg-cover bg-center md:bg-right relative'
            ></div>
            <div className='flex flex-col items-center justify-center grow text-primary-foreground'>
                <h2 className='text-4xl md:text-5xl tracking-[2px] md:tracking-8px font-bold py-5 md:py-10'>Contato</h2>
                <SocialMedias socialMedias={socialMedias} />
            </div>
        </main >
    )
}

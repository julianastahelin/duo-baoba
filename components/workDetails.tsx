import type { Work } from '@/types'
import { StyledMarkdown } from './styledMarkdown'
import { Video } from './video'


export function WorkDetails({
    work,
    id
}: {
    work: Work,
    id: string
}) {
    const { displayType } = work

    if (displayType === '1') return <WorkType1 work={work} id={id} />
    if (displayType === '2') return <WorkType2 work={work} id={id} />
    if (displayType === '3') return <WorkType3 work={work} id={id} />
    if (displayType === '4') return <WorkType4 work={work} id={id} />
    if (displayType === '5') return <WorkType5 work={work} id={id} />
    if (displayType === '6') return <WorkType6 work={work} id={id} />
    if (displayType === '7') return <WorkType7 work={work} id={id} />
    if (displayType === '8') return <WorkType8 work={work} id={id} />
    if (displayType === '9') return <WorkType9 work={work} id={id} />
    if (displayType === '10') return <WorkType10 work={work} id={id} />
    else return <WorkType1 work={work} id={id} />
}

interface WorkTypeProps {
    work: Work
    id: string
}

function WorkType1({ work, id }: WorkTypeProps) {
    return (
        <div className='min-h-fit w-full flex justify-end'>
            <div className='min-h-fit w-full lg:w-11/12 flex flex-col md:flex-row items-center md:justify-center p-4 md:p-0 md:gap-4' id={id}>
                <div className='flex flex-col gap-4 md:gap-9 w-full md:w-2/5 p-5 text-primary-foreground'>
                    <h3 className='text-4xl md:text-7xl font-medium text-wrap break-words'>{work.title}</h3>
                    <StyledMarkdown className='text-xs md:text-sm font-normal' markdown={work.content} />
                </div>
                {work.media?.includes('youtube')
                    ? <div className='w-full md:w-3/5'>
                        <Video src={work.media} />
                    </div>
                    : <div
                        style={{ backgroundImage: `url(/assets/img/${work.media})` }}
                        className='h-[60vh] md:h-[80vh] w-full md:w-3/5 bg-cover bg-center relative'
                    >
                        {
                            work.imageCredit
                                ? <p className='absolute bottom-4 md:bottom-6 right-6 md:right-10 font-medium text-xs md:text-sm text-tertiary-foreground text-shadow-sm'>Foto: {work.imageCredit}</p>
                                : ''
                        }
                    </div>
                }
            </div>
        </div>
    )
}

function WorkType2({ work, id }: WorkTypeProps) {
    return (
        <div className='min-h-fit w-full flex justify-start' id={id}>
            <div className='min-h-fit w-full lg:w-11/12 flex flex-col-reverse md:flex-row items-center justify-center md:justify-end p-4 md:p-0 md:gap-4 bg-inherit md:box-shadow-none'>
                {work.media?.includes('youtube')
                    ? <div className='w-full md:w-3/5'>
                        <Video src={work.media} />
                    </div>
                    : <div
                        style={{ backgroundImage: `url(/assets/img/${work.media})` }}
                        className='h-[60vh] md:h-[80vh] w-full md:w-3/5 bg-cover bg-center relative'
                    >
                        {
                            work.imageCredit
                                ? <p className='absolute bottom-4 md:bottom-6 right-6 md:right-10 font-medium text-sm text-tertiary-foreground text-shadow-sm'>Foto: {work.imageCredit}</p>
                                : ''
                        }
                    </div>
                }
                <div className='flex flex-col gap-4 md:gap-9 w-full md:w-2/5 p-5 text-primary-foreground'>
                    <h3 className='text-4xl md:text-7xl font-medium text-wrap break-words'>{work.title}</h3>
                    <StyledMarkdown className='text-xs md:text-sm font-normal' markdown={work.content} />
                </div>
            </div>
        </div>
    )
}

function WorkType3({ work, id }: WorkTypeProps) {
    return (
        <div
            id={id}
            style={{ backgroundImage: `url(/assets/img/${work.media})` }}
            className='h-[60vh] md:h-screen w-full bg-cover bg-center md:bg-left relative flex items-end pb-20 md:pb-0 md:items-center justify-end text-tertiary-foreground text-shadow break-words'
        >
            <div className='flex flex-col gap-9 w-2/3 md:w-1/2 max-w-2xl mr-10 xl:mr-14 p-5 bg-secondary rounded-lg'>
                <h3 className='text-2xl md:text-4xl lg:text-8xl font-medium'>{work.title}</h3>
                <StyledMarkdown markdown={work.content} className='text-sm md:text-lg lg:text-xl font-normal' />
            </div>
            {
                work.imageCredit
                    ? <p className='absolute bottom-8 right-12 font-medium text-xs md:text-sm'>Foto: {work.imageCredit}</p>
                    : ''
            }
        </div>
    )
}

function WorkType4({ work, id }: WorkTypeProps) {
    return (
        <div
            id={id}
            style={{ backgroundImage: `url(/assets/img/${work.media})` }}
            className='h-[60vh] md:h-screen w-full bg-cover bg-center relative'
        >
            <div className='h-full w-full bg-quinary flex items-end pb-4 justify-start text-tertiary-foreground text-shadow break-words'>
                <div className='flex flex-col sm:flex-row items-end gap-4 md:gap-9 w-2/3 md:w-full max-w-7xl ml-10 xl:ml-14 p-5'>
                    <h3 className='text-3xl md:text-4xl lg:text-7xl font-bold md:font-medium'>{work.title}</h3>
                    <StyledMarkdown markdown={work.content} className='text-sm md:text-lg lg:text-xl font-normal' />
                </div>
                {
                    work.imageCredit
                        ? <p className='absolute top-8 left-12 font-medium text-xs md:text-sm'>Foto: {work.imageCredit}</p>
                        : ''
                }
            </div>
        </div>
    )
}

function WorkType5({ work, id }: WorkTypeProps) {
    return (
        <div className='w-full min-h-[60vh] md:min-h-fit bg-quaternary flex items-center justify-center text-primary-foreground py-10 md:py-16 lg:py-24 shadow-inside box-shadow-large' id={id}>
            <div className='flex flex-col w-full md:w-5/6 max-w-full items-center justify-center gap-9 lg:gap-14'>
                <h3 className='text-3xl md:text-5xl lg:text-7xl font-bold md:font-medium text-wrap break-words px-3'>{work.title}</h3>
                <div className='flex flex-col md:flex-row items-center gap-5'>
                    <StyledMarkdown className='text-xs sm:text-sm md:text-base lg:text-lg font-normal w-4/5 md:w-2/5 xl:w-3/5' markdown={work.content} />
                    {work.media?.includes('youtube')
                        ? <div className='w-full'>
                            <Video src={work.media} />
                        </div>
                        : <div
                            style={{ backgroundImage: `url(/assets/img/${work.media})` }}
                            className='h-[30vh] md:h-[60vh] w-full md:w-3/5 bg-cover bg-center relative'
                        >
                            {
                                work.imageCredit
                                    ? <p className='absolute bottom-4 md:bottom-6 right-6 md:right-10 font-medium text-sm text-tertiary-foreground text-shadow-sm'>Foto: {work.imageCredit}</p>
                                    : ''
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

function WorkType6({ work, id }: WorkTypeProps) {
    return (
        <div className='w-full min-h-[60vh] md:min-h-fit bg-tertiary flex items-center justify-center text-primary-foreground py-10 md:py-16 lg:py-24 box-shadow-large md:shadow-inside' id={id}>
            <div className='flex flex-col w-full md:w-4/5 max-w-7xl items-center justify-center gap-9'>
                <h3 className='text-3xl md:text-5xl lg:text-7xl font-bold md:font-medium text-center text-wrap break-words px-3'>{work.title}</h3>
                <div className='flex flex-col md:flex-row items-center justify-center gap-5 md:gap-7'>
                    {work.media?.includes('youtube')
                        ? <div className='w-full sm:w-3/4 lg:w-4/5'>
                            <Video src={work.media} />
                        </div>
                        : <div
                            style={{ backgroundImage: `url(/assets/img/${work.media})` }}
                            className='h-[40vh] md:h-[60vh] w-full sm:w-3/4 lg:w-4/5 bg-cover bg-center relative'
                        >
                            {
                                work.imageCredit
                                    ? <p className='absolute bottom-4 md:bottom-6 right-6 md:right-10 font-medium text-sm text-tertiary-foreground text-shadow-sm'>Foto: {work.imageCredit}</p>
                                    : ''
                            }
                        </div>
                    }
                    <StyledMarkdown className='text-xs sm:text-sm md:text-base lg:text-lg font-normal w-4/5 md:w-2/5 xl:w-3/5' markdown={work.content} />
                </div>
            </div>
        </div>
    )
}

function WorkType7({ work, id }: WorkTypeProps) {
    return (
        <div className='w-full min-h-[60vh] md:min-h-fit flex items-center justify-center text-primary-foreground py-10 md:py-16 lg:py-24' id={id}>
            <div className='flex flex-col w-full md:w-4/5 max-w-7xl items-center justify-center gap-9'>
                <h3 className='text-3xl md:text-5xl lg:text-7xl font-bold md:font-medium text-wrap break-words px-3'>{work.title}</h3>
                <div className='flex flex-col items-center gap-5 md:gap-7'>
                    <StyledMarkdown className='text-xs sm:text-sm font-normal w-3/4 text-center' markdown={work.content} />
                    {work.media?.includes('youtube')
                        ? <div className='w-full sm:w-3/4 md:w-4/5'>
                            <Video src={work.media} />
                        </div>
                        : <div
                            style={{ backgroundImage: `url(/assets/img/${work.media})` }}
                            className='h-[30vh] md:h-[60vh] w-full md:w-3/5 bg-cover bg-center relative'
                        >
                            {
                                work.imageCredit
                                    ? <p className='absolute bottom-4 md:bottom-6 right-6 md:right-10 font-medium text-sm text-tertiary-foreground text-shadow-sm'>Foto: {work.imageCredit}</p>
                                    : ''
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

function WorkType8({ work, id }: WorkTypeProps) {
    return (
        <div className='w-full py-6 md:py-12'>
            <Video src={work.media} id={id} />
        </div>
    )
}

function WorkType9({ work, id }: WorkTypeProps) {
    return (
        <div className='w-full min-h-[60vh] md:min-h-screen flex items-center justify-center text-primary-foreground pt-6 md:pt-12' id={id}>
            <div className='flex flex-col w-full max-w-7xl items-center justify-center gap-4 md:gap-9'>
                <h3 className='text-4xl md:text-5xl lg:text-7xl font-bold md:font-medium text-wrap break-words px-3'>{work.title}</h3>
                <div className='flex flex-col items-center gap-5 md:gap-7'>
                    <StyledMarkdown className='text-xs sm:text-sm font-normal w-3/4 text-center' markdown={work.content} />
                    {work.media?.includes('youtube')
                        ? <div className='w-full md:w-4/5'>
                            <Video src={work.media} />
                        </div>
                        : <div
                            style={{ backgroundImage: `url(/assets/img/${work.media})` }}
                            className='h-[40vh] md:h-[60vh] w-full bg-cover bg-center relative'
                        >
                            {
                                work.imageCredit
                                    ? <p className='absolute bottom-4 md:bottom-6 right-6 md:right-10 font-medium text-sm text-tertiary-foreground text-shadow-sm'>Foto: {work.imageCredit}</p>
                                    : ''
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

function WorkType10({ work, id }: WorkTypeProps) {
    return (
        <div
            id={id}
            style={{ backgroundImage: `url(/assets/img/${work.media})` }}
            className='min-h-fit md:min-h-screen w-full bg-cover bg-center md:bg-left relative flex items-end py-6 md:py-20 md:items-center justify-start text-tertiary-foreground text-shadow break-words'
        >
            <div className='flex flex-col gap-4 md:gap-9 w-2/3 max-w-xl ml-10 xl:ml-14 p-5 bg-secondary rounded-lg'>
                <h3 className='text-3xl md:text-6xl lg:text-8xl font-medium'>{work.title}</h3>
                <StyledMarkdown markdown={work.content} className='text-xs sm:text-sm lg:text-xl font-normal' />
            </div>
            {
                work.imageCredit
                    ? <p className='absolute bottom-8 right-12 font-medium text-xs md:text-sm'>Foto: {work.imageCredit}</p>
                    : ''
            }
        </div>
    )
}

import Link from "next/link"


export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center gap-10">
            <p className=" text-primary-foreground text-3xl">Página não encontrada</p>
            <Link href='/' className="p-5 rounded-md text-lg font-normal bg-primary-foreground text-tertiary-foreground hover:scale-105 hover:transition-all hover:duration-200 hover:opacity-95">Voltar para a página inicial</Link>
        </div>
    )
}
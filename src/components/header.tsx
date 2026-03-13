import Image from "next/image";
import Link from "next/link";
import LogoImg from '@/public/logo.svg'
import SearchIcon from '@/public/icon-search.svg'
import UserIcon from '@/public/icon-user.svg'
import { GridContainer } from "./grid";

const arrayMenu = [
    'Início',
    'Benefícios',
    'Para quem é o curso?',
    'Preços promocionais',
    'Sobre nós'
]




export default function Header(){

    const activeStyled = 'bg-green-actived opacity-100 rounded-full'

    return(
        <header className="relative w-full h-24 bg-green-primary flex items-center">

            <GridContainer className="flex items-center justify-between">

                <Image
                src={LogoImg}
                alt="Logo Instasany"
                />

                <div className="flex items-center gap-20">
                    <nav className="flex gap-2">
                        {
                            arrayMenu.map((item, index) => (
                                <Link key={index} href="#" className={`px-3 py-1 text-white opacity-40 hover:opacity-100 transition-all ${index == 0 ? activeStyled: ''}`}>{item}</Link>
                            ))
                        }
                        
                    </nav>

                    <div className="flex items-center gap-6">
                        <button>
                            <Image
                            src={SearchIcon} 
                            alt="Search Icon"
                            />
                        </button>
                        <button className="flex items-center gap-2">
                            <Image
                            src={UserIcon} 
                            alt="User Icon"
                            />
                            <span className="text-white font-medium">Fazer login</span>
                        </button>
                    </div>

                </div>     

            </GridContainer>

        </header>
    )
}
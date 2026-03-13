'use client'

import Image from "next/image";
import { GridContainer } from "./grid";
import IconFile from '@/public/icon-file.svg';
import IconHand from '@/public/icon-hand.svg'
import IconHand2 from '@/public/icon-hand-02.svg'
import Mockup from '@/public/mockup.svg'
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SectionHero(){

    const textHeroRef = useRef(null)
    const mockupLeftRef = useRef(null)
    const mockupRightRef = useRef(null)

    useEffect(() => {
        const textHero = textHeroRef.current
        const mLeft = mockupLeftRef.current
        const mRight = mockupRightRef.current

        gsap.fromTo(textHero, {
            opacity: 0,
            y: 20
        },{
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out'
        })

        gsap.fromTo(mLeft, {
            rotate: 0
        },{
            rotate: -10,
            duration: 1
        })

        gsap.fromTo(mRight, {
            rotate: 0
        },{
            rotate: 10,
            duration: 1
        })
    }, [])

    return(
        <section className="relative w-full bg-green-primary h-hero border-t border-t-green-border pt-16 overflow-hidden bg-hero bg-no-repeat bg-top">
            <GridContainer className="flex flex-col items-center">

                <div className="w-full max-w-text-hero text-center opacity-0" ref={textHeroRef}>
                    <h3 className="text-xl font-medium  text-green-actived mb-4">Novo curso focado em instagram</h3>
                    <h1 className="text-white text-7xl/normal font-semibold mb-2">Destrave as suas habilidades</h1>
                    <div className="flex items-center justify-center gap-10">
                        <button className="flex items-center gap-2">
                            <Image
                            src={IconFile}
                            alt="Icon File"
                            />
                            <span className="text-white font-medium">Assinar lista de espera</span>
                        </button>
                        <button className="py-4 px-5 bg-green-btn rounded-full text-green-primary font-bold">
                            Começar agora
                        </button>
                    </div>
                </div>

                <div className="relative w-full max-w-area-icons mt-4 h-28">
                    <Image
                    src={IconHand}
                    alt="Icon Hand"
                    className="absolute left-0 bottom-0"
                    />

                    <Image
                    src={IconHand2}
                    alt="Icon Hand 2"
                    className="absolute top-0 right-0"
                    />
                </div>

                <div className=" absolute w-full max-w-mockups flex justify-between -bottom-44">   
                    <Image
                    src={Mockup}
                    alt="Icon Mockup"
                    className="relative top-[18px] left-[53px]"
                     ref={mockupLeftRef}
                    />
                     <Image
                    src={Mockup}
                    alt="Icon Mockup"
                    className="relative top-[18px] right-[53px]"
                     ref={mockupRightRef}
                    />
                </div>

            </GridContainer>
        </section>
    )
}
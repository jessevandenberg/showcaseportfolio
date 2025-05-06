"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export default function Home() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Animaties
  const firstTextX = useTransform(scrollYProgress, [0, 0.2], [0, -500])
  const firstTextOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const imageX = useTransform(scrollYProgress, [0, 0.3], [0, -1000])
  const secondTextX = useTransform(scrollYProgress, [0.2, 0.5], [300, 0])
  const secondTextOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])
  const animationContainerOpacity = useTransform(scrollYProgress, [0.6, 0.7], [1, 0])

  return (
    <main className="min-h-screen bg-[#e8e6e1] text-[#333333] font-sans" ref={containerRef}>
      <div className="h-[300vh]">
        {/* Introductie + Projecten Overgang */}
        <motion.div
          className="fixed top-0 left-0 w-full h-screen flex items-center justify-center"
          style={{ opacity: animationContainerOpacity }}
        >
          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col md:flex-row md:items-center w-full">
              {/* Introductie */}
              <motion.div
                className="md:w-1/2"
                style={{
                  x: firstTextX,
                  opacity: firstTextOpacity,
                }}
              >
                <h2 className="text-6xl font-normal">Introductie</h2>
                <p className="text-xl mt-4 leading-tight">
                  Welkom bij mijn projectportfolio. Op deze pagina geef ik een overzicht van de projecten waar ik aan
                  heb gewerkt. Elk project toont mijn vaardigheden, creativiteit en leerproces binnen mijn vakgebied.
                  Van concept tot uitvoering – mijn aanpak staat centraal. Ik streef naar kwaliteit, innovatie en
                  samenwerking.
                </p>
              </motion.div>

              {/* Afbeelding */}
              <motion.div className="flex justify-end w-full md:w-1/2" style={{ x: imageX }}>
                <Image src="/portfoliofoto.png" alt="Project afbeelding" width={500} height={400} className="object-cover" />
              </motion.div>

              {/* Projecten Intro */}
              <motion.div
                className="absolute right-0 md:w-1/2 px-4"
                style={{
                  x: secondTextX,
                  opacity: secondTextOpacity,
                }}
              >
                <h2 className="text-6xl font-normal">Projecten</h2>
                <p className="text-xl mt-4 leading-tight">
                  Hieronder zie je een selectie van mijn recente projecten. Elk project laat zien hoe ik technische
                  uitdagingen aanpak en creatieve oplossingen ontwerp. Mijn doel: functionele én visueel aantrekkelijke
                  resultaten.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Projecten */}
      <section className="bg-[#e8e6e1] py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-[4/3] bg-[#e2e2e2] mb-6">
                <Image
                  src="/Cover.png"
                  alt="Brand a Band project"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-medium mb-2">Brand a Band</h3>
              <p className="text-center mb-3">
                Het designen van een band
                <br />
                met alle designvormen.
              </p>
              <Link href="#" className="text-green-500 font-bold underline">
                zie meer
              </Link>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-[4/3] bg-[#e2e2e2] mb-6">
                <Image
                  src="/starwars.png"
                  alt="Starwars API project"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-medium mb-2">Starwars API</h3>
              <p className="text-center mb-3">
                Een characterzoekmachine
                <br />
                gebouwd met een externe API.
              </p>
              <Link href="#" className="text-green-500 font-bold underline">
                zie meer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

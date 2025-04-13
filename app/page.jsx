"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export default function Home() {
  // Reference for the main container to track scroll progress
  const containerRef = useRef(null)

  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Transform values based on scroll progress
  const firstTextX = useTransform(scrollYProgress, [0, 0.3], [0, -500]) // Move first text left
  const firstTextOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]) // Fade out first text

  // Move image off to the left faster (adjusted timing)
  const imageX = useTransform(scrollYProgress, [0, 0.4], [0, -1000])

  // Start second text closer (reduced from 500 to 300) and bring it in sooner
  const secondTextX = useTransform(scrollYProgress, [0.25, 0.5], [300, 0])
  const secondTextOpacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]) // Fade in new text

  // Delay the fade-out to give more time to read (from 0.65 to 0.7)
  const animationContainerOpacity = useTransform(scrollYProgress, [0.65, 0.7], [1, 0])

  return (
    <main className="min-h-screen bg-[#e8e6e1] text-[#333333] font-sans" ref={containerRef}>
      {/* Increased spacer height to allow more scrolling distance */}
      <div className="h-[300vh]">
        {/* Fixed container for animations - now with opacity animation */}
        <motion.div
          className="fixed top-0 left-0 w-full h-screen flex items-center justify-center"
          style={{ opacity: animationContainerOpacity }}
        >
          <div className="container mx-auto px-4 md:px-0 relative">
            <div className="flex flex-col md:flex-row md:items-center w-full">
              {/* First text - slides left and fades out */}
              <motion.div
                className="md:w-1/2"
                style={{
                  x: firstTextX,
                  opacity: firstTextOpacity,
                }}
              >
                <h2 className="text-6xl font-normal">introductie</h2>
                <div className="text-xl leading-tight mt-4">
                  <p>
                    Welkom bij mijn projectportfolio. Op deze pagina geef ik een overzicht van de diverse projecten waar
                    ik aan heb gewerkt. Elk project weerspiegelt mijn vaardigheden, creativiteit en leerproces binnen
                    mijn vakgebied. Van conceptontwikkeling tot uitvoering – deze selectie toont mijn aanpak. Ik streef
                    naar kwaliteit, innovatie en effectieve samenwerking.
                  </p>
                </div>
              </motion.div>

              {/* Image - moves completely off to the left */}
              <motion.div className="flex justify-end w-full md:w-1/2" style={{ x: imageX }}>
                <div>
                  <Image src="/homepagina.png" alt="Project image" width={500} height={400} className="object-cover" />
                </div>
              </motion.div>

              {/* Second text - slides in from right */}
              <motion.div
                className="absolute top-50 right-0 md:w-1/2 px-4"
                style={{
                  x: secondTextX,
                  opacity: secondTextOpacity,
                }}
              >
                <h2 className="text-6xl font-normal">projecten</h2>
                <div className="text-xl leading-tight mt-4">
                  <p>
                    Hier zie je een selectie van mijn recente projecten. Elk project laat zien hoe ik complexe
                    uitdagingen aanpak en creatieve oplossingen ontwikkel. Door mijn technische vaardigheden te
                    combineren met een scherp oog voor detail, creëer ik resultaten die niet alleen functioneel zijn
                    maar ook visueel aantrekkelijk.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Projects section - appears after scrolling */}
      <section className="bg-[#e8e6e1] py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-[4/3] bg-[#e2e2e2] mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Brand a Band project"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-medium mb-2">Brand a Band</h3>
              <p className="text-center mb-3">
                het designen van een band met
                <br />
                alle design vormen
              </p>
              <Link href="#" className="text-green-500 hover:underline">
                zier meer
              </Link>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-[4/3] bg-[#e2e2e2] mb-6">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Starwars API project"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-medium mb-2">starwars API</h3>
              <p className="text-center mb-3">
                het maken van een
                <br />
                characterzoekmachine met een API
              </p>
              <Link href="#" className="text-green-500 hover:underline">
                zier meer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

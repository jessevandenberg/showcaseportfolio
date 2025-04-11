"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

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

  const imageX = useTransform(scrollYProgress, [0, 0.5], [0, -400]) // Move image from right to left

  const secondTextX = useTransform(scrollYProgress, [0.3, 0.6], [500, 0]) // Bring in new text from right
  const secondTextOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]) // Fade in new text

  return (
    <main className="min-h-screen bg-[#e8e6e1] text-[#333333] font-sans overflow-hidden" ref={containerRef}>
      {/* Spacer to allow scrolling */}
      <div className="h-[200vh]">
        {/* Fixed container for animations */}
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center">
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

              {/* Image - moves from right to left */}
              <motion.div className="flex justify-end w-full md:w-1/2" style={{ x: imageX }}>
                <div>
                  <Image
                    src="/homepagina.png?height=400&width=400"
                    alt="Project image"
                    width={500}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Second text - slides in from right */}
              <motion.div
                className="absolute top-0 right-0 md:w-1/2 px-4"
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
        </div>
      </div>
    </main>
  )
}

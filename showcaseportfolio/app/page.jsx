import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e8e6e1] text-[#333333] font-sans">
      {/* Header */}
      <header className="container mx-auto pt-8 pb-16 mt-[10px]">
        <div className="grid grid-cols-3 items-center">
          {/* Left navigation */}
          <nav className="flex space-x-8">
            <Link href="/" className="text-base lowercase hover:underline">
              home
            </Link>
            <Link href="/gallery" className="text-base lowercase hover:underline">
              gallery
            </Link>
            <Link href="/about-me" className="text-base lowercase hover:underline">
              about me
            </Link>
          </nav>

          {/* Center - Name */}
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Jesse v/d Berg</h1>
          </div>

          {/* Right - Social icons */}
          <div className="flex justify-end space-x-4">
            <Link href="#" className="text-[#333333] hover:opacity-70">
              <Youtube className="h-6 w-6" strokeWidth={1.5} />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="#" className="text-[#333333] hover:opacity-70">
              <Twitter className="h-6 w-6" strokeWidth={1.5} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-[#333333] hover:opacity-70">
              <Instagram className="h-6 w-6" strokeWidth={1.5} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-[#333333] hover:opacity-70">
              <Linkedin className="h-6 w-6" strokeWidth={1.5} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        {/* Lijn onder de header */}
        <div className="mt-6 h-[2px] bg-[#1D231C] opacity-80 w-[90%] mx-auto"></div>
      </header>

      {/* Extra space to move content down */}
      <div className="h-12"></div>

      {/* Main content - Text and Image in a single line */}
      <section className="container mx-auto px-4 md:px-0 min-h-[70vh] flex items-start justify-center mt-[40px]">
        <div className="flex flex-col md:flex-row md:items-start gap-60">
          {/* Text */}
          <div className="md:w-1/2 max-w-lg">
            <h2 className="text-3xl mb-6 font-normal">introductie</h2>
            <p className="text-xl leading-relaxed">
            Welkom bij mijn projectportfolio. Op deze pagina geef <br /> ik een overzicht van de diverse projecten waar ik de <br /> afgelopen tijd met veel toewijding aan heb gewerkt. Elk <br /> project weerspiegelt mijn vaardigheden, creativiteit en <br /> leerproces binnen mijn vakgebied. Van <br /> conceptontwikkeling tot uitvoering – deze selectie laat <br /> zien hoe ik uitdagingen aanpak, samenwerk met <br /> anderen en streef naar kwaliteit en innovatie.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center mt-[-20px]">
            <div className="relative w-full max-w-sm aspect-square">
              <Image
                src="/homepage.png?height=400&width=400"
                alt="Project image"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

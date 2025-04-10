import Link from "next/link"
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export default function Header() {
  return (
    <main className="bg-[#e8e6e1] overflow-hidden">
      {/* Header met fixed position */}
      <header className="container mx-auto pt-8 pb-16 bg-[#e8e6e1] fixed top-0 left-20 w-full z-10">
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
        <div className="mt-6 h-[2px] bg-[#1D231C] opacity-80 w-[100%] mx-auto"></div>
      </header>

      {/* Voeg padding toe aan de body om te voorkomen dat de header de inhoud bedekt */}
      <div className="pt-[120px]"> {/* Verhoog de waarde van pt om de inhoud onder de header zichtbaar te maken */}
        {/* Jouw andere inhoud komt hier */}
      </div>
    </main>
  );
}

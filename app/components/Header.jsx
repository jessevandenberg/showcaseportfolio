import Link from "next/link"
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full bg-[#e8e6e1] py-4 px-6 border-b border-[#1D231C]/20">
      <div className="container mx-auto grid grid-cols-3 items-center">
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
    </header>
  )
}

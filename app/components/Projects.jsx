import Link from "next/link"
import Image from "next/image"

// Component voor een individuele projectkaart (zonder types)
function ProjectCard(props) {
  const { title, description, imageUrl, link } = props

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>

      <h3 className="text-xl font-medium text-center text-[#333333] mb-2">{title}</h3>
      <p className="text-sm text-center text-[#333333] mb-3">{description}</p>
      <Link href={link} className="text-sm text-[#2e7d32] hover:underline">
        zier meer
      </Link>
    </div>
  )
}

// Hoofdcomponent met projectenlijst (ook zonder expliciete types)
export default function Projects() {
  const projects = [
    {
      title: "Brand a Band",
      description: "het designen van een band met alle design vormen",
      imageUrl: "/placeholder.svg?height=300&width=400&text=Brand+a+Band",
      link: "/projects/brand-a-band",
    },
    {
      title: "Starwars API",
      description: "het maken van een characterzoekmachine met een API",
      imageUrl: "/placeholder.svg?height=300&width=400&text=Starwars+API",
      link: "/projects/starwars-api",
    },
  ]

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>
    </section>
  )
}

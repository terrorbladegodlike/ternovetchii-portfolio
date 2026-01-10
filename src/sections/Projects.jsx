import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Monnica",
    description:
      "Developed a premium eCommerce WordPress theme designed specifically for sale on ThemeForest. Built with full WooCommerce integration, the template supports a wide range of online store formats, from fashion and accessories to electronics and lifestyle brands",
    image: "/projects/project-monnica.jpg",
    tags: ["Wordpress", "WooCommerce", "MySQL"],
    link: "https://monnica.fivestars-sites.com/",
    github: "#",
  },
  {
    title: "Barbara Collections",
    description:
      "Barbara Collection is a women's clothing brand offering a wide range of wardrobe items from swimwear to outerwear. This brand asked us to create a trending online store in the style of",
    image: "/projects/project-barbara.jpg",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    link: "https://barbaracollection.com/ru",
    github: "#",
  },
  {
    title: "Racefinder",
    description:
      "RaceFinder is an online platform designed to search, track, and participate in sports events: races, bike races, swimming, triathlons, and duathlons. The project is aimed at amateur athletes, professionals and organizers, providing an intuitive interface with advanced filtering capabilities and multilingual support.",
    image: "/projects/project-one.png",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    link: "https://www.racefinder.pt/",
    github: "#",
  },
  {
    title: "Academia Wine",
    description:
      "The website of the new wine brand, Purcari group of companies, in which we focused on stylish design and a visual demonstration of the line of collectible wines. Convenient navigation allows you to quickly and easily find the necessary information about wine and its properties, as well as about the manufacturer and its history. In general, the site emphasizes the bottle design, it turned out to be concise and user-friendly. The functionality is implemented in html to ensure fast page loading.",
    image: "/projects/project-two.jpg",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "https://academia.wine/",
    github: "#",
  },
  {
    title: "Alex Cernoutan",
    description:
      "Customized and optimized a purchased WordPress theme to create a personal portfolio website for the client, Alex Cernoutan. Focused on significant performance improvements by optimizing the template’s codebase, media assets, and loading speeds. Enhanced the website’s functionality through advanced use of WordPress editors and custom code modifications, ensuring seamless content management and flexibility for future updates.",
    image: "/projects/project-three.jpg",
    tags: ["Wordpress", "WooCommerce", "MySQL", "Redis"],
    link: "https://alexcernoutan.com/",
    github: "#",
  },
  {
    title: "Isacenco Million Club",
    description:
      "Redesigned and fully redeveloped an existing WordPress website to meet the client’s specific requirements for the Million Business Forum. Performed a complete code refactoring to improve site performance, maintainability, and scalability. Customized the design and functionality to align with the client’s vision, including layout adjustments, content restructuring, tailored features to enhance user engagement, and full multilingual implementation to support additional languages.",
    image: "/projects/project-four.jpg",
    tags: ["Wordpress", "WooCommerce", "MySQL", "Redis"],
    link: "https://isacenco.milionclub.md/ru/",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-10 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    target="_blank"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    >
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </a>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

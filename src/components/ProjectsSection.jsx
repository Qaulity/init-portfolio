import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Hospital Management System",
        description: "A Python TKinter application for managing patients, doctors, appointments, payments, and departments. Features real-time billing, departmental dashboards, and optimized database operations using stored procedures, views, triggers, and indexes.",
        image: "/projects/hosppysys.png",
        tags: ["Python 3.11", "MySQL 8", "PHP MyAdmin", "Tkinter", "Docker & Docker Compose"],
        demoURL: "https://github.com/Qaulity/Hospital-Management-System",
        githubURL: "https://github.com/Qaulity",
    },
    {
        id: 1,
        title: "Movies Api",
        description: "Full stack web application to access api information, leave reviews, authenticate account creation/login as well as api usage. Also available from terminal. Features realtime database updates, realtime site updates, dashboard and account info.",
        image: "/projects/movieimg.png",
        tags: ["Java", "HTTP Model/Methods", "Networking","MongoDB Cloud/Atlas", "JWT Authentication", "Springboot", "ReactJS", "CSS", "Ngrok", "Axios"],
        demoURL: "#",
        githubURL: "https://github.com/Qaulity",
    },
    {
        id: 1,
        title: "p title",
        description: "description",
        image: "path to image /projects/imgname",
        tags: ["put", "skills", "relevant to project"],
        demoURL: "#",
        githubURL: "https://github.com/Qaulity",
    },
    // copy and paste for other projects
]

export const ProjectsSection = () => {

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="containter mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured<span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Below are some of my recent projects. Each project uses unique
                    technologies that are highly relevant in the current industry. 
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                          key={key} 
                          className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                  src={project.image} 
                                  alt={project.title} 
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center"> 
                                    <div className="flex space-x-3">
                                        <a 
                                        href={project.demoURL} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        > 
                                            <ExternalLink size={20}/>
                                        </a>

                                        <a 
                                        href={project.githubURL} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                      className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                      target="_blank"
                      href="https://github.com/Qaulity">
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}
import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Hokie Exchange",
        description: "!!Backend currently down until I'm able to get back to work station to deal with free AWS tier issues!! HokieExchange is a full stack marketplace platform exclusively for Virginia Tech students, built with React(Typescript), Python FastAPI, and SQLite for local development (PostgreSQL in production) using a three-layered architecture for separation of concerns, with AWS S3 for scalable image storage. The platform implements VT-verified authentication with JWT tokens, role-based access control, and end-to-end security to ensure safe peer-to-peer transactions within the university community. Key features include real-time messaging between buyers and sellers, advanced listing search and filtering, and external API integrations for image optimization and geolocation services. Development followed Agile methodology with four two-week sprints and an MVP-first approach, with Key Results (KRs) completed by defined end dates to ensure steady progress toward launch. The application is deployed to production using AWS Elastic Beanstalk with RDS (PostgreSQL) for managed database services and S3 for asset storage, ensuring reliability and scalability for the Virginia Tech student community. Dual deployed to railway and AWS.",
        image: "/projects/hokieexchange.png",
        tags: ["React", "Python", "FastAPI", "SQLite", "SQLAlchemy", "PostgreSQL", "AWS S3", "AWS Elastic Beanstalk", "AWS RDS", "JWT Authentication", "REST API", "Agile/Scrum", "Git", "HTML/CSS", "JavaScript", "HTTPS", "Load Balancing", "Web Sockets", "Async Functions"],
        demoURL: "https://hokiefrontend.vercel.app/login",
        githubURL: "https://github.com/Qaulity",
        githubURLFrontend: "https://github.com/Qaulity/hokiefrontend",
        githubURLBackend: "https://github.com/Qaulity/AWSHokieExchange",
    },
    {
        id: 2,
        title: "Sentiment Anaylzer",
        description: "A Python-based interactive dashboard for comprehensive sentiment analysis using dual-model architecture with VADER (rule-based) and BERT (transformer-based) models to provide comparative analysis of text sentiment. Series of data tools used like pandas, numpy, plotly, etc. Summaries of findings generatable along with comparison of models.",
        image: "/projects/sentimentanalyzer.png",
        tags: ["Python", "VADER", "BERT", "Transformers", "Pandas", "NumPy", "Plotly", "NLP", "Sentiment Analysis", "Data Visualization", "Machine Learning", "StreamLit", "API's", "Rate Limiting"],
        demoURL: "https://github.com/Qaulity/sentiment_analyzer",
        githubURL: "https://github.com/Qaulity/sentiment_analyzer",
    },
    {
        id: 3,
        title: "Hospital Management System",
        description: "A Python TKinter application for managing patients, doctors, appointments, payments, and departments. Features real-time billing, departmental dashboards, and optimized database operations using stored procedures, views, triggers, and indexes.",
        image: "/projects/hosppysys.png",
        tags: ["Python 3.11", "MySQL 8", "PHP MyAdmin", "Tkinter", "Docker & Docker Compose"],
        demoURL: "https://github.com/Qaulity/Hospital-Management-System",
        githubURL: "https://github.com/Qaulity",
    },
    {
        id: 4,
        title: "Movies Api",
        description: "Full stack web application to access api information, leave reviews, authenticate account creation/login as well as api usage. Also available from terminal. Features realtime database updates, realtime site updates, dashboard and account info.",
        image: "/projects/movieimg.png",
        tags: ["Java", "HTTP Model/Methods", "Networking","MongoDB Cloud/Atlas", "JWT Authentication", "Springboot", "ReactJS", "CSS", "Ngrok", "Axios"],
        demoURL: "#",
        githubURL: "https://github.com/Qaulity",
    },
    {
        id: 5,
        title: "Financial Markets Analsys",
        description: "A full-stack financial analytics dashboard that aggregates news from multiple sources (NewsAPI, RSS feeds), analyzes them using ML/NLP (FinBERT sentiment analysis, spaCy NER for ticker extraction, BERTopic for topic modeling), and generates AI-powered market insights via Claude.",
        image: "/projects/fin.png",
        tags: ["Flask API", "Redis 7 Alpine", "PyTorch/Transformers", "yfinance", "Docker", "BeautifulSoup4 + lxml", "GUNICORN", "React", "TypeScript", "TailwindCSS", "Recharts", "FinBERT (financial sentiment)", "spaCy (entity extraction)", "BERTopic (topics)", "Claude (market summaries)"],
        demoURL: "https://github.com/Qaulity/AIFINANALYSIS",
        githubURL: "https://github.com/Qaulity",
    },
    
]

export const ProjectsSection = () => {

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="containter mx-auto max-w-7xl">
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
                          className="group bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/10 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(139,92,246,0.15)] hover:border-primary/30"
                        >
                            {/* Screenshot */}
                            <div className="h-56 overflow-hidden border-b border-primary/10">
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8 h-[450px] flex flex-col">
                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-h-[120px] overflow-y-auto pr-2 flex-1">
                                    {project.description}
                                </p>

                                {/* Technology Tags */}
                                <div className="flex flex-wrap gap-2 mb-6 max-h-[90px] overflow-y-auto pr-2">
                                    {project.tags.map((tag, index) => (
                                        <span
                                          key={index}
                                          className="px-3 py-1 text-xs font-medium border border-primary/30 rounded-full bg-primary/10 text-primary-foreground hover:bg-primary/20 transition-colors duration-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex justify-start items-center gap-4 mt-auto pt-4 border-t border-primary/10">
                                    <a
                                      href={project.demoURL}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-all duration-300 hover:gap-3"
                                    >
                                        <ExternalLink size={18}/>
                                        <span className="font-medium">Demo</span>
                                    </a>

                                    {project.githubURLFrontend && project.githubURLBackend ? (
                                        <>
                                            <a
                                              href={project.githubURLFrontend}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-all duration-300"
                                              title="Frontend Repository"
                                            >
                                                <Github size={18}/>
                                                <span className="font-medium">Frontend</span>
                                            </a>
                                            <a
                                              href={project.githubURLBackend}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-all duration-300"
                                              title="Backend Repository"
                                            >
                                                <Github size={18}/>
                                                <span className="font-medium">Backend</span>
                                            </a>
                                        </>
                                    ) : (
                                        <a
                                          href={project.githubURL}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-all duration-300"
                                        >
                                            <Github size={18}/>
                                            <span className="font-medium">Code</span>
                                        </a>
                                    )}
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
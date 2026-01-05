import { Briefcase, Code, School2 } from "lucide-react"
import resumePDF from "/Resume(1).pdf"


export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold align-center mb-12">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Senior Computer Science VT</h3>
                    <p className="text-muted-foreground"> 
                        Currently interning for QPulse Consulting as a SWE Intern working on 
                        internal automation tasks and other projects for the company working 
                        in two week sprints with AGILE methodologies. I graduate from Virginia 
                        Tech this spring in May and am looking forward to entering the workforce 
                        in full swing.    
                    </p>
                    <p className="text-muted-foreground"> 
                        Below you can find my resume (hopefully updated here) and a quick link 
                        to the contact section if you want to reach out. 
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">Contact</a>
                        <a href={resumePDF} download="Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download Resume</a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Technical Experience</h4>
                                <p className="text-muted-foreground">
                                    Specializing in full stack development as well as  systems programming 
                                    and API development with Python, Java, and JavaScript. Recently focusing
                                    on ML/AI research with automation being a focus. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <School2 className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Work Experience</h4>
                                <p className="text-muted-foreground">
                                    Current intern at QPulse Consulting. Worked for Virginia Tech for 12 months
                                    prior and Tutor in my free time for Math and CS. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Initiative and Discipline</h4>
                                <p className="text-muted-foreground">
                                    Have taken lead and initiative at current role suprising my mentors and 
                                    peers. Academically I have always been the technical lead on every project 
                                    with my capstone most recently being no exception where I designed 90%. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
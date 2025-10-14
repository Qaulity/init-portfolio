import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return (
      <section 
        id="hero" 
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
      >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, im </span>
                        <span className="opacity-0 animate-fade-in-delay-1 text-primary"> Damien </span>
                        <span className="opacity-0 animate-fade-in-delay-2 text-gradient ml-2"> Stone </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I'm a Computer Science senior at Virginia Tech graduating December 2025. I've gained practical 
                        experience in AWS cloud infrastructure, database architecture and design, data pipelines, and integrated systems.
                        I'm passionate about complex SWE technical problems and I'm currently seeking post-graduation opportunities.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">   
                        <a href="projects" className="cosmic-button">
                            View some of my work.
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>
            </div>
    </section>
    )
}
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl animate-pulse" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 inline-block">
          <img 
            src={profilePhoto} 
            alt="Prithv Akash R V M"
            className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-glow-primary mx-auto animate-fade-in"
          />
        </div>
        <div className="mb-4 inline-block">
          <div className="text-primary font-mono text-sm animate-fade-in">
            {"<Hello World />"}
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
          PRITHV AKASH R V M
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-2 animate-fade-in">
          B.Tech CSE Student at SRM IST
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Passionate about Cloud Computing & Web Development | Building creative, functional web applications
        </p>
        
        <div className="flex gap-4 justify-center mb-8 animate-fade-in">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 shadow-glow-primary transition-all hover:scale-105"
            asChild
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button 
            size="lg" 
            variant="secondary"
            className="hover:bg-secondary/80 transition-all hover:scale-105"
            asChild
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center animate-fade-in">
          <a 
            href="https://github.com/pa4248" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/prithv-akash-r-v-m-464189346" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

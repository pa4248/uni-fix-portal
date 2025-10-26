import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "UniFix",
      description: "A Java Swing + MySQL desktop application that enables university students and staff to register, manage, and resolve complaints related to hostel, mess, academic, or general campus issues.",
      tech: ["Java Swing", "MySQL", "Desktop App"],
      features: [
        "Unified digital complaint portal",
        "Student complaint registration",
        "Warden/admin assignment system",
        "Technician tracking & resolution progress",
      ],
      highlight: "Inspired by SRMIST ServiceDesk portal",
    },
    {
      title: "PRO-PHOTO-EDIT",
      description: "A mobile photo-editing application designed to enhance and modify images with essential editing tools.",
      tech: ["React Native", "Expo", "TypeScript"],
      features: [
        "Cross-platform (Android & iOS)",
        "Cropping and brightness adjustment",
        "Filter effects",
        "Simple, user-friendly interface",
      ],
      link: "https://hackmate-ai-partner.vercel.app/",
      collaboration: true,
    },
    {
      title: "Emergency AI Triage App",
      description: "An offline-first Android app that combines voice, text, and image analysis to provide intelligent medical triage.",
      tech: ["Android", "TensorFlow Lite", "AI/ML"],
      features: [
        "On-device AI processing",
        "Voice, text & image analysis",
        "Urgency classification (Green/Yellow/Red)",
        "Privacy-focused offline operation",
      ],
      github: "https://github.com/Arjjun-S/EmergencyTriageApp.git",
      collaboration: true,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-primary bg-clip-text text-transparent">Featured Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-card border-border hover:shadow-glow-primary transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  {project.collaboration && (
                    <span className="inline-block px-3 py-1 text-xs bg-accent/20 text-accent rounded-full">
                      Collaboration Project
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              {project.highlight && (
                <p className="text-sm text-primary mb-4 italic">
                  ✨ {project.highlight}
                </p>
              )}
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-foreground">Key Features:</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 text-xs bg-secondary text-foreground rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3 pt-4 border-t border-border">
                {project.github && (
                  <Button 
                    size="sm" 
                    variant="secondary"
                    className="hover:bg-secondary/80"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                )}
                {project.link && (
                  <Button 
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

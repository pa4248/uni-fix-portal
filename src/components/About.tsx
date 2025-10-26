import { Card } from "@/components/ui/card";
import { Code2, Cloud, Globe } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Code2, label: "C++, Java, Python" },
    { icon: Cloud, label: "Cloud Computing" },
    { icon: Globe, label: "Web Development" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-primary bg-clip-text text-transparent">About Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-card border-border hover:shadow-glow-primary transition-all">
            <h3 className="text-2xl font-bold mb-4 text-primary">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm PRITHV AKASH R V M, a 2nd-year B.Tech CSE student at SRM IST, Kattankulathur. 
              I'm passionate about Cloud Computing and Web Development, and I love building creative, 
              functional web applications that make an impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond code, I'm a curious learner who enjoys solving real-world problems, exploring 
              new technologies, and collaborating with others to bring ideas to life.
            </p>
          </Card>
          
          <Card className="p-8 bg-gradient-card border-border hover:shadow-glow-accent transition-all">
            <h3 className="text-2xl font-bold mb-6 text-primary">Skills & Technologies</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <skill.icon className="w-6 h-6 text-primary" />
                  <span className="text-foreground">{skill.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Currently learning and exploring new tools and frameworks to grow as a developer
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

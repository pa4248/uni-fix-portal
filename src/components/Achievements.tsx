import { Card } from "@/components/ui/card";
import certIort from "@/assets/cert-iort.jpg";
import certHackathon from "@/assets/cert-hackathon.jpg";
import certNptelOop from "@/assets/cert-nptel-oop.jpg";
import eCurricula from "@/assets/e-curricula.jpg";
import { Award, Trophy, Code } from "lucide-react";

const Achievements = () => {
  const certificates = [
    {
      image: certIort,
      title: "IORT Workshop Certificate",
      description: "Internet of Robotic Things workshop by IIT Varanasi at SRM",
      icon: Trophy,
    },
    {
      image: certHackathon,
      title: "Hackathon Participation",
      description: "HACKER ZONE II Hackathon at SRM Institute of Science and Technology",
      icon: Code,
    },
    {
      image: certNptelOop,
      title: "NPTEL - Fundamentals of OOP",
      description: "Consolidated score of 54% - Successfully completed with IIT Roorkee",
      icon: Award,
    },
  ];

  const achievements = [
    {
      title: "NPTEL Programming in Java",
      description: "Completed certification course in Java programming",
    },
    {
      title: "HackerRank Achievements",
      description: "Solved multiple programming challenges across difficulty levels (Easy, Medium, Hard)",
    },
    {
      title: "E-Curricula Progress",
      description: "Advanced Programming Practice - Tracking consistent learning progress",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-primary bg-clip-text text-transparent">Certificates & Achievements</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              className="overflow-hidden bg-gradient-card border-border hover:shadow-glow-accent transition-all group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start gap-3 mb-2">
                  <cert.icon className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 bg-gradient-card border-border">
          <h3 className="text-2xl font-bold mb-6 text-primary">Additional Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="w-2 bg-gradient-primary rounded-full" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
            <img 
              src={eCurricula} 
              alt="E-Curricula Progress"
              className="w-full rounded-lg"
            />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Achievements;

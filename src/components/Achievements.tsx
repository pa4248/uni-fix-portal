import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import certIort from "@/assets/cert-iort.jpg";
import certHackathon from "@/assets/cert-hackathon.jpg";
import certNptelOop from "@/assets/cert-nptel-oop.jpg";
import eCurricula from "@/assets/e-curricula.jpg";
import hrEasy1 from "@/assets/hr-easy-1.jpg";
import hrEasy2 from "@/assets/hr-easy-2.jpg";
import hrMedium1 from "@/assets/hr-medium-1.jpg";
import hrMedium2 from "@/assets/hr-medium-2.jpg";
import hrHard1 from "@/assets/hr-hard-1.jpg";
import hrHard2 from "@/assets/hr-hard-2.jpg";
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
  ];

  const hackerRankAchievements = [
    { image: hrEasy1, difficulty: "Easy", title: "Java Challenge - 5 Points" },
    { image: hrEasy2, difficulty: "Easy", title: "Java Data Types - 4 Test Cases Passed" },
    { image: hrMedium1, difficulty: "Medium", title: "HTML Parsing - 20 Points" },
    { image: hrMedium2, difficulty: "Medium", title: "String Challenge - 5 Points" },
    { image: hrHard1, difficulty: "Hard", title: "Python Challenge - 50 Points" },
    { image: hrHard2, difficulty: "Hard", title: "Matrix Problem - 100 Points" },
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-primary bg-clip-text text-transparent">Certificates & Achievements</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {certificates.map((cert, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card 
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
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 bg-gradient-card border-border">
            <h3 className="text-2xl font-bold mb-6 text-primary">Additional Achievements</h3>
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors mb-4"
              >
                <div className="w-2 bg-gradient-primary rounded-full" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            ))}
            
            <div className="mt-6">
              <h4 className="font-semibold text-foreground mb-3">E-Curricula Progress</h4>
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <img 
                  src={eCurricula} 
                  alt="E-Curricula Progress"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-card border-border">
            <h3 className="text-2xl font-bold mb-6 text-primary">HackerRank Achievements</h3>
            <div className="space-y-4">
              {hackerRankAchievements.map((achievement, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer group">
                      <img 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge 
                            variant={
                              achievement.difficulty === "Easy" ? "default" : 
                              achievement.difficulty === "Medium" ? "secondary" : 
                              "destructive"
                            }
                          >
                            {achievement.difficulty}
                          </Badge>
                        </div>
                        <p className="text-sm text-foreground">{achievement.title}</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

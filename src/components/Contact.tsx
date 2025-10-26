import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code2 } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@pa4248",
      url: "https://github.com/pa4248",
      color: "hover:text-primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "Prithv Akash R V M",
      url: "https://www.linkedin.com/in/prithv-akash-r-v-m-464189346",
      color: "hover:text-accent",
    },
    {
      icon: Code2,
      label: "HackerRank",
      username: "Competitive Programming",
      url: "#achievements",
      color: "hover:text-primary",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-primary bg-clip-text text-transparent">Let's Connect</span>
        </h2>
        
        <Card className="p-8 md:p-12 bg-gradient-card border-border text-center">
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to collaborate on interesting projects or discuss new opportunities. 
            Feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target={social.url.startsWith('http') ? "_blank" : undefined}
                rel={social.url.startsWith('http') ? "noopener noreferrer" : undefined}
                className="group"
              >
                <Card className="p-6 bg-secondary/30 border-border hover:bg-secondary/50 hover:shadow-glow-primary transition-all">
                  <social.icon className={`w-8 h-8 mx-auto mb-3 text-muted-foreground ${social.color} transition-colors`} />
                  <h3 className="font-semibold text-foreground mb-1">{social.label}</h3>
                  <p className="text-sm text-muted-foreground">{social.username}</p>
                </Card>
              </a>
            ))}
          </div>
          
          <div className="pt-6 border-t border-border">
            <p className="text-muted-foreground mb-4">
              📍 SRM Institute of Science and Technology, Kattankulathur
            </p>
            <p className="text-sm text-muted-foreground">
              2nd Year B.Tech CSE Student
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;

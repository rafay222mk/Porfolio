import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Calendar, ExternalLink, Github, Linkedin } from "lucide-react";

const Portfolio = () => {
  const skills = [
    "Ruby on Rails", "HTML", "CSS", "Bootstrap", "JavaScript", "React",
    "MySQL", "PostgreSQL", "SQLite", "Heroku", "AWS", "Git", "GitHub"
  ];

  const languages = [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Urdu", level: "Full Professional Proficiency" },
    { name: "Punjabi", level: "Native" },
    { name: "Pashto", level: "Conversational" }
  ];

  const experience = [
    {
      title: "Software Engineer",
      company: "46 Labs, Pakistan",
      period: "January 2023 - Present",
      type: "Full-time Onsite",
      projects: [
        {
          name: "Stitch",
          description: "Worked on Stitch, a platform that simplifies digital sign exchanges between customers and vendors, optimizing quotation acceptance. Integrated the Kadence Billing engine to automate and streamline billing processes effectively."
        },
        {
          name: "46 Labs Prov",
          description: "Worked on 46 Lab Prov, a client administration portal (admin portal) designed to handle multiple servers and their responsibilities. Included overseeing server operations, troubleshooting, and ensuring seamless server-client interactions for enhanced system reliability and client satisfaction."
        },
        {
          name: "Hypercube Billing",
          description: "Worked on Hypercube Billing, a client billing engine designed to generate PDF and Mechinized bills for a calling system. It includes integrated processes like EML billing and call management, with adjustable rates for different client systems."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Abdul Rafay
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
              Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ruby on Rails specialist building reliable and scalable backend systems. 
              Passionate about creating seamless digital experiences and efficient solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="animate-glow">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Card className="bg-gradient-secondary border-border/50">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-foreground/90">
                    I'm a Software Engineer with hands-on experience in Ruby on Rails, focusing on building reliable and scalable 
                    backend systems. I enjoy designing and developing robust APIs and seamlessly integrating third-party services 
                    such as billing engines. With a solid understanding of infrastructure as code, I ensure smooth and efficient deployments. 
                    I have worked on projects like Stitch, Provisioning, and Kadence billing engine, and take pride in writing clean code.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+923312825222</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>rafay222mk@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Pakistan</span>
              </div>
              <div className="flex gap-4 mt-8">
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-2">{job.title}</h3>
                      <p className="text-lg text-foreground/80">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{job.period}</span>
                      </div>
                      <Badge variant="secondary" className="mt-2">{job.type}</Badge>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {job.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="border-l-2 border-primary/20 pl-6">
                        <h4 className="text-lg font-semibold text-primary mb-2">{project.name}</h4>
                        <p className="text-foreground/80 leading-relaxed">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary">Languages</h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium">{lang.name}</span>
                    <Badge variant="outline">{lang.level}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>
          <Card className="bg-card border-border/50">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">Lahore Garrison University</h3>
                  <p className="text-lg text-foreground/80">BS (Computer Science)</p>
                  <p className="text-muted-foreground mt-2">
                    Courses: Data Engineering, Internet Of Things, DSA, Design and Analysis of Algorithms, Operating 
                    Systems, Distributed Computing, Web Development, Mobile Application, Computer Networks, Calculus 
                    and Analytical Geometry, Probability and Statistics, Linear Algebra
                  </p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>2019 - 2023</span>
                  </div>
                  <Badge variant="secondary" className="mt-2">Pakistan</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="animate-glow">
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Abdul Rafay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
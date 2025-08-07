import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Calendar, ExternalLink, Github, Linkedin, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const Portfolio = () => {
  const { theme, setTheme } = useTheme();

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
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-6">
          <h1 className="text-xl font-bold text-foreground">Abdul Rafay</h1>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">About</a>
              <a href="#experience" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">Experience</a>
              <a href="#skills" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">Skills</a>
              <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">Contact</a>
            </nav>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="ml-4"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-foreground">
            Abdul Rafay
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-10 font-light">
            Software Engineer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
            Ruby on Rails specialist building reliable and scalable backend systems. 
            Passionate about creating seamless digital experiences and efficient solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="text-base px-8 py-6">
              <Mail className="mr-3 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-6">
              <ExternalLink className="mr-3 h-5 w-5" />
              View Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">About Me</h2>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="border-border/50 shadow-sm">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    I'm a Software Engineer with hands-on experience in Ruby on Rails, focusing on building reliable and scalable 
                    backend systems. I enjoy designing and developing robust APIs and seamlessly integrating third-party services 
                    such as billing engines.
                  </p>
                  <br />
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    With a solid understanding of infrastructure as code, I ensure smooth and efficient deployments. 
                    I have worked on projects like Stitch, Provisioning, and Kadence billing engine, and take pride in writing clean code. 
                    I hold a Bachelor's degree in Computer Science.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-base">+923312825222</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-base">rafay222mk@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-base">Pakistan</span>
                </div>
              </div>
              <div className="flex gap-3 pt-6">
                <Button variant="outline" size="sm" className="p-3">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="sm" className="p-3">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Work Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 text-foreground">{job.title}</h3>
                      <p className="text-lg text-muted-foreground">{job.company}</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-base">{job.period}</span>
                      </div>
                      <Badge variant="secondary" className="mt-2 text-sm">{job.type}</Badge>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {job.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="border-l-2 border-primary/20 pl-6">
                        <h4 className="text-lg font-semibold mb-3 text-foreground">{project.name}</h4>
                        <p className="text-base text-muted-foreground leading-relaxed">{project.description}</p>
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
      <section id="skills" className="py-24 px-6 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border/50 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Languages</h3>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-base text-foreground">{lang.name}</span>
                      <Badge variant="outline" className="text-sm">{lang.level}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Education</h2>
          <Card className="border-border/50 shadow-sm">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">Lahore Garrison University</h3>
                  <p className="text-lg text-muted-foreground mb-4">Bachelor of Science (Computer Science)</p>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                    <span className="font-medium">Relevant Coursework:</span> Data Engineering, Internet Of Things, Data Structures & Algorithms, 
                    Design and Analysis of Algorithms, Operating Systems, Distributed Computing, Web Development, 
                    Mobile Application Development, Computer Networks, Calculus and Analytical Geometry, 
                    Probability and Statistics, Linear Algebra
                  </p>
                </div>
                <div className="text-right mt-6 md:mt-0">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-base">2019 - 2023</span>
                  </div>
                  <Badge variant="secondary" className="mt-2">Pakistan</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-muted/30">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a project in mind or just want to connect, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href={process.env.NEXT_PUBLIC_MAILTO}>
            <Button size="lg" className="text-base px-8 py-6">
              <Mail className="mr-3 h-5 w-5" />
              Send Email
              </Button>
              </a>
              <a href={process.env.NEXT_PUBLIC_WHATSAPPME} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="text-base px-8 py-6">
                <Phone className="mr-3 h-5 w-5" />
                Contact
                </Button>
                </a>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container text-center">
          <p className="text-muted-foreground">&copy; 2024 Abdul Rafay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

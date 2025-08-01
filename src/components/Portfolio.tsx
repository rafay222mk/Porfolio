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
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <h1 className="font-semibold">Abdul Rafay</h1>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">Experience</a>
            <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Abdul Rafay
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Software Engineer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ruby on Rails specialist building reliable and scalable backend systems. 
            Passionate about creating seamless digital experiences and efficient solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a Software Engineer with hands-on experience in Ruby on Rails, focusing on building reliable and scalable 
                    backend systems. I enjoy designing and developing robust APIs and seamlessly integrating third-party services 
                    such as billing engines. With a solid understanding of infrastructure as code, I ensure smooth and efficient deployments. 
                    I have worked on projects like Stitch, Provisioning, and Kadence billing engine, and take pride in writing clean code. 
                    I hold a Bachelor's degree in Computer Science.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>+923312825222</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>rafay222mk@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Pakistan</span>
                </div>
              </div>
              <div className="flex gap-2 pt-4">
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
      <section id="experience" className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                      <p className="text-muted-foreground">{job.company}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{job.period}</span>
                      </div>
                      <Badge variant="secondary" className="mt-1">{job.type}</Badge>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {job.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="border-l-2 border-muted pl-4">
                        <h4 className="font-medium mb-1">{project.name}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
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
      <section id="skills" className="py-20 px-6 bg-muted/50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Languages</h3>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span>{lang.name}</span>
                      <Badge variant="outline" className="text-xs">{lang.level}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Lahore Garrison University</h3>
                  <p className="text-muted-foreground mb-2">BS (Computer Science)</p>
                  <p className="text-sm text-muted-foreground">
                    Courses: Data Engineering, Internet Of Things, DSA, Design and Analysis of Algorithms, Operating 
                    Systems, Distributed Computing, Web Development, Mobile Application, Computer Networks, Calculus 
                    and Analytical Geometry, Probability and Statistics, Linear Algebra
                  </p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>2019 - 2023</span>
                  </div>
                  <Badge variant="secondary" className="mt-1">Pakistan</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/50">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="mr-2 h-4 w-4" />
              Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Abdul Rafay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
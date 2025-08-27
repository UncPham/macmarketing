import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "/professional-ceo-headshot-male-in-suit.png",
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "/professional-marketing-director-headshot-female.png",
    },
    {
      name: "Mike Chen",
      role: "Technical Lead",
      image: "/professional-technical-lead-headshot-male.png",
    },
    {
      name: "Emily Davis",
      role: "Creative Director",
      image: "/professional-creative-director-headshot-female.png",
    },
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that impact your bottom line.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Client-Focused",
      description: "Your success is our success. We work closely with you to achieve your goals.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We stay ahead of trends to provide cutting-edge solutions.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              About MAC Marketing
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              We Are <span className="text-primary">MAC Marketing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With over 10 years of experience in digital marketing, we've helped hundreds of businesses grow their
              online presence and achieve their marketing goals through innovative strategies and data-driven solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2014, MAC Marketing began as a small team of passionate digital marketers who believed that
                  every business deserves to succeed online. We started with a simple mission: to help businesses grow
                  through effective digital marketing strategies.
                </p>
                <p>
                  Over the years, we've evolved into a full-service marketing agency, expanding our services to include
                  web development, SEO, social media marketing, and comprehensive digital solutions. Our team has grown,
                  but our commitment to delivering exceptional results for our clients remains unchanged.
                </p>
                <p>
                  Today, we're proud to have helped over 500 businesses achieve their marketing goals, from startups to
                  established enterprises across various industries.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="/marketing-agency-office-with-team-collaboration-an.png" alt="MAC Marketing Office" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border">
                <CardHeader className="space-y-4">
                  <div className="flex justify-center">{value.icon}</div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experienced team of marketing professionals is dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-border">
                <CardHeader className="space-y-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">Ready to Work With Us?</h2>
          <p className="text-xl text-primary-foreground/90">
            Let's discuss how we can help your business grow and succeed.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, TrendingUp, Award, Globe, Smartphone, Search, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const services = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Website & App Development",
      description: "Professional website and mobile app development with modern design and functionality.",
      price: "From $29/month",
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic to your website.",
      price: "From $79/month",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Social Media Marketing",
      description: "Build your brand presence across social media platforms with engaging content.",
      price: "From $68/month",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Digital Analytics",
      description: "Track and analyze your digital marketing performance with detailed insights.",
      price: "From $99/month",
    },
  ]

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "500+", label: "Happy Clients" },
    { icon: <Target className="h-6 w-6" />, value: "1000+", label: "Projects Completed" },
    { icon: <TrendingUp className="h-6 w-6" />, value: "95%", label: "Success Rate" },
    { icon: <Award className="h-6 w-6" />, value: "10+", label: "Years Experience" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-card to-background py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Professional Marketing Solutions
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  <span className="text-primary">MAC MARKETING</span>
                  <br />
                  Real People, Real Stories
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We help businesses grow through innovative digital marketing strategies, professional web development,
                  and data-driven solutions that deliver real results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link href="/services">
                    Our Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img src="/professional-marketing-team-working-on-laptops-and.png" alt="MAC Marketing Team" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="flex justify-center text-secondary">{stat.icon}</div>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Marketing Solutions That Drive Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From digital marketing to web development, we offer comprehensive solutions to help your business succeed
              in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    {service.icon}
                    <Badge variant="outline">{service.price}</Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Ready to Grow Your Business?</h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss how our marketing expertise can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Search, Smartphone, BarChart3, Palette, ShoppingCart, Mail, Users } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Website & App Development",
      description:
        "Professional website and mobile app development with modern design, responsive layouts, and optimized performance.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First"],
      price: "From $29/month",
    },
    {
      icon: <Search className="h-12 w-12 text-primary" />,
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
      price: "From $79/month",
    },
    {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: "Social Media Marketing",
      description:
        "Build your brand presence across social media platforms with engaging content and strategic campaigns.",
      features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics"],
      price: "From $68/month",
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "Digital Analytics",
      description:
        "Track and analyze your digital marketing performance with detailed insights and actionable recommendations.",
      features: ["Performance Tracking", "Custom Reports", "ROI Analysis", "Data Visualization"],
      price: "From $99/month",
    },
    {
      icon: <Palette className="h-12 w-12 text-primary" />,
      title: "Branding & Design",
      description: "Create a strong brand identity with professional logo design, brand guidelines, and visual assets.",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Visual Identity"],
      price: "From $199/project",
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-primary" />,
      title: "E-commerce Solutions",
      description:
        "Build and optimize online stores that convert visitors into customers with seamless shopping experiences.",
      features: ["Store Setup", "Payment Integration", "Inventory Management", "Conversion Optimization"],
      price: "From $299/project",
    },
    {
      icon: <Mail className="h-12 w-12 text-primary" />,
      title: "Email Marketing",
      description:
        "Engage your audience with targeted email campaigns that drive conversions and build customer loyalty.",
      features: ["Campaign Design", "List Management", "Automation", "A/B Testing"],
      price: "From $49/month",
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Consulting Services",
      description:
        "Get expert advice on your marketing strategy with personalized consulting sessions and strategic planning.",
      features: ["Strategy Planning", "Market Analysis", "Competitor Research", "Growth Planning"],
      price: "From $150/hour",
    },
  ]

  const packages = [
    {
      name: "Starter",
      price: "$299",
      description: "Perfect for small businesses getting started",
      features: ["Basic Website Setup", "SEO Optimization", "Social Media Setup", "Monthly Reports", "Email Support"],
    },
    {
      name: "Professional",
      price: "$599",
      description: "Ideal for growing businesses",
      features: [
        "Advanced Website",
        "Comprehensive SEO",
        "Social Media Management",
        "Email Marketing",
        "Analytics Dashboard",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$999",
      description: "For established businesses seeking growth",
      features: [
        "Custom Development",
        "Advanced SEO & PPC",
        "Multi-Platform Marketing",
        "Marketing Automation",
        "Dedicated Account Manager",
        "24/7 Support",
      ],
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
              Our Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              <span className="text-primary">Marketing Services</span>
              <br />
              That Drive Results
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From digital marketing to web development, we offer comprehensive solutions to help your business succeed
              in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    {service.icon}
                    <Badge variant="outline">{service.price}</Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Marketing Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative border-border ${pkg.popular ? "ring-2 ring-primary" : ""}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Most Popular</Badge>
                )}
                <CardHeader className="text-center space-y-4">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">{pkg.price}</div>
                    <CardDescription>{pkg.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={pkg.popular ? "default" : "outline"} asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/90">
            Contact us today for a free consultation and let's discuss your marketing needs.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
            <Link href="/contact">Get Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

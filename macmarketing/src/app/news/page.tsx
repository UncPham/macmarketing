import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function NewsPage() {
  const articles = [
    {
      title: "MAC Marketing Enters Strategic Partnership With TINCOM MEDIA For New Feature",
      excerpt:
        "We're excited to announce our new strategic partnership that will bring innovative marketing solutions to our clients.",
      image: "/business-partnership-handshake-in-modern-office.png",
      date: "March 19, 2024",
      author: "MAC Marketing Team",
      category: "Partnership",
    },
    {
      title: "Cryptocurrency Amy Phan Was Helped Vietnamese American Filmmakers",
      excerpt:
        "Learn how we helped Vietnamese American filmmakers leverage cryptocurrency and digital marketing for their projects.",
      image: "/cryptocurrency-and-film-industry-collaboration.png",
      date: "March 1, 2024",
      author: "Amy Phan",
      category: "Case Study",
    },
    {
      title: "Sao Marketing và Biztech Robotics Ký Hợp Tác Chiến Lược",
      excerpt:
        "Strategic partnership announcement between Sao Marketing and Biztech Robotics for innovative marketing solutions.",
      image: "/robotics-and-marketing-technology-partnership.png",
      date: "January 15, 2024",
      author: "Business Development",
      category: "Partnership",
    },
    {
      title: "Digital Marketing Trends for 2024: What Businesses Need to Know",
      excerpt: "Explore the latest digital marketing trends and strategies that will shape the industry in 2024.",
      image: "/digital-marketing-trends-2024-charts-and-graphs.png",
      date: "December 28, 2023",
      author: "Marketing Team",
      category: "Industry Insights",
    },
    {
      title: "How SEO Can Transform Your Business Growth",
      excerpt:
        "Discover the power of SEO and how it can significantly impact your business's online visibility and growth.",
      image: "/seo-growth-charts-and-website-analytics.png",
      date: "December 15, 2023",
      author: "SEO Specialists",
      category: "SEO Tips",
    },
    {
      title: "Social Media Marketing Best Practices for Small Businesses",
      excerpt:
        "Learn effective social media strategies that can help small businesses build their brand and engage customers.",
      image: "/social-media-marketing-for-small-business.png",
      date: "November 30, 2023",
      author: "Social Media Team",
      category: "Social Media",
    },
  ]

  const categories = ["All", "Partnership", "Case Study", "Industry Insights", "SEO Tips", "Social Media"]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              Latest News & Insights
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              <span className="text-primary">News & Updates</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest news, insights, and success stories from MAC Marketing. Discover industry
              trends and learn from our marketing expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Featured Article</h2>
          </div>

          <Card className="overflow-hidden border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={articles[0].image || "/placeholder.svg"}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4">{articles[0].category}</Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{articles[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{articles[0].author}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground leading-tight">{articles[0].title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{articles[0].excerpt}</p>
                  <Button className="w-fit">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground">Recent Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4">{article.category}</Badge>
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="leading-relaxed line-clamp-3">{article.excerpt}</CardDescription>
                  <Button variant="outline" size="sm" className="w-fit bg-transparent">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">Stay Updated</h2>
          <p className="text-xl text-primary-foreground/90">
            Subscribe to our newsletter to get the latest marketing insights and industry news.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
            <Link href="/contact">Subscribe Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

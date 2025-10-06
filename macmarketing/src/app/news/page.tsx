import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function NewsPage() {
  const articles = [
    {
      title: "Social Media Marketing Best Practices for Small Businesses",
      excerpt:
        "Learn effective social media strategies that can help small businesses build their brand and engage customers.",
      image: "/social-media-marketing-for-small-business.png",
      date: "November 30, 2023",
      author: "Social Media Team",
      url: "https://nailspamarketing.com/social-media-marketing-best-practices.html",
    },
    {
      title: "Polished Nail & Wax tuyển thợ nail tại Myrtle Beach",
      excerpt:
        "Tiệm Polished Nail & Wax đang tìm kiếm thợ nail người Việt và người Mỹ để gia nhập đội ngũ của chúng tôi! Yêu Cầu: Có kinh nghiệm, biết...",
      image: "/polished-nail-wax-tuyen-tho-nail-tai-myrtle-beach.jpg",
      date: "Tháng 2 15 2024",
      author: "Shinee",
      url: "https://nailspamarketing.com/polished-nail-wax-tuyen-tho-nail-tai-myrtle-beach.html",
    },
    {
      title: "Những mẫu menu đẹp cho tiệm nail, spa, nhà hàng cho đầu năm 2025",
      excerpt:
        "Menu không chỉ đơn thuần là nơi giới thiệu các dịch vụ mà còn được xem như linh hồn của mỗi tiệm nail, spa hay nhà hàng. Đây là...",
      image: "/mau_menu_dep.webp",
      date: "Tháng 12 9 2024",
      author: "Haley EMs",
      url: "https://nailspamarketing.com/mau-menu-dep.html",
    },
    {
      title: "Marketing tiệm nail trên Facebook: Cách tăng doanh thu MIỄN PHÍ",
      excerpt:
        "Facebook là nền tảng mạng xã hội phổ biến nhất hiện nay với hơn 2,9 tỷ người dùng hoạt động hàng tháng. Trong đó, giới trẻ chiếm tỷ lệ...",
      image: "/marketing-tiem-nail-tren-facebook.png",
      date: "Tháng 1 16, 2024",
      author: "Shinee",
      url: "https://nailspamarketing.com/marketing-tiem-nail-tren-facebook.html",
    },
    {
      title: "Top các keyword phổ biến trong ngành nails giúp bạn on top Google nhanh chóng",
      excerpt:
        "Discover the power of SEO and how it can significantly impact your business's online visibility and growth.",
      image: "/top-cac-keyword-pho-bien-trong-nganh-nails.png",
      date: "Tháng 1 12, 2024",
      author: "Shinee",
      url: "https://nailspamarketing.com/top-cac-keyword-pho-bien-trong-nganh-nails.html",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
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
                  <Button variant="outline" size="sm" className="w-fit bg-transparent" asChild>
                    <Link href={article.url} target="_blank" rel="noopener noreferrer">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FloatingButtons />
      <Footer />
    </div>
  )
}

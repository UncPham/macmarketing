"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, ArrowUp, MessageCircle, Phone } from "lucide-react"
import { useState, useEffect } from "react"

export default function ResourcePage() {
  const [activeService, setActiveService] = useState("website")
  const [openFAQ, setOpenFAQ] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Handle scroll to show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const services = {
    website: {
      title: "Vek website",
      icon: "🌐",
      description: "Dịch vụ thiết kế và lập trình website bán hàng, website giới thiệu doanh nghiệp và quảng bá dịch vụ, sản phẩm,... tạo kênh tìm kiếm khách hàng tiềm năng cho doanh nghiệp và chủ shop.",
      faqs: [
        {
          question: "1. Website bán hàng là gì?",
          answer: "Website bán hàng là cửa hàng của bạn trên internet. Nơi bạn có thể giới thiệu sản phẩm, dịch vụ của mình đến với những người có nhu cầu và có thể tiến hành mua hàng của bạn một cách dễ dàng trên website mà không cần đến cửa hàng.\n\nVì vậy, website bán hàng của bạn cần thể hiện đầy đủ thông tin sản phẩm, dịch vụ, thông tin liên lạc cũng như các công cụ công cụ đặt hàng, thanh toán trực tuyến"
        },
        {
          question: "2. Website giới thiệu dịch vụ, thông tin doanh nghiệp là gì?",
          answer: "Website giới thiệu doanh nghiệp là nền tảng trực tuyến để giới thiệu về công ty, dịch vụ và sản phẩm của bạn một cách chuyên nghiệp và uy tín."
        },
        {
          question: "3. Có nên làm website không?",
          answer: "Trong thời đại số hóa hiện nay, website là công cụ marketing không thể thiếu cho mọi doanh nghiệp, giúp bạn tiếp cận khách hàng 24/7 và xây dựng uy tín trực tuyến."
        },
        {
          question: "4. Thời gian thiết kế website trong bao lâu?",
          answer: "Thời gian thiết kế website thường từ 2-4 tuần tùy thuộc vào độ phức tạp và yêu cầu cụ thể của dự án."
        }
      ]
    },
    branding: {
      title: "Vek Branding",
      icon: "🎨",
      description: "Dịch vụ xây dựng thương hiệu toàn diện, từ thiết kế logo, bộ nhận diện thương hiệu đến chiến lược định vị thương hiệu trên thị trường.",
      faqs: [
        {
          question: "1. Thương hiệu là gì?",
          answer: "Thương hiệu là tổng thể về hình ảnh, giá trị và cảm xúc mà khách hàng liên kết với doanh nghiệp của bạn."
        },
        {
          question: "2. Tại sao cần xây dựng thương hiệu?",
          answer: "Thương hiệu mạnh giúp tạo sự tin tưởng, khác biệt với đối thủ và gia tăng giá trị sản phẩm dịch vụ."
        }
      ]
    },
    content: {
      title: "Vek Content",
      icon: "📝",
      description: "Dịch vụ sản xuất nội dung chất lượng cao, từ bài viết blog, nội dung mạng xã hội đến video marketing và các tài liệu truyền thông.",
      faqs: [
        {
          question: "1. Content marketing là gì?",
          answer: "Content marketing là việc tạo ra và chia sẻ nội dung có giá trị để thu hút và giữ chân khách hàng mục tiêu."
        },
        {
          question: "2. Loại nội dung nào hiệu quả nhất?",
          answer: "Nội dung hiệu quả là nội dung giải quyết được vấn đề của khách hàng và phù hợp với từng giai đoạn trong customer journey."
        }
      ]
    },
    ads: {
      title: "Vek Ads",
      icon: "📱",
      description: "Dịch vụ quảng cáo trực tuyến chuyên nghiệp trên các nền tảng Google Ads, Facebook Ads, Zalo Ads và các kênh digital khác.",
      faqs: [
        {
          question: "1. Quảng cáo online có hiệu quả không?",
          answer: "Quảng cáo online rất hiệu quả nếu được thực hiện đúng cách với đúng đối tượng mục tiêu và ngân sách hợp lý."
        },
        {
          question: "2. Chi phí quảng cáo online bao nhiều?",
          answer: "Chi phí quảng cáo phụ thuộc vào ngành nghề, đối tượng mục tiêu và mục tiêu campaign, thường từ 5-10 triệu/tháng."
        }
      ]
    },
    seomap: {
      title: "Vek SEO Map",
      icon: "🗺️",
      description: "Dịch vụ tối ưu hóa website lên TOP Google, bao gồm SEO onpage, offpage và local SEO để tăng khả năng hiển thị trên công cụ tìm kiếm.",
      faqs: [
        {
          question: "1. SEO là gì?",
          answer: "SEO (Search Engine Optimization) là quá trình tối ưu hóa website để xuất hiện cao hơn trên kết quả tìm kiếm của Google."
        },
        {
          question: "2. Bao lâu thì thấy hiệu quả SEO?",
          answer: "SEO thường cho thấy kết quả sau 3-6 tháng, tùy thuộc vào độ cạnh tranh của từ khóa và chất lượng website."
        }
      ]
    },
    marketing: {
      title: "Vek Marketing",
      icon: "📊",
      description: "Dịch vụ marketing tổng thể, bao gồm lập chiến lược marketing, phân tích thị trường, quản lý mạng xã hội và đo lường hiệu quả.",
      faqs: [
        {
          question: "1. Chiến lược marketing là gì?",
          answer: "Chiến lược marketing là kế hoạch tổng thể để tiếp cận và chuyển đổi khách hàng mục tiêu thành khách hàng thực sự."
        },
        {
          question: "2. Marketing online và offline khác nhau như thế nào?",
          answer: "Marketing online sử dụng các kênh số như website, mạng xã hội, trong khi offline dùng các phương tiện truyền thống như báo chí, radio."
        }
      ]
    }
  }

  const sidebarItems = [
    { id: 'website', label: 'Vek Website', active: true },
    { id: 'branding', label: 'Vek Branding', active: false },
    { id: 'content', label: 'Vek Content', active: false },
    { id: 'ads', label: 'Vek Ads', active: false },
    { id: 'seomap', label: 'Vek SEO Map', active: false },
    { id: 'marketing', label: 'Vek Marketing', active: false },
  ]

  const currentService = services[activeService as keyof typeof services]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EFEEEA' }}>
      <Header />

      {/* Hero Section với Gradient */}
      <section className="relative py-16 lg:py-20" style={{ background: 'linear-gradient(135deg, #FE7743 0%, #FE7743 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4" style={{ color: '#EFEEEA' }}>
            Tài nguyên toàn cảnh Marketing
          </h1>
          <p className="text-xl mb-2" style={{ color: '#EFEEEA' }}>
            Với hơn 5 năm kinh nghiệm chuyên sâu
          </p>
          <p className="text-lg" style={{ color: '#EFEEEA' }}>
            Đã có 500+ khách hàng tin tưởng sử dụng dịch vụ
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12" style={{ backgroundColor: '#EFEEEA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-0">
                  {sidebarItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveService(item.id)}
                      className={`w-full text-left px-6 py-4 border-b border-border/50 last:border-b-0 transition-all duration-300 ${
                        activeService === item.id 
                          ? 'font-semibold' 
                          : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                      }`}
                      style={activeService === item.id ? { backgroundColor: '#FE7743', color: '#EFEEEA' } : {}}
                    >
                      {item.label}
                    </button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader className="border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: '#FE7743' }}>
                      <span style={{ color: '#EFEEEA' }} className="text-sm">→</span>
                    </div>
                    <CardTitle className="text-2xl flex items-center gap-2" style={{ color: '#FE7743' }}>
                      {/* <span className="text-2xl">{currentService.icon}</span> */}
                      {currentService.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="p-8">
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {currentService.description}
                  </p>

                  {/* FAQ Section */}
                  <div className="space-y-4">
                    {currentService.faqs.map((faq, index) => (
                      <div key={index} className="border border-border rounded-lg">
                        <button
                          onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                        >
                          <span className="font-semibold text-foreground">{faq.question}</span>
                          {openFAQ === index ? (
                            <ChevronUp className="h-5 w-5 flex-shrink-0" style={{ color: '#FE7743' }} />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                          )}
                        </button>
                        
                        {openFAQ === index && (
                          <div className="px-4 pb-4 border-t border-border">
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line pt-4">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <FloatingButtons />
      <Footer />
    </div>
  )
}

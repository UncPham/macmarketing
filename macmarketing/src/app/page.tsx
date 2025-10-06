"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, TrendingUp, Award, Globe, Smartphone, Search, BarChart3, Heart, Settings, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HomePage() {
  // Slideshow state
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Array of images for slideshow
  const images = [
    "/imgi_106_hand-holding-smartphone-social-media-concept-2048x1365.jpg",
    "/imgi_69_49263271-2048x1138.png",
    "/imgi_20_horizontal-photo-group-creative-designers-working-project-together-computer-modern-office-1920x1079.jpg", 
    "/imgi_3_Free-Website-Presentation-Mockup-PSD.jpg" // Placeholder - thay bằng ảnh thật
  ]
  
  // Auto-change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [images.length])

  // Navigation functions
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const services = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Xây dựng Website",
      description: "Vekmarketing thiết kế và phát triển website phù hợp với bộ nhận diện và sở thích của từng khách hàng. Đồng thời đáp ứng được tiêu chuẩn SEO của Google, chúng tôi bảo đảm website của Quý vị được sử dụng trên tất cả các thiết bị công nghệ.",
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "SEO - Search Engine Marketing",
      description: "Mỗi Zipcode, Vekmarketing cam kết chỉ phục vụ duy nhất 1 khách hàng trong mỗi ngành. Với tiêu chí tập trung vào chất lượng và mục tiêu mang lại giá trị bền vững, chúng tôi có chính sách hoàn lại 100% chi phí nếu không đạt được mục tiêu.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Social Media Marketing",
      description: "Sáng tạo nội dung và cập nhật đồng bộ trên tất cả các trang mạng xã hội. Vekmarketing đo lường các nền tảng phù hợp với khu vực, đối tượng khách hàng của Quý vị, từ đó thực hiện các chiến dịch cho hiệu quả, đảm bảo khoản đầu tư của bạn được sử dụng theo cách tiết kiệm chi phí nhất.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Hệ thống bán hàng",
      description: "Khi Quý vị cố gắng tìm kiếm khách hàng mà không có phương án quản trị, Vekmarketing có thể giúp Quý vị đạt được 50% chi phí quảng cáo, và 70% doanh thu. Ngoài việc giúp tiết kiệm lệ phí mỗi tháng, chúng tôi có đội ngũ nhân sự hỗ trợ về kỳ thuật làm việc tân tinh 24/7.",
    },
  ]

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "100+", label: "Khách hàng hài lòng" },
    { icon: <Target className="h-6 w-6" />, value: "200+", label: "Dự án hoàn thành" },
    { icon: <TrendingUp className="h-6 w-6" />, value: "95%", label: "Tỷ lệ thành công" },
    { icon: <Award className="h-6 w-6" />, value: "5+", label: "Năm kinh nghiệm" },
  ]

  const whyChooseUs = [
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "TIẾT KIỆM CHI PHÍ",
      features: [
        "Lệ phí thấp nhất Châu Âu",
        "Đội ngũ nhân sự hỗ trợ Tiếng Việt 24/7",
        "Không hợp đồng ràng buộc",
        "Chính sách hoàn tiền minh bạch"
      ]
    },
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "MARKETING ĐỘC QUYỀN",
      features: [
        "Mỗi zipcode Vekmarketing chỉ cung cấp dịch vụ SEO đến 1 khách hàng",
        "Cam kết chất lượng và tiến độ",
        "Website chuẩn SEO với tốc độ tải cao",
        "1 stop support từ đội ngũ thương trực"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "DỊCH VỤ ĐA DẠNG",
      features: [
        "Xây dựng thương hiệu, phát triển kênh mạng xã hội",
        "Tối ưu hóa website, đưa cửa hàng lên top Google, tăng khả năng tiếp cận khách hàng.",
        "Combo nhiều dịch vụ với chi phí tối ưu, phù hợp cho cửa hàng ở mọi quy mô.",
        "Marketing, SEO và hỗ trợ khách hàng trọn gói, tối ưu doanh thu ngành làm đẹp."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
       <section
        className="relative bg-gradient-to-br from-card to-background -mt-20 pt-0 pb-20 lg:pb-40"
        style={{
          backgroundImage: 'url(/anh_nen.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          minHeight: '100vh'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center min-h-screen pt-20">
            <div className="text-left space-y-6 sm:space-y-8 lg:space-y-10 max-w-5xl">
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                {/* <Badge variant="secondary" className="w-fit bg-white/70 text-gray-800 border border-white/20">
                  Professional Marketing Solutions
                </Badge> */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bebas-black text-white leading-tight">
                  <span>Giải pháp marketing chuyên biệt cho ngành Nails</span>
                  {/* <br /> */}
                  {/* Giải pháp marketing chuyên biệt cho ngành Nail */}
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl font-gmv-regular">
                  Chúng tôi là Vekmarketing, chuyên cung cấp giải pháp marketing chuyên biệt cho ngành nail – từ thiết kế thương hiệu, quảng cáo đến quản lý mạng xã hội.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Button size="lg" className="text-lg sm:text-xl px-8 sm:px-10 py-3 sm:py-4 rounded-full" asChild>
                  <Link href="/services">
                    Dịch vụ <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg sm:text-xl px-8 sm:px-10 py-3 sm:py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-full" asChild>
                  <Link href="/contact">Tư vấn miễn phí</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About us */}
      <section className="py-10 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            {/* <Badge variant="secondary" className="w-fit mx-auto">
              ABOUT US
            </Badge> */}
            <h2 className="text-3xl lg:text-5xl font-bebas-semibold text-foreground">
              Chuyên gia Marketing <span className="text-primary">cho ngành Nail</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-gmv-regular">
              Giúp các tiệm nail phát triển ổn định, thu hút khách hàng mới và giữ chân khách cũ bằng chiến lược marketing thông minh và hiệu quả.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg group hover:shadow-xl transition-all duration-500 overflow-hidden">
              {/* Image at top - taller to replace icon space */}
              <div className="h-64 overflow-hidden">
                <img 
                  src="/imgi_18_csm_merchant_2_53ea1c7e80.webp" 
                  alt="Hiểu ngành - Hiểu khách hàng"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="text-center space-y-4 p-6">
                <h3 className="text-xl font-gmv-semibold text-foreground group-hover:text-primary transition-colors duration-300">Hiểu ngành - Hiểu khách hàng</h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300 font-gmv-regular">
                  Chúng tôi xuất phát từ thực tế ngành nail, hiểu rõ hành vi của khách hàng tại thị trường Pháp và Việt Nam. Nhờ đó, mọi chiến lược marketing đều được thiết kế riêng, sát với nhu cầu thực tế của tiệm nail.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg group hover:shadow-xl transition-all duration-500 overflow-hidden">
              {/* Image at top - taller to replace icon space */}
              <div className="h-64 overflow-hidden">
                <img 
                  src="/ab_2.jpg" 
                  alt="Giải pháp toàn diện, dễ áp dụng"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="text-center space-y-4 p-6">
                <h3 className="text-xl font-gmv-semibold text-foreground group-hover:text-primary transition-colors duration-300">Giải pháp toàn diện, dễ áp dụng</h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300 font-gmv-regular">
                  Từ xây dựng thương hiệu, thiết kế website, đến chạy quảng cáo địa phương và quản lý mạng xã hội – bạn có thể chọn dịch vụ trọn gói hoặc từng phần tùy ngân sách. Chúng tôi làm marketing dễ hiểu, dễ triển khai.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg group hover:shadow-xl transition-all duration-500 overflow-hidden">
              {/* Image at top - taller to replace icon space */}
              <div className="h-64 overflow-hidden">
                <img 
                  src="/ab_3.jpg" 
                  alt="Đồng hành và hỗ trợ sát sao"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="text-center space-y-4 p-6">
                <h3 className="text-xl font-gmv-semibold text-foreground group-hover:text-primary transition-colors duration-300">Đồng hành và hỗ trợ sát sao</h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300 font-gmv-regular">
                  Không chỉ làm marketing, chúng tôi đồng hành như một người bạn đồng hành kinh doanh. Tư vấn chiến lược, hỗ trợ xử lý vấn đề, và luôn sẵn sàng khi bạn cần – ngay cả sau khi dịch vụ đã hoàn tất.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8 max-w-4xl w-full">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="flex justify-center text-primary">{stat.icon}</div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" style={{ backgroundColor: '#282826' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16">
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bebas-semibold text-primary mb-10">Dịch vụ của Vekmarketing</h2>
              <div className="max-w-4xl lg:max-w-none space-y-4 text-white">
                <p className="text-lg text-white font-gmv-medium">
                  Tiết kiệm 1-2 giờ mỗi ngày • Tăng thu nhập đột phá • Giảm chi phí $4.000-$6.000
                </p>
                <p className="text-lg text-white font-gmv-regular">
                  Trải nghiệm công nghệ mới nhất và giải pháp tiên tiến trong lĩnh vực Digital Marketing
                </p>
              </div>
            </div>
            
            {/* Right side - Animation */}
            <div className="flex-shrink-0">
              <img 
                src="/ser_animation.gif" 
                alt="Services Animation"
                className="w-80 lg:w-96 h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-none" style={{ backgroundColor: '#000000' }}>
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    {service.icon}
                    <CardTitle className="text-xl text-white font-gmv-semibold">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-white font-gmv-regular">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 text-white">
            <Button size="lg" asChild>
              <Link href="/services">
                Xem thêm <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Vekmarketing */}
      <section className="py-20 bg-background" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bebas-semibold text-primary">
              Tại sao nên chọn Vekmarketing?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-gmv-regular">
              Giải pháp trọn gói giúp tăng doanh thu bền vững và xây dựng hệ thống chăm sóc khách hàng.
            </p>
          </div>

          <div className="space-y-6">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/5 via-background to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row items-center lg:items-center gap-4 sm:gap-6">
                  {/* Left side - Icon and Title */}
                  <div className="flex-shrink-0 flex flex-col lg:flex-row items-center lg:items-start gap-3 sm:gap-4 w-full lg:w-64">
                    <div className="relative flex justify-center lg:justify-start">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative bg-gradient-to-br from-primary to-primary/10 rounded-full p-3 sm:p-4 shadow-lg">
                        {item.icon}
                      </div>
                    </div>

                    <div className="text-center lg:text-left">
                      <div className="text-xs font-gmv-medium text-primary uppercase tracking-wider mb-1">
                        0{index + 1}
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bebas-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Right side - Features */}
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    {item.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-300 group-hover:shadow-md h-full"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-primary/70 shadow-sm"></div>
                        </div>
                        <p className="text-foreground text-base leading-relaxed font-gmv-regular group-hover:text-primary transition-colors duration-300">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* CTA Section */}
      {/* <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Bạn đã sẵn sàng phát triển doanh nghiệp của mình chưa?</h2>
          <p className="text-xl text-muted-foreground">
            Hãy cùng thảo luận về cách chuyên gia marketing của chúng tôi có thể giúp bạn đạt được mục tiêu kinh doanh của mình.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/contact">
                Bắt đầu dự án <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
              <Link href="/about">Tìm hiểu thêm</Link>
            </Button>
          </div>
        </div>
      </section> */}

      <FloatingButtons />
      <Footer />
    </div>
  )
}

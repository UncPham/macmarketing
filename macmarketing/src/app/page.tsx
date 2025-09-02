"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, TrendingUp, Award, Globe, Smartphone, Search, BarChart3, Heart, Settings } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HomePage() {
  // Slideshow state
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Array of images for slideshow
  const images = [
    "/professional-marketing-team-working-on-laptops-and.png",
    "/blue-geometric-pattern.jpg",
    "/professional-marketing-team-working-on-laptops-and.png", // Placeholder - thay bằng ảnh thật
    "/blue-geometric-pattern.jpg" // Placeholder - thay bằng ảnh thật
  ]
  
  // Auto-change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [images.length])

  const services = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Xây dựng Website & App",
      description: "TD Agency thiết kế và phát triển website, app phù hợp với bộ nhận diện và sở thích của từng khách hàng. Đồng thời đáp ứng được tiêu chuẩn SEO của Google, chúng tôi bảo đảm website của Quý vị được sử dụng trên tất cả các thiết bị công nghệ.",
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "SEO - Search Engine Marketing",
      description: "Mỗi Zipcode, TD Agency cam kết chỉ phục vụ duy nhất 1 khách hàng trong mỗi ngành. Với tiêu chí tập trung vào chất lượng và mục tiêu mang lại giá trị bến vũng, chúng tôi có chính sách hoàn lại 100% chi phí nếu không đạt được mục tiêu.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Social Media Marketing",
      description: "Sáng tạo nội dung và cập nhật đồng bộ trên tất cả các trang mạng xã hội. TD Agency đo lường các nền tảng phù hợp với khu vực, đối tượng khách hàng của Quý vị, từ đó thực hiện các chiến dịch cho hiệu quả, đảm bảo khoản đầu tư của bạn được sử dụng theo cách tiết kiệm chi phí nhất.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Hệ thống bán hàng",
      description: "Khi Quý vị cố gắng tìm kiếm khách hàng mà không có phương án quản trị, chúng tôi có thể giúp Quý vị đạt được 50% chi phí quảng cáo, và 70% doanh thu. Ngoài việc giúp tiết kiệm lệ phí mỗi tháng, chúng tôi có trên 80 nhân sự hỗ trợ về kỳ thuật làm việc tân tinh 24/7.",
    },
  ]

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "100+", label: "Khách hàng hài lòng" },
    { icon: <Target className="h-6 w-6" />, value: "200+", label: "Dự án hoàn thành" },
    { icon: <TrendingUp className="h-6 w-6" />, value: "95%", label: "Tỷ lệ thành công" },
    { icon: <Award className="h-6 w-6" />, value: "10+", label: "Năm kinh nghiệm" },
  ]

  const whyChooseUs = [
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "TIẾT KIỆM CHI PHÍ",
      features: [
        "Lệ phí thấp nhất Hoa Kỳ",
        "80 nhân sự ngữ hỗ trợ Tiếng Việt 24/7",
        "Tiền vào tài khoản ngay tiếp theo",
        "Không hợp đồng ràng buộc"
      ]
    },
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "MARKETING ĐỘC QUYỀN",
      features: [
        "Mỗi zipcode TD Agency chỉ cung cấp dịch vụ SEO đến 1 khách hàng",
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
        "Tối ưu hóa website, đưa doanh nghiệp lên top Google, tăng khả năng tiếp cận khách hàng.",
        "Combo nhiều dịch vụ với chi phí tối ưu, phù hợp cho doanh nghiệp mọi quy mô.",
        "Marketing, SEO và hỗ trợ khách hàng trọn gói, tối ưu doanh thu ngành làm đẹp."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
       <section 
        className="relative bg-gradient-to-br from-card to-background py-20 lg:py-32"
        style={{
          backgroundColor: '#1e3480', // Nền xanh đậm giống ảnh
          backgroundImage: `
            /* Hình thoi đỏ */
            radial-gradient(ellipse 8px 8px at 15% 20%, #ef4444 0%, #ef4444 50%, transparent 50%),
            radial-gradient(ellipse 6px 6px at 85% 15%, #ef4444 0%, #ef4444 50%, transparent 50%),
            radial-gradient(ellipse 7px 7px at 25% 85%, #ef4444 0%, #ef4444 50%, transparent 50%),
            radial-gradient(ellipse 8px 8px at 75% 90%, #ef4444 0%, #ef4444 50%, transparent 50%),
            
            /* Hình thoi xanh lá */
            radial-gradient(ellipse 6px 6px at 45% 25%, #10b981 0%, #10b981 50%, transparent 50%),
            radial-gradient(ellipse 8px 8px at 65% 75%, #10b981 0%, #10b981 50%, transparent 50%),
            radial-gradient(ellipse 7px 7px at 35% 60%, #10b981 0%, #10b981 50%, transparent 50%),
            
            /* Hình thoi vàng */
            radial-gradient(ellipse 7px 7px at 90% 35%, #f59e0b 0%, #f59e0b 50%, transparent 50%),
            radial-gradient(ellipse 6px 6px at 10% 75%, #f59e0b 0%, #f59e0b 50%, transparent 50%),
            
            /* Vòng tròn xanh dương nhạt */
            radial-gradient(circle 4px at 20% 45%, #60a5fa 0%, #60a5fa 100%, transparent 100%),
            radial-gradient(circle 5px at 80% 25%, #60a5fa 0%, #60a5fa 100%, transparent 100%),
            radial-gradient(circle 4px at 55% 15%, #60a5fa 0%, #60a5fa 100%, transparent 100%),
            radial-gradient(circle 3px at 30% 70%, #60a5fa 0%, #60a5fa 100%, transparent 100%),
            radial-gradient(circle 4px at 70% 55%, #60a5fa 0%, #60a5fa 100%, transparent 100%),
            radial-gradient(circle 5px at 85% 80%, #60a5fa 0%, #60a5fa 100%, transparent 100%)
          `,
          backgroundSize: '100% 100%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-white/70 text-gray-800 border border-white/20">
                  Professional Marketing Solutions
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  <span className="text-primary">TD AGENCY</span>
                  <br />
                  Giải pháp marketing chuyên biệt cho ngành Nail
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Chúng tôi là TD Agency,chuyên cung cấp giải pháp marketing chuyên biệt cho ngành nail – từ thiết kế thương hiệu, quảng cáo đến quản lý mạng xã hội.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link href="/services">
                    Dịch vụ <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                  <Link href="/contact">Tư vấn miễn phí</Link>
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              {/* Slideshow container */}
              <div className="relative w-full h-[400px] lg:h-[500px]">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Marketing Team ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                
                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white shadow-lg' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About us */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              ABOUT US
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Chuyên gia Marketing <span className="text-primary">cho ngành Nail</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Giúp các tiệm nail phát triển ổn định, thu hút khách hàng mới và giữ chân khách cũ bằng chiến lược marketing thông minh và hiệu quả.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-4">
                <Search className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Hiểu ngành - Hiểu khách hàng</h3>
              <p className="text-muted-foreground leading-relaxed">
                Chúng tôi xuất phát từ thực tế ngành nail, hiểu rõ hành vi của khách hàng tại thị trường Pháp và Việt Nam. Nhờ đó, mọi chiến lược marketing đều được thiết kế riêng, sát với nhu cầu thực tế của tiệm nail.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-4">
                <Settings className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Giải pháp toàn diện, dễ áp dụng</h3>
              <p className="text-muted-foreground leading-relaxed">
                Từ xây dựng thương hiệu, thiết kế website, đến chạy quảng cáo địa phương và quản lý mạng xã hội – bạn có thể chọn dịch vụ trọn gói hoặc từng phần tùy ngân sách. Chúng tôi làm marketing dễ hiểu, dễ triển khai.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-4">
                <Heart className="h-16 w-16 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Đồng hành và hỗ trợ sát sao</h3>
              <p className="text-muted-foreground leading-relaxed">
                Không chỉ làm marketing, chúng tôi đồng hành như một người bạn đồng hành kinh doanh. Tư vấn chiến lược, hỗ trợ xử lý vấn đề, và luôn sẵn sàng khi bạn cần – ngay cả sau khi dịch vụ đã hoàn tất.
              </p>
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
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              OUR SERVICES
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">Dịch vụ trọn gói của TD Agency</h2>
                        <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl text-muted-foreground">
                Tiết kiệm 1-2 giờ mỗi ngày • Tăng thu nhập đột phá • Giảm chi phí $4.000-$6.000
              </p>
              <p className="text-lg text-muted-foreground">
                Trải nghiệm công nghệ mới nhất và giải pháp tiên tiến trong lĩnh vực Merchant & Digital Marketing
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader className="space-y-4">
                  <div className="flex justify-start">
                    {service.icon}
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
                Xem thêm <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why TD Agency */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary uppercase">
              TẠI SAO NÊN CHỌN TD AGENCY?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Chúng tôi cung cấp giải pháp trọn gói và đồng bộ nhằm quản lý danh tiếng, tăng doanh thu cho quý khách hàng một cách bền vững, đồng thời xây dựng một hệ thống tự động hoá chăm sóc, kêu gọi khách hàng quay lại sử dụng dịch vụ.
            </p>
          </div>

          <div className="space-y-6">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/5 via-background to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-8 flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  {/* Left side - Icon and Title */}
                  <div className="flex-shrink-0 flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:w-80">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-full p-4 shadow-lg">
                        {item.icon}
                      </div>
                    </div>
                    
                    <div className="text-center lg:text-left">
                      <div className="text-xs font-semibold text-primary/60 uppercase tracking-wider mb-1">
                        0{index + 1}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Right side - Features */}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-start gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-300 group-hover:shadow-md"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-primary/70 shadow-sm"></div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed font-medium group-hover:text-foreground transition-colors duration-300">
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
      <section className="py-20 bg-card">
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
      </section>

      <Footer />
    </div>
  )
}

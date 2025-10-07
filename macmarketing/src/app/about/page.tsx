import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Tập trung kết quả",
      description: "Chúng tôi tập trung vào việc mang lại kết quả có thể đo lường được, tác động trực tiếp đến doanh thu của bạn.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Khách hàng là trọng tâm",
      description: "Thành công của bạn chính là thành công của chúng tôi. Chúng tôi làm việc sát sao để đạt được mục tiêu của bạn.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Chất lượng hoàn hảo",
      description: "Chúng tôi duy trì tiêu chuẩn cao nhất trong mọi việc chúng tôi làm cho ngành nail.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Đổi mới sáng tạo",
      description: "Chúng tôi luôn dẫn đầu xu hướng để cung cấp các giải pháp marketing tiên tiến nhất.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="relative -mt-20 py-20 lg:py-32"
        style={{
          backgroundImage: `url('imgi_87_led-poster-background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          paddingTop: '10rem',
          minHeight: '50vh'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* <Badge variant="secondary" className="w-fit mx-auto bg-white/10 text-white border-white/20">
              About Vekmarketing
            </Badge> */}
            <h1 className="text-4xl lg:text-6xl font-bebas-black text-white">
              Chuyên gia Marketing <span className="text-primary">cho ngành Nails</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-gmv-regular">
              Với hơn 5 năm kinh nghiệm trong lĩnh vực marketing cho ngành nails, chúng tôi đã giúp hàng trăm tiệm nails
              phát triển thương hiệu và đạt được mục tiêu kinh doanh thông qua các chiến lược sáng tạo và giải pháp hiệu quả.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background" style={{backgroundColor: "white"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bebas-semibold text-foreground">Câu chuyện của chúng tôi</h2>
              <div className="space-y-4 text-black leading-relaxed">
                <p>
                  Vekmarketing được thành lập với niềm tin rằng mỗi tiệm nails đều xứng đáng có được sự thành công. Chúng tôi bắt đầu
                  với sứ mệnh đơn giản: giúp các tiệm nails phát triển bền vững thông qua các chiến lược marketing hiệu quả.
                </p>
                <p>
                  Qua nhiều năm, chúng tôi đã phát triển thành agency marketing chuyên biệt cho ngành nails, mở rộng dịch vụ
                  bao gồm thiết kế website, SEO, quản lý mạng xã hội và các giải pháp marketing tổng thể. Đội ngũ của chúng tôi
                  không ngừng phát triển, nhưng cam kết mang lại kết quả xuất sắc cho khách hàng vẫn không thay đổi.
                </p>
                <p>
                  Ngày nay, chúng tôi tự hào đã giúp hơn 500 tiệm nails đạt được mục tiêu marketing, từ các tiệm mới mở
                  đến những chuỗi tiệm nails lớn trên khắp các bang.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="about_us.jpg" alt="Vekmarketing Office" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bebas-semibold text-foreground">Giá trị cốt lõi</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Những giá trị cốt lõi này định hướng mọi hoạt động của chúng tôi và cách chúng tôi phục vụ khách hàng.
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bebas-semibold">Sẵn sàng hợp tác với chúng tôi?</h2>
          <p className="text-xl text-primary-foreground/90">
            Hãy thảo luận về cách chúng tôi có thể giúp tiệm nail của bạn phát triển và thành công.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
            <Link href="/contact">Liên hệ ngay</Link>
          </Button>
        </div>
      </section>

      <FloatingButtons />
      <Footer />
    </div>
  )
}

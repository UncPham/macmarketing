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
      <section className="py-20 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              About TD Agency
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Chuyên gia Marketing <span className="text-primary">cho ngành Nail</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Với hơn 10 năm kinh nghiệm trong lĩnh vực marketing cho ngành nail, chúng tôi đã giúp hàng trăm tiệm nail
              phát triển thương hiệu và đạt được mục tiêu kinh doanh thông qua các chiến lược sáng tạo và giải pháp hiệu quả.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Câu chuyện của chúng tôi</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  TD Agency được thành lập với niềm tin rằng mỗi tiệm nail đều xứng đáng có được sự thành công. Chúng tôi bắt đầu
                  với sứ mệnh đơn giản: giúp các tiệm nail phát triển bền vững thông qua các chiến lược marketing hiệu quả.
                </p>
                <p>
                  Qua nhiều năm, chúng tôi đã phát triển thành agency marketing chuyên biệt cho ngành nail, mở rộng dịch vụ
                  bao gồm thiết kế website, SEO, quản lý mạng xã hội và các giải pháp marketing tổng thể. Đội ngũ của chúng tôi
                  không ngừng phát triển, nhưng cam kết mang lại kết quả xuất sắc cho khách hàng vẫn không thay đổi.
                </p>
                <p>
                  Ngày nay, chúng tôi tự hào đã giúp hơn 500 tiệm nail đạt được mục tiêu marketing, từ các tiệm mới mở
                  đến những chuỗi tiệm nail lớn trên khắp các bang.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="/marketing-agency-office-with-team-collaboration-an.png" alt="TD Agency Office" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Giá trị cốt lõi</h2>
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
          <h2 className="text-3xl lg:text-4xl font-bold">Sẵn sàng hợp tác với chúng tôi?</h2>
          <p className="text-xl text-primary-foreground/90">
            Hãy thảo luận về cách chúng tôi có thể giúp tiệm nail của bạn phát triển và thành công.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
            <Link href="/contact">Liên hệ ngay</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

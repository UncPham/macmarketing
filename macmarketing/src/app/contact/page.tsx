import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-6 lg:py-8 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground">
              <span className="text-primary">Liên hệ</span> với chúng tôi
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="border-border">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Thông tin liên hệ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Social Media Section - Moved to top and made more prominent */}
                <div className="pb-4 border-b border-border">
                  {/* <p className="font-semibold text-base mb-3 text-primary">Theo dõi chúng tôi</p> */}
                  <div className="grid grid-cols-2 gap-3">
                    <a href="https://www.facebook.com/vekmarketing" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex items-center space-x-2 p-2 rounded-lg border border-border hover:bg-accent transition-colors">
                      <Facebook className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-medium">Facebook</span>
                    </a>
                    <a href="https://www.instagram.com/vekmarketing" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex items-center space-x-2 p-2 rounded-lg border border-border hover:bg-accent transition-colors">
                      <Instagram className="h-5 w-5 text-pink-600" />
                      <span className="text-sm font-medium">Instagram</span>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Điện thoại - Zalo</p>
                      <p className="text-sm text-muted-foreground">+8494 3995 695</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <p className="text-sm text-muted-foreground">support@vekmarketing.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 col-span-2">
                    <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div className="min-w-0 space-y-3">
                      <div>
                        <p className="font-medium text-sm">Văn phòng Việt Nam</p>
                        <p className="text-sm text-muted-foreground">
                          Usilk City - Hà Đông<br />
                          TP. Hà Nội
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Văn phòng Pháp</p>
                        <p className="text-sm text-muted-foreground">
                          39 rue Marceau<br />
                          94200 Ivry sur Seine, France
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="border-border">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Vị trí</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden h-80 lg:h-96">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d464.4006976442084!2d2.378780248283907!3d48.819161456651194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67233ec35ecff%3A0xc4a454cea0f4281c!2sRue%20Marceau%2C%20Ph%C3%A1p!5e0!3m2!1svi!2s!4v1760964540743!5m2!1svi!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vị trí U-Silk City 101"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FloatingButtons />
      <Footer />
    </div>
  )
}

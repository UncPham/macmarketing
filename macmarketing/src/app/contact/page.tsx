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
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-medium text-sm">Địa chỉ</p>
                      <p className="text-sm text-muted-foreground">
                        Chung cư Usilk 101<br />
                        TP. Hà Nội
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Điện thoại</p>
                      <p className="text-sm text-muted-foreground">0912 314 567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <p className="text-sm text-muted-foreground">info@macmarketing.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Giờ làm việc</p>
                      <p className="text-sm text-muted-foreground">
                        T2-T6: 9:00 - 18:00<br />
                        T7: 9:00 - 13:00<br />
                        CN: Nghỉ
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media & QR Code */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-medium text-sm mb-2">Theo dõi chúng tôi</p>
                    <div className="flex space-x-2">
                      <a href="https://www.facebook.com/vekmarketing" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors">
                        <Facebook className="h-4 w-4" />
                      </a>
                      <a href="https://www.instagram.com/vekmarketing" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors">
                        <Instagram className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  
                  {/* <div className="text-center">
                    <p className="font-medium text-sm mb-2">QR Code</p>
                    <img src="/qr-code-for-mac-marketing-contact-information.png" alt="MAC Marketing QR Code" className="w-16 h-16 mx-auto" />
                  </div> */}
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.4704217319486!2d105.7606719!3d20.973772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134532199e6d629%3A0xcb0e8d108323f74!2sU-Silk%20City%20101!5e0!3m2!1svi!2s!4v1759764770408!5m2!1svi!2s" 
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

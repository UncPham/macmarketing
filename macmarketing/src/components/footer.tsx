import Link from "next/link"
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/logo.svg" 
                alt="VEK Marketing Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm">
                Chuyên cung cấp giải pháp marketing chuyên biệt cho ngành nail – từ thiết kế thương hiệu, quảng cáo đến quản lý mạng xã hội.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Tài nguyên
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-primary transition-colors">
                  Tin tức
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          {/* <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">Xây dựng Website & App</span>
              </li>
              <li>
                <span className="text-muted-foreground">SEO - Search Engine Marketing</span>
              </li>
              <li>
                <span className="text-muted-foreground">Social Media Marketing</span>
              </li>
              <li>
                <span className="text-muted-foreground">Hệ thống bán hàng</span>
              </li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">699 Nguyen Kiem St, District 3, Ho Chi Minh City</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">0938 125 576</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">info@tdagency.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.facebook.com/vekmarketing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/vekmarketing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">© 2025 TD Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

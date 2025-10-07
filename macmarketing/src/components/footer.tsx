import Link from "next/link"
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-50 max-w-6xl mx-auto">
          {/* Company Info */}
          <div className="space-y-4 text-left hidden md:block">
            <div className="flex items-center justify-start">
              <img
                src="/logo.svg"
                alt="VEK Marketing Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm font-gmv-regular">
                Chuyên gia marketing cho ngành Nail
                <br />
                Thiết kế thương hiệu, quảng cáo, quản lý mạng xã hội.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-left">
            <h3 className="font-gmv-semibold text-foreground">Quick Links</h3>
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
                <Link href="/resource" className="text-muted-foreground hover:text-primary transition-colors">
                  Tài nguyên
                </Link>
              </li>
              {/* <li>
                <Link href="/news" className="text-muted-foreground hover:text-primary transition-colors">
                  Tin tức
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-left">
            <h3 className="font-gmv-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-start space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm font-gmv-regular">0912 314 567</span>
              </div>
              <div className="flex items-center justify-start space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm font-gmv-regular">info@tdagency.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 pt-2 justify-start">
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

        {/* <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm font-gmv-regular">© 2025 TD Agency. All rights reserved.</p>
        </div> */}
      </div>
    </footer>
  )
}

"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50) // Change background after 50px scroll
    }

    // Always show scrolled state on resource and contact pages
    if (pathname === '/resource' || pathname === '/contact' || pathname === '/news' || pathname === '/' || pathname.startsWith('/services') || pathname.startsWith('/about')) {
      setIsScrolled(true)
      return
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const navigation = [
    { name: "Trang chủ", href: "/" },
    { name: "Giới thiệu", href: "/about" },
    { name: "Dịch vụ", href: "/services" },
    // { name: "Quản lý", href: "/manager" },
    { name: "Tài nguyên", href: "/resource" },
    // { name: "Tin tức", href: "/news" },
    { name: "Liên hệ", href: "/contact" },
  ]

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm' 
        : 'bg-transparent'
    }`} style={{backgroundColor: "white"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-16 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img 
              src="/logo.svg" 
              alt="Vekmarketing Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation - Center Right */}
          <nav className="hidden md:block absolute left-1/3 transform translate-x-30">
            {navigation.map((item, index) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-6 py-3 text-sm font-gmv-semibold transition-all duration-300 rounded-xl hover:shadow-lg hover:scale-105 group ${
                    active 
                      ? 'text-primary bg-primary/10 shadow-md' 
                      : isScrolled 
                        ? 'text-foreground/80 hover:text-foreground hover:bg-white/10'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className={`absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl transition-opacity duration-300 ${
                    active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                  <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full transition-all duration-300 ${
                    active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                </Link>
              )
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-12 w-12" /> : <Menu className="h-12 w-12" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border/50 shadow-xl">
            <div className="px-4 py-6 space-y-2">
              {navigation.map((item, index) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-6 py-4 text-lg font-gmv-semibold transition-all duration-300 rounded-xl group relative overflow-hidden ${
                      active 
                        ? 'text-primary bg-primary/10 shadow-md border-l-4 border-primary' 
                        : 'text-foreground hover:text-primary hover:bg-primary/10'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent transition-opacity duration-300 ${
                      active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}></div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Star } from 'lucide-react'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  image: string
  rating: number
  reviewCount: number
  price: string
  originalPrice?: string
  discount?: string
  badge?: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Thẻ Google Reviews",
    image: "/product_1.jpg",
    rating: 5,
    reviewCount: 1499,
    price: "€9.90 EUR"
  },
  {
    id: 2,
    name: "Bảng NFC Instagram",
    image: "/product_2.jpg",
    rating: 5,
    reviewCount: 182,
    price: "€19.90 EUR"
  },
  {
    id: 3,
    name: "Bảng NFC Google Reviews",
    image: "/product_3.jpg",
    rating: 5,
    reviewCount: 503,
    price: "€19.90 EUR"
  },
  {
    id: 4,
    name: "Bảng NFC Facebook",
    image: "/product_4.jpg",
    rating: 5,
    reviewCount: 460,
    price: "€19.90 EUR"
  },
  {
    id: 5,
    name: "Bảng NFC Goolge/Instagram/Tripadvisor",
    image: "/product_5.jpg",
    rating: 5,
    reviewCount: 350,
    price: "€29.90 EUR"
  },
  {
    id: 6,
    name: "Bảng NFC Linkedin",
    image: "/product_6.jpg",
    rating: 5,
    reviewCount: 275,
    price: "€19.90 EUR"
  },
  {
    id: 7,
    name: "Bảng NFC Tripadvisor",
    image: "/product_7.jpg",
    rating: 5,
    reviewCount: 120,
    price: "€19.90 EUR",
  },
  {
    id: 8,
    name: "Bảng NFC Trustpilot",
    image: "/product_8.jpg",
    rating: 5,
    reviewCount: 890,
    price: "€19.90 EUR"
  },
  {
    id: 9,
    name: "Bảng NFC Goolge/Instagram/Linkedin",
    image: "/product_9.jpg",
    rating: 5,
    reviewCount: 650,
    price: "€29.90 EUR"
  },
  {
    id: 10,
    name: "Bảng NFC Goolge/Instagram/Facebook",
    image: "/product_10.jpg",
    rating: 5,
    reviewCount: 320,
    price: "€29.90 EUR",
  },
  {
    id: 11,
    name: "Bảng NFC Goolge/Instagram",
    image: "/product_11.jpg",
    rating: 5,
    reviewCount: 780,
    price: "€24.90 EUR"
  },
  {
    id: 12,
    name: "Bảng NFC Facebook/Instagram",
    image: "/product_12.jpg",
    rating: 5,
    reviewCount: 1250,
    price: "€24.90 EUR",
  },
  {
    id: 13,
    name: "Bảng NFC Goolge/Linkedin",
    image: "/product_13.jpg",
    rating: 5,
    reviewCount: 210,
    price: "€24.90 EUR",
  },
  {
    id: 14,
    name: "Bảng NFC Goolge/Tripadvisor",
    image: "/product_14.jpg",
    rating: 5,
    reviewCount: 95,
    price: "€24.90 EUR",
  }
]

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-border">
      <div className="relative aspect-square">
        {product.badge && (
          <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-primary text-primary-foreground px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium z-10">
            {product.badge}
          </div>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-t-2xl"
        />
      </div>
      
      <div className="p-3 md:p-6 text-center">
        <h3 className="font-semibold text-card-foreground mb-2 md:mb-3 text-sm md:text-lg leading-tight">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-center mb-2 md:mb-3">
          <div className="flex text-primary mr-1 md:mr-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 md:w-4 md:h-4 ${i < product.rating ? 'fill-current' : 'text-muted-foreground'}`} 
              />
            ))}
          </div>
          <span className="text-muted-foreground text-xs md:text-sm">({product.reviewCount})</span>
        </div>
        
        <div className="flex items-center justify-center gap-1 md:gap-2">
          <span className="text-lg md:text-1xl font-bold text-primary">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm md:text-lg text-muted-foreground line-through">{product.originalPrice}</span>
          )}
        </div>
        
        {product.discount && (
          <p className="text-accent font-medium text-xs md:text-sm mt-1">{product.discount}</p>
        )}
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32" style={{ backgroundColor: '#282826' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Nhận đánh giá chỉ trong{' '}
                <span className="text-primary">3 giây</span>!
              </h1>
              
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-8">
                Cách tốt nhất để phát triển doanh nghiệp của bạn.
              </h2>
              
              <p className="hidden md:block text-lg text-white mb-8">
                Nhận thêm nhiều đánh giá <span className="font-semibold text-primary">Google</span> cùng <span className="font-semibold text-primary">VEK Marketing</span> và thu hút nhiều khách hàng hơn.
              </p>
            </div>
            
            {/* Right Column - Animated GIF */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/product_gif.gif"
                  alt="Animated demonstration of NFC review system"
                  width={500}
                  height={650}
                  className="rounded-3xl shadow-2xl"
                  unoptimized={true}
                />
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-accent rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <div className="min-h-screen py-16" style={{ backgroundColor: '#282826' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-3xl font-bold text-primary mb-4">Sản Phẩm Của Chúng Tôi</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <FloatingButtons />
    </>
  )
}
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
    name: "Google Reviews - Plate",
    image: "/product_1.jpg",
    rating: 5,
    reviewCount: 1499,
    price: "$49.90US"
  },
  {
    id: 2,
    name: "Build Your Bundle",
    image: "/product_2.jpg",
    rating: 5,
    reviewCount: 182,
    price: "$49.90US"
  },
  {
    id: 3,
    name: "10-In-1 Smart Plate",
    image: "/product_3.jpg",
    rating: 5,
    reviewCount: 503,
    price: "$49.90US"
  },
  {
    id: 4,
    name: "Google Reviews - Card",
    image: "/product_4.jpg",
    rating: 5,
    reviewCount: 460,
    price: "$34.90US"
  },
  {
    id: 5,
    name: "Multi-Links Card",
    image: "/product_5.jpg",
    rating: 5,
    reviewCount: 350,
    price: "$39.90US"
  },
  {
    id: 6,
    name: "Create Your Own Custom",
    image: "/product_6.jpg",
    rating: 5,
    reviewCount: 275,
    price: "$59.90US"
  },
  {
    id: 7,
    name: "Stand for Digital Plate",
    image: "/product_7.jpg",
    rating: 5,
    reviewCount: 120,
    price: "$24.90US",
  },
  {
    id: 8,
    name: "Facebook - Plate",
    image: "/product_8.jpg",
    rating: 5,
    reviewCount: 890,
    price: "$49.90US"
  },
  {
    id: 9,
    name: "Instagram - Smart Card",
    image: "/product_9.jpg",
    rating: 5,
    reviewCount: 650,
    price: "$39.90US"
  },
  {
    id: 10,
    name: "TikTok Reviews Bundle",
    image: "/product_10.jpg",
    rating: 5,
    reviewCount: 320,
    price: "$44.90US",
  },
  {
    id: 11,
    name: "Multi-Platform Stand",
    image: "/product_11.jpg",
    rating: 5,
    reviewCount: 780,
    price: "$69.90US"
  },
  {
    id: 12,
    name: "Premium Review Kit",
    image: "/product_12.jpg",
    rating: 5,
    reviewCount: 1250,
    price: "$89.90US",
  },
  {
    id: 13,
    name: "Starter Pack - Basic",
    image: "/product_13.jpg",
    rating: 5,
    reviewCount: 210,
    price: "$19.90US",
  },
  {
    id: 14,
    name: "Enterprise Solution",
    image: "/product_14.jpg",
    rating: 5,
    reviewCount: 95,
    price: "$199.90US",
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
      <section className="bg-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Nhận đánh giá chỉ trong{' '}
                <span className="text-primary">3 giây</span>!
              </h1>
              
              <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-8">
                Tăng gấp đôi Google Reviews hàng tháng trong{' '}
                <span className="text-primary">30 ngày</span>
              </h2>
              
              <p className="hidden md:block text-lg text-muted-foreground mb-4">
                Dựa trên <span className="font-semibold text-primary">kết quả trung bình</span> của khách hàng chúng tôi.
              </p>
              
              <p className="hidden md:block text-lg text-muted-foreground mb-8">
                Bạn tiếp xúc với <span className="font-semibold text-primary">khách hàng hàng ngày</span> — đừng 
                bỏ lỡ <span className="font-semibold text-primary">cơ hội thu thập thêm nhiều đánh giá Google</span>!
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
      <div className="min-h-screen bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Sản Phẩm Của Chúng Tôi</h2>
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
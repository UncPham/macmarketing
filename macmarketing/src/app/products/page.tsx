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
    image: "/imgi_3_Free-Website-Presentation-Mockup-PSD.jpg",
    rating: 5,
    reviewCount: 1499,
    price: "$49.90US"
  },
  {
    id: 2,
    name: "Build Your Bundle (Save up to 65%)",
    image: "/imgi_106_hand-holding-smartphone-social-media-concept-2048x1365.jpg",
    rating: 5,
    reviewCount: 182,
    price: "$49.90US",
    discount: "Save up to 65%"
  },
  {
    id: 3,
    name: "10-In-1 Smart Plate",
    image: "/imgi_69_49263271-2048x1138.png",
    rating: 5,
    reviewCount: 503,
    price: "$49.90US"
  },
  {
    id: 4,
    name: "Google Reviews - Card",
    image: "/imgi_20_horizontal-photo-group-creative-designers-working-project-together-computer-modern-office-1920x1079.jpg",
    rating: 5,
    reviewCount: 460,
    price: "$34.90US"
  },
  {
    id: 5,
    name: "Multi-Links Card",
    image: "/ab_2.jpg",
    rating: 5,
    reviewCount: 350,
    price: "$39.90US"
  },
  {
    id: 6,
    name: "Create Your Own Custom",
    image: "/ab_3.jpg",
    rating: 5,
    reviewCount: 275,
    price: "$59.90US"
  },
  {
    id: 7,
    name: "Stand for Digital Plate",
    image: "/anh_nen.jpg",
    rating: 4,
    reviewCount: 120,
    price: "$24.90US",
    originalPrice: "$44.90US",
    badge: "SAVE 44%"
  },
  {
    id: 8,
    name: "Facebook - Plate",
    image: "/about_us.jpg",
    rating: 5,
    reviewCount: 890,
    price: "$49.90US"
  }
]

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-square bg-gradient-to-br from-blue-100 to-purple-100 p-6">
        {product.badge && (
          <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {product.badge}
          </div>
        )}
        <div className="relative w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>
      </div>
      
      <div className="p-6 text-center">
        <h3 className="font-semibold text-gray-900 mb-3 text-lg leading-tight">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-center mb-3">
          <div className="flex text-yellow-400 mr-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < product.rating ? 'fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-gray-600 text-sm">({product.reviewCount})</span>
        </div>
        
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl font-bold text-blue-600">{product.price}</span>
          {product.originalPrice && (
            <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
          )}
        </div>
        
        {product.discount && (
          <p className="text-orange-500 font-medium text-sm mt-1">{product.discount}</p>
        )}
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of innovative marketing solutions designed to help your business grow and engage with customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
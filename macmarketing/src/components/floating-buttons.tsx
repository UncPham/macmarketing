"use client"

import { MessageCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export function FloatingButtons() {
  const router = useRouter()

  const handleContactClick = () => {
    router.push('/contact')
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* Contact Button */}
        <button
          onClick={handleContactClick}
          className="group flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative"
          aria-label="Liên hệ"
        >
          <MessageCircle className="h-6 w-6" />
          {/* Online indicator dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
          <span className="absolute right-16 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none font-gmv-regular hidden md:block">
            Liên hệ
          </span>
        </button>
      </div>
    </>
  )
}
"use client"

import { Facebook, Instagram, MessageCircle } from "lucide-react"

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* Instagram Button */}
      {/* <a
        href="https://instagram.com/tdagency" // Thay bằng Instagram thực tế
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Theo dõi Instagram"
      >
        <Instagram className="h-6 w-6" />
        <span className="absolute right-16 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Instagram
        </span>
      </a> */}

      {/* Facebook Button */}
      <a
        href="https://www.facebook.com/vekmarketing" // Thay bằng Facebook thực tế
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Chat qua Messenger"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-16 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Messenger
        </span>
      </a>
    </div>
  )
}
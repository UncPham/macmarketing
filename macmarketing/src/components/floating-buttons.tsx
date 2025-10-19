"use client"

import { useState } from "react"
import { Facebook, Instagram, MessageCircle } from "lucide-react"
import { ChatWidget } from "./chat-widget"

export function FloatingButtons() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }

  const closeChat = () => {
    setIsChatOpen(false)
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {/* Messenger Button */}
        <button
          onClick={toggleChat}
          className="group flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative"
          aria-label="Chat qua Messenger"
        >
          <MessageCircle className="h-6 w-6" />
          {/* Online indicator dot */}
          {!isChatOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
          )}
          <span className="absolute right-16 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none font-gmv-regular hidden md:block">
            Messenger
          </span>
        </button>
      </div>

      {/* Chat Widget */}
      <ChatWidget isOpen={isChatOpen} onClose={closeChat} />
    </>
  )
}
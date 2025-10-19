"use client"

import { useEffect } from "react"

interface ChatWidgetProps {
  isOpen: boolean
  onClose: () => void
}

declare global {
  interface Window {
    FB?: {
      CustomerChat?: {
        showDialog: () => void
        hideDialog: () => void
      }
    }
  }
}

export function ChatWidget({ isOpen, onClose }: ChatWidgetProps) {
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      console.log('💬 Attempting to open Facebook Messenger chat...')

      // Try to open Facebook chat
      const tryOpenFBChat = () => {
        if (typeof window.FB !== 'undefined' && window.FB.CustomerChat) {
          console.log('✅ Facebook SDK found, opening chat dialog...')
          window.FB.CustomerChat.showDialog()
          onClose()
          return true
        }
        console.log('⏳ Facebook SDK not ready yet...')
        return false
      }

      // Try immediately first
      if (tryOpenFBChat()) return

      // Wait for SDK to load (retry for up to 10 seconds)
      let attempts = 0
      const maxAttempts = 100 // 10 seconds with 100ms intervals

      const checkInterval = setInterval(() => {
        attempts++
        console.log(`🔄 Checking Facebook SDK... (attempt ${attempts}/${maxAttempts})`)

        if (tryOpenFBChat()) {
          clearInterval(checkInterval)
        } else if (attempts >= maxAttempts) {
          console.error('❌ Facebook SDK failed to load after 10 seconds')
          console.error('Please check if react-messenger-chat-plugin is properly installed and configured')
          clearInterval(checkInterval)
          onClose()
        }
      }, 100)

      return () => clearInterval(checkInterval)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return null
}
